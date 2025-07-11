document.getElementById("btn").addEventListener("click", () => {
  fetch("https://script.google.com/macros/s/AKfycbw7fVpWPI4vEedF7-GyImDV7fjpxYQ4ghZAMFBZz_gEzJqmkUhsUhiCh0cfPaj9wf4/exec")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
});
