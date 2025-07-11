document.getElementById("btn").addEventListener("click", () => {
  fetch("https://script.google.com/macros/s/AKfycbwJjfP22vyX8gnazhkH4wt7_30FRIkJUlDfIG-8fkUvIbiACkCgUUTRq4BwEAbTsTL0/exec")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
});
