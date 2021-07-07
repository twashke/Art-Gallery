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

$(".load1").click(function () {
  var _this = $(this);
  var existingHTML = _this.html();
  $(_this)
    .html(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Updating...'
    )
    .prop("disabled", false);

  setTimeout(function () {
    $(_this).html(existingHTML).prop("disabled", false);
  }, 5000);
});
