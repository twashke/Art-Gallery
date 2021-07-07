async function commentFormHandler(event) {
  event.preventDefault();

  const text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const art_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (text) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        art_id,
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#comment-form")
  .addEventListener("click", commentFormHandler);

$(".load1").click(function () {
  var _this = $(this);
  var existingHTML = _this.html();
  $(_this)
    .html(
      '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Posting...'
    )
    .prop("disabled", false);

  setTimeout(function () {
    $(_this).html(existingHTML).prop("disabled", false);
  }, 5000);
});
