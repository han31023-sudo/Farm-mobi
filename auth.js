import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// DEMO LOGIN
window.loginDemo = function () {
  alert("Login demo berhasil");
  window.location.href = "game.html";
};

// GOOGLE LOGIN
window.loginGoogle = function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Google login:", result.user.uid);
      window.location.href = "game.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// PHONE LOGIN
let confirmationResult;

window.loginPhone = function () {
  const phone = prompt("Masukkan nomor HP (contoh: +628xxxx)");
  if (!phone) return;

  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { size: "invisible" },
    auth
  );

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then((result) => {
      confirmationResult = result;
      const otp = prompt("Masukkan kode OTP");
      return confirmationResult.confirm(otp);
    })
    .then(() => {
      window.location.href = "game.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
