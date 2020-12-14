import firebase from 'firebase/app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import 'firebase/auth';
import 'firebase/firestore';

dotenv.config({ silent: true });

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

firebase.analytics();

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db = baseDB;
