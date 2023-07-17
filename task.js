const container = document.getElementById("container");

let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105,
];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    const box = document.createElement("div");
    box.classList.add("card");
    box.style.backgroundColor = "red";
    box.innerHTML = numbers[i];
    container.appendChild(box);
  } else {
    const box = document.createElement("div");
    box.classList.add("card");
    box.style.backgroundColor = "blue";
    box.innerHTML = numbers[i];
    container.appendChild(box);
  }
}

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (event) {
    let message = event.target.innerHTML;
    alert(`You clicked on ${message}`);
    if (event.target.style.backgroundColor == "red") {
      event.target.style.backgroundColor = "green";
    }
  });
}
