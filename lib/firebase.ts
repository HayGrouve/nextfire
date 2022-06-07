import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCGdzgUXjWIw2EQqdHsGdpcJ6LNUeShZXw',
  authDomain: 'nextfire-7f9cf.firebaseapp.com',
  projectId: 'nextfire-7f9cf',
  storageBucket: 'nextfire-7f9cf.appspot.com',
  messagingSenderId: '873371123453',
  appId: '1:873371123453:web:7716ce20cd1f9277fd8894',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
