const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
      document.location.replace("/login");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

// change submit buttons onclick
document.getElementById("submitBtn").onclick = function () {
  document
    .getElementById("submitBtn")
    .outerHTML(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...'
    )
    .setAttribute("disabled", true);
};
