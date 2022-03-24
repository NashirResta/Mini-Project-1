import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxuvZjSzko-mqVkM43zzRqWJ6cMS4yoEc",
  authDomain: "todolist-54c3b.firebaseapp.com",
  projectId: "todolist-54c3b",
  storageBucket: "todolist-54c3b.appspot.com",
  messagingSenderId: "6577763430",
  appId: "1:6577763430:web:660a1f15358cc44dbce9a7",
  measurementId: "G-TC8PGET7BQ",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export default { app, database };
