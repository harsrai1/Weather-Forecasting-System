
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpItWFi-Ze9enBflzajHd2KMwcTqzYkmQ",
    authDomain: "weather-forecasting-992b7.firebaseapp.com",
    projectId: "weather-forecasting-992b7",
    storageBucket: "weather-forecasting-992b7.appspot.com",
    messagingSenderId: "736392587683",
    appId: "1:736392587683:web:dee708619d507df4ae1216",
    measurementId: "G-1X243CKT8W"
};


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


const feedbackCollection = db.collection('feedback');


const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

  
    const name = feedbackForm.querySelector('#name').value;
    const feedback = feedbackForm.querySelector('#feedback').value;

   
    feedbackCollection.add({
        name: name,
        feedback: feedback
    })
    .then(() => {
        alert('Feedback submitted successfully!');
        feedbackForm.reset();
    })
    .catch((error) => {
        console.error("Error adding feedback: ", error);
    });
});
