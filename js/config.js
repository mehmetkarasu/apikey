// public-api.js

// Bu örnek, bir üçüncü taraf API'ye yapılan isteklerde açık şekilde API anahtarının kullanıldığını göstermektedir.

const API_KEY = "sk_test_51NB1234567890ABCDEFGHiCOT9l"; // ⚠️ HATALI: API anahtarı açıkta!

function fetchUserData(userId) {
  const url = `https://api.thirdpartyservice.com/users/${userId}?apikey=${API_KEY}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Kullanıcı verisi:", data);
    })
    .catch(error => {
      console.error("Hata oluştu:", error);
    });
}

// Sayfa yüklendiğinde kullanıcı verisini al
document.addEventListener("DOMContentLoaded", () => {
  fetchUserData("12345");
});
