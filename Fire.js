import FirebaseKeys from './config';
import firebase from 'firebase';

class Fire {
  constructor() {

    firebase.initializeApp(FirebaseKeys);
  }

 
  addPost = async ({ text,  ucret}) => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
  }
    return new Promise((res, rej) => {
      firebase
        .database()
        .ref('/oyuncaklar')
        .push({
          adi: text,
          //image: localUri,
          ucret: ucret,
          //like: 0,
        })
        .then(ref => {
          res(ref);
        })
        .catch(err => {
          rej(err);
        });
    });
  };


  get firestore() {
    return firebase.firestore();
  }
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;
