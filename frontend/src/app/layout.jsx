import { StateContext, StateProvider } from '@/context/StateContext';
import './globals.css';
import { Inter } from 'next/font/google';
import reducer, { initialState } from '@/context/StateReducers';

import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Whatsapp',
	description: 'Whatsapp clone',
};

export default function RootLayout({ children }) {

	return (
		<html lang='en'>
			<body className={inter.className}>
				<StateProvider initialState={initialState} reducer={reducer}>{children}</StateProvider>
			</body>
		</html>
	);
}
//<ContextProvider/>
