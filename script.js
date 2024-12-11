document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      responseMessage.innerHTML = `<span style="color: green;">Merci ${name} ! Votre message a bien été envoyé.</span>`;
      console.log("Formulaire soumis avec succès : ", { name, email, message });
      form.reset();
    } else {
      responseMessage.innerHTML = `<span style="color: red;">Veuillez remplir tous les champs correctement.</span>`;
    }
  });
});
