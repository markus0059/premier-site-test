const message =
  "Merci pour votre message .La famille royal vous répondra très prochainement";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });