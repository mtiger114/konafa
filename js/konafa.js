function findColorAndVegetable() {
  const colors = [
    "متشنكحه",
    "متغرقة",
    "متدلعة",
    "متحزمة",
    "متبعترة",
    "مسخسخة",
    "مزفلطة",
    "مفرهدة",
    "ملظلظة",
    "مدروخة",
    "منحنجه",
    "متنكده",
    "مهبطة",
    "متمرمطة",
    "مقريفة",
    "هفتانه",
    "زهقانة",
    "حرانة",
    "متروقة",
    "عيوطة",
    "مهبودة",
    "مفرهدة",
    "متمرمطة",
    "مسقسقة",
    "سهتانة",
    "معكننه",
    "ملزقة",
    "مسحولة",
    "مسنجلة",
    "مبهدلة",
    "تخنانة",
  ];
  const vegetables = [
    "بالمهلبية",
    "بالقشطة",
    "بالمكسرات",
    "بالزعتر",
    "بالكستر",
    "بالجيلي",
    "بالبلح",
    "بالعسل",
    "بالكراميل",
    "بالجبنة",
    "بالزبادي",
    "بالشربات",
  ];

  const input = document.getElementById("birthday").value;
  const birthday = input.split("/");
  const day = parseInt(birthday[0]);
  const month = parseInt(birthday[1]);

  if (
    isNaN(day) ||
    isNaN(month) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    showError("اكتبها صح (يوم / شهر)");
  } else {
    const color = colors[day - 1];
    const vegetable = vegetables[month - 1];
    showResult(
      `<span style="color:${color.toLowerCase()}">${color}</span> - ${vegetable}`
    );
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

