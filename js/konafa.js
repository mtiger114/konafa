function findColorAndVegetable() {
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "Turquoise", "Magenta", "Lavender", "Crimson", "Maroon", "Olive", "Teal", "Cyan", "Navy", "Sky Blue", "Aquamarine", "Tan", "Beige", "Khaki", "Mauve", "Peach", "Slate Gray", "Silver", "Gold", "Plum", "Brown", "Black"];
  const vegetables = ["Carrot", "Broccoli", "Spinach", "Lettuce", "Cabbage", "Tomato", "Potato", "Cucumber", "Pepper", "Onion", "Garlic", "Pumpkin"];

  const input = document.getElementById("birthday").value;
  const birthday = input.split("/");
  const day = parseInt(birthday[0]);
  const month = parseInt(birthday[1]);

  if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
      showError("Invalid date. Please enter a valid date (DD/MM).");
  } else {
      const color = colors[day - 1];
      const vegetable = vegetables[month - 1];
      showResult(`You are <span style="color:${color.toLowerCase()}">${color}</span> - ${vegetable}`);
  }
}

function showError(message) {
  const output = document.getElementById("output");
  output.innerHTML = message;
  output.classList.remove("show");
  output.classList.add("fade-in");
}

function showResult(message) {
  const output = document.getElementById("output");
  output.innerHTML = message;
  output.classList.add("show");
  output.classList.remove("fade-in");
}