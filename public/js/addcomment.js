async function commentFormHandler(event) {
  event.preventDefault();

  const text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const art_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //will remove this and from fecth req when user_id is taken from seesion
  const user_id = 1;

  if (text) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        art_id,
        text,
        user_id,
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
