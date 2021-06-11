import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyCK-6_fmbYqc2mli6afGejy0GnCBKdfJac",
	authDomain: "linkedin-clone-f4d90.firebaseapp.com",
	projectId: "linkedin-clone-f4d90",
	storageBucket: "linkedin-clone-f4d90.appspot.com",
	messagingSenderId: "888606402125",
	appId: "1:888606402125:web:7daf2099a3468aeea81e04"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};