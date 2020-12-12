const firebase = require("firebase");
const admin = require("firebase-admin");

var firebaseConfig = {
   /*apiKey: "AIzaSyCZyMg0daR2w3eMG9UEjPrJgHy-cRzpevo",
   authDomain: "smallfarmsdevelopment.firebaseapp.com",
   databaseURL: "https://smallfarmsdevelopment.firebaseio.com",
   projectId: "smallfarmsdevelopment",
   storageBucket: "smallfarmsdevelopment.appspot.com",
   messagingSenderId: "389913112329",
   appId: "1:389913112329:web:968c7c32c72fb7d3626dd8",
   measurementId: "G-JR3QQT70ZM",*/
  /*   apiKey: "AIzaSyA3bNnN6Hx3MtPov0RXhTPzOsN1dnK6hi4",
     authDomain: "dvara-ait.firebaseapp.com",
     databaseURL: "https://dvara-ait.firebaseio.com",
     projectId: "dvara-ait",
     storageBucket: "dvara-ait.appspot.com",
     messagingSenderId: "470053074649",
     appId: "1:470053074649:web:5aa0982a688cf8b64230c8",
     measurementId: "G-0JJ7P6NHD2"*/

 apiKey: 'AIzaSyDdRpzR71H7eiLCnh4xRbeHLcjWyQwvMbA',
 authDomain: 'edairy-7fcc9.firebaseapp.com',
 databaseURL: 'https://edairy-7fcc9.firebaseio.com',
 projectId: 'edairy-7fcc9',
 storageBucket: 'edairy-7fcc9.appspot.com',
 messagingSenderId: '808250396538',
 appId: '1:808250396538:web:01e9116714acfa8a3a50c3',
 measurementId: 'G-SFMK3M2LRL',


/*
apiKey: "AIzaSyAQmb7u6eyrKKvSl9Wx7D_28ndyaJdkCR0",
authDomain: "dvarasurabhiinsurance-dev.firebaseapp.com",
databaseURL: "https://dvarasurabhiinsurance-dev.firebaseio.com",
projectId: "dvarasurabhiinsurance-dev",
storageBucket: "dvarasurabhiinsurance-dev.appspot.com",
messagingSenderId: "812804743364",
appId: "1:812804743364:web:c031ab4359b2910746a991",
measurementId: "G-LRKCFGLZL2"
*/


/*
  apiKey: "AIzaSyCWgqhT2nFkstmWGV0ObhQbeZXBmHP0sMc",
  authDomain: "gopiiffcotokiotesting.firebaseapp.com",
  databaseURL: "https://gopiiffcotokiotesting.firebaseio.com",
  projectId: "gopiiffcotokiotesting",
  storageBucket: "gopiiffcotokiotesting.appspot.com",
  messagingSenderId: "322511257233",
  appId: "1:322511257233:web:0f0cba0f84a343bc1f8930",
  measurementId: "G-T6194V99ZH"
*/


/*
apiKey: "AIzaSyAQmb7u6eyrKKvSl9Wx7D_28ndyaJdkCR0",
  authDomain: "dvarasurabhiinsurance-dev.firebaseapp.com",
  databaseURL: "https://dvarasurabhiinsurance-dev.firebaseio.com",
  projectId: "dvarasurabhiinsurance-dev",
  storageBucket: "dvarasurabhiinsurance-dev.appspot.com",
  messagingSenderId: "812804743364",
  appId: "1:812804743364:web:c031ab4359b2910746a991",
  measurementId: "G-LRKCFGLZL2"*/

/*
  apiKey: "AIzaSyA3bNnN6Hx3MtPov0RXhTPzOsN1dnK6hi4",
  authDomain: "dvara-ait.firebaseapp.com",
  databaseURL: "https://dvara-ait.firebaseio.com",
  projectId: "dvara-ait",
  storageBucket: "dvara-ait.appspot.com",
  messagingSenderId: "470053074649",
  appId: "1:470053074649:web:5aa0982a688cf8b64230c8",
  measurementId: "G-0JJ7P6NHD2"
*/

/* apiKey: "AIzaSyDTDooYvVbUr9doiGOFvU9p685xaqObLRM",
         authDomain: "dvarasurabhiinsurancedev.firebaseapp.com",
         databaseURL: "https://dvarasurabhiinsurancedev.firebaseio.com",
         projectId: "dvarasurabhiinsurancedev",
         storageBucket: "dvarasurabhiinsurancedev.appspot.com",
         messagingSenderId: "1077461079208",
         appId: "1:1077461079208:web:a899d380171c55d53ade9d",
         measurementId: "G-2MHP7QP4MD"

*/
/*
         apiKey: "AIzaSyCUQTergmBigVLpfqDujSCxuKlCiFX8KPs",
         authDomain: "apidevelopmentgopi.firebaseapp.com",
         databaseURL: "https://apidevelopmentgopi.firebaseio.com",
         projectId: "apidevelopmentgopi",
         storageBucket: "apidevelopmentgopi.appspot.com",
         messagingSenderId: "1030688635839",
         appId: "1:1030688635839:web:ce8fabb1206b0bf1e9ff0a",
         measurementId: "G-ZB1G951EDQ"
*/

};

const config = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = { database };
