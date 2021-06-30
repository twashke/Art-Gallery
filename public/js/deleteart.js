async function deleteAnArt() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/arts/${id}", {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert("Art Not Deleted");
  }
}

document.querySelector(".artdelete").addEventListener("click", deleteAnArt);
