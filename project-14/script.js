const generateBtn = document.getElementById("generateBtn");
const numberInput = document.getElementById("number");
const fibonacciList = document.getElementById("fibonacciList");

generateBtn.addEventListener("click", () => {
  fibonacciList.innerHTML = "";
  const n = parseInt(numberInput.value);
  const sequence = generateFibonacciSequence(n);
  sequence.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    fibonacciList.appendChild(listItem);
  });
});

function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }
  return sequence;
}
