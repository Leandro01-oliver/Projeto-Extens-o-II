// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTjjgaaoqCZ_NvocKxksNQ8MH3HKYq8Y",
  authDomain: "portal-news-fake.firebaseapp.com",
  projectId: "portal-news-fake",
  storageBucket: "portal-news-fake.appspot.com",
  messagingSenderId: "101453780546",
  appId: "1:101453780546:web:986c8f792b95f4a145ffdb",
  measurementId: "G-SWWXCESGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);