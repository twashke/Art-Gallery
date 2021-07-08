async function deleteAnArt(event) {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/arts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to delete art");
    }
  }
}

document.querySelector("#allartsbyuser").addEventListener("click", deleteAnArt);

$(".load1").click(function () {
  var _this = $(this);
  var existingHTML = _this.html();
  $(_this)
    .html(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Deleting...'
    )
    .prop("disabled", false);

  setTimeout(function () {
    $(_this).html(existingHTML).prop("disabled", false);
  }, 5000);
});
