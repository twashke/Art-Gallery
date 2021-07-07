const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      })

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in.");
      document.location.replace("/login");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);


document.getElementById("submitBtn").onclick = function () {
  document
    .getElementById("submitBtn")
    .outerHTML(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
    )
    .setAttribute("disabled", true);
};
