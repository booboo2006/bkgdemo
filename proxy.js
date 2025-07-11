export default async function handler(req, res) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbwJjfP22vyX8gnazhkH4wt7_30FRIkJUlDfIG-8fkUvIbiACkCgUUTRq4BwEAbTsTL0/exec");
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
