import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAEkCLZduLI6_6A2nS7Ud5kwX5jsyVIsls',
	authDomain: 'whatsapp-clone-c930a.firebaseapp.com',
	projectId: 'whatsapp-clone-c930a',
	storageBucket: 'whatsapp-clone-c930a.appspot.com',
	messagingSenderId: '967627350829',
	appId: '1:967627350829:web:0bb8231937c2b47e89e9a4',
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)