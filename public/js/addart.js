async function newArtFormHandler(event) {
     event.preventDefault();

     const form = document.querySelector("#addArt");

     const formData = new FormData(form);

     const response = await fetch(`/api/arts`, {
          method: "POST",
          body: formData,
     });

     if (response.ok) {
          document.location.replace("/dashboard");
     } else {
          alert(response.statusText);
     }
}

document.querySelector("#addArt").addEventListener("submit", newArtFormHandler);
