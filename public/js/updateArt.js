async function updateAnArt(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const form = document.querySelector("#updateart");

  const formData = new FormData(form);
  const response = await fetch(`/api/arts/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update an art");
  }
}

document.querySelector("#updateart").addEventListener("submit", updateAnArt);
