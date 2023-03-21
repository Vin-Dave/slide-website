// pobieramy element span z licznikiem
var counter = document.getElementById("counter");

// pobieramy wartość zapisaną w pamięci przeglądarki
var count = localStorage.getItem("counter");

// jeśli wartość nie istnieje, ustawiamy ją na zero
if (count === null) {
  count = 0;
}

// inkrementujemy licznik
count++;

// zapisujemy wartość w pamięci przeglądarki
localStorage.setItem("counter", count);

// wyświetlamy wartość w elemencie span
counter.innerHTML = count;
