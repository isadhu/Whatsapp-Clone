'use client';
import { StateContext, StateProvider, useStateProvider } from '@/context/StateContext';
import { reducerCases } from '@/context/constants';
import { CHECK_USER_ROUTE } from '@/utils/ApiRoutes';
import { firebaseAuth } from '@/utils/FirebaseConfig';
import axios from 'axios';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

function Login() {
	const router = useRouter();

	const [{}, dispatch] = useStateProvider();

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();
		const {
			user: { displayName: name, email, photoUrl: profileImage },
		} = await signInWithPopup(firebaseAuth, provider);
		try {
			if (email) {
				const { data } = await axios.post(CHECK_USER_ROUTE, { email });
				console.log({ data });
				if (!data.status) {
					dispatch({
						type: reducerCases.SET_NEW_USER,
						newUser: true,
					});
					dispatch({
						type: reducerCases.SET_USER_INFO,
						userInfo: {
							name,
							email,
							profileImage,
							status: '',
						},
					});
					router.push('/onboarding');
				}
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6'>
			<div className='flex items-center justify-center gap-2 text-white'>
				<Image
					src='/whatsapp.gif'
					width={300}
					height={300}
					alt='whatsapp'
					priority={true}
				/>
				<span className='text-7xl'>Whatsapp</span>
			</div>
			<button
				className='flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg'
				onClick={handleLogin}>
				<FcGoogle className='text-4xl' />
				<span className='text-white text-2xl'>Login with Google</span>
			</button>
		</div>
	);
}

export default Login;
