// GOOGLE LOGIN
function loginGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      window.location.href = "game.html";
    })
    .catch(function(error) {
      alert(error.message);
    });
}

// PHONE LOGIN
var confirmationResult;

window.onload = function() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha',
    { size: 'normal' }
  );
};

function sendOTP() {
  var phone = document.getElementById("phone").value;
  firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
    .then(function(result) {
      confirmationResult = result;
      alert("OTP terkirim");
    })
    .catch(function(error) {
      alert(error.message);
    });
}

function verifyOTP() {
  var code = document.getElementById("otp").value;
  confirmationResult.confirm(code)
    .then(function() {
      window.location.href = "game.html";
    })
    .catch(function(error) {
      alert("OTP salah");
    });
}
