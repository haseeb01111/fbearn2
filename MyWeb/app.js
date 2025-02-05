// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDHUEj6XqmbEehstEQq-PLyniFpckuvVFE",
  authDomain: "ytearn-d9552.firebaseapp.com",
  databaseURL: "https://ytearn-d9552-default-rtdb.firebaseio.com",
  projectId: "ytearn-d9552",
  storageBucket: "ytearn-d9552.appspot.com",
  messagingSenderId: "386565144844",
  appId: "1:386565144844:web:3a64d7319940ab9dbe4929",
  measurementId: "G-9SW18MBM1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Signup form handling
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (fullname && email && password) {
        // Create user with Firebase Authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed up:', user);
                alert('Signup successful! Now you can log in.');
                window.location.href = 'login.html'; // Redirect to login page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Signup failed:', errorCode, errorMessage);
                alert(`Error: ${errorMessage}`);
            });
    } else {
        alert('Please fill in all fields.');
    }
});

// Login form handling
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    if (loginEmail && loginPassword) {
        // Firebase authentication with email and password
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User logged in:', user);
                alert('Login successful!');
                window.location.href = 'plans.html'; // Redirect to plans page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Login failed:', errorCode, errorMessage);
                alert(`Error: ${errorMessage}`);
            });
    } else {
        alert('Please enter valid credentials.');
    }
});
