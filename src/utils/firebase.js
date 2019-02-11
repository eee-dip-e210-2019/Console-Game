import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCqb9PDTzmp8EB7GhczJfRLcchsD5jBTVQ',
	authDomain: 'eee-dip.firebaseapp.com',
	databaseURL: 'https://eee-dip.firebaseio.com',
	projectId: 'eee-dip',
	storageBucket: 'eee-dip.appspot.com',
	messagingSenderId: '740422470812'
};

class FireApp {
	constructor(config) {
		firebase.initializeApp(config);
		this.firestore = firebase.firestore();
	}
}

export default new FireApp(config);
