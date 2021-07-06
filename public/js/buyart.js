function payRequestHandler(event) {
  const artname = event.target.getAttribute("data-name");
  const artprice = event.target.getAttribute("data-price");

  fetch("/api/users/pay", {
    method: "POST",
    body: JSON.stringify({
      artname: artname,
      artprice: artprice,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        alert("Error: " + response.statusText);
        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(function (data) {
      console.log(data);
      window.location.href = data.togo;
    });
}

document
  .querySelector(".paybutton")
  .addEventListener("click", payRequestHandler);
