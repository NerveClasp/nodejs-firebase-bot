import firebase from 'firebase';
import config from './.config_firebase.json'
const fire = firebase.initializeApp(config);
export default fire;