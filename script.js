let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNiWNuAf564ODrOlg6lNdBTNUxaJgwvjw",
    authDomain: "healthcare-chat-bot-6d401.firebaseapp.com",
    projectId: "healthcare-chat-bot-6d401",
    storageBucket: "healthcare-chat-bot-6d401.appspot.com",
    messagingSenderId: "847363013728",
    appId: "1:847363013728:web:2e0c4bbd5743f95e9a1705",
    measurementId: "G-FMY2XRV007"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //get ref to database services

  const db = getDatabase(app);

  
</script>