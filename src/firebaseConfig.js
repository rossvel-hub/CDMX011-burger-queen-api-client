import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getFirestore } from 'firebase/firestore';

// cambiar por la configuracion de proyecto _BQac
const app = firebase.initializeApp({
  apiKey: "AIzaSyBUe83T-AZWA80tQlChYq1WjIc2eOOv6T0",
  authDomain: "burguerqac.firebaseapp.com",
  projectId: "burguerqac",
  storageBucket: "burguerqac.appspot.com",
  messagingSenderId: "175567688083",
  appId: "1:175567688083:web:15fd7dddbdfa4545b8d866"
});

//provedor para authenticar x email y password
export const auth = firebase.auth();

// export const firebaseDB = getFirestore(app);

export default app;
