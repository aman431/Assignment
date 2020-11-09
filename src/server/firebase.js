import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCz_EiSHlLjWW2YYmvTl1IIiAFPrviKCHc",
    authDomain: "slack-clone-707c5.firebaseapp.com",
    databaseURL: "https://slack-clone-707c5.firebaseio.com",
    projectId: "slack-clone-707c5",
    storageBucket: "slack-clone-707c5.appspot.com",
    messagingSenderId: "812315810817",
    appId: "1:812315810817:web:cf4c8fd6e6d30c96bd7400",
    measurementId: "G-0XNSQV2KS6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;