document.getElementById("btn").addEventListener("click", () => {
  fetch("https://script.google.com/macros/s/AKfycbxlD9vTQavYJl5ZVHqkDV6kp1fhjYP_6eeht4e_NvgGafhPM6pJvcJkbheeHMcMv4-e/exec")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
});
