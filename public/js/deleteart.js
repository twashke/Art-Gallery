async function deleteAnArt(event) {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    // console.log("@@@@@@@@@@@@@@@@@@@@@@@", id);
    const response = await fetch(`/api/arts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete art");
    }
  }
}

// document.querySelector("#deleteart").addEventListener("click", deleteAnArt);
document.querySelector("#allartsbyuser").addEventListener("click", deleteAnArt);
