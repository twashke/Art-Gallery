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

$(".load1").click(function () {
  var _this = $(this); 
  var existingHTML = _this.html(); 

  $(_this)
    .html(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Uploading...'
    )
    .prop("disabled", false);

  setTimeout(function () {
    $(_this).html(existingHTML).prop("disabled", false); 
  }, 3000); 
});
