function addFruit() {
  const select = document.getElementById("fruitSelect");
  const fruit = select.value;
  const list = document.getElementById("fruitList");

  if (!fruit) {
    alert("Silakan pilih nama buah terlebih dahulu.");
    return;
  }

  const items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    if (items[i].dataset.value === fruit) {
      alert("Buah sudah dipilih!");
      return;
    }
  }

  const li = document.createElement("li");
  li.textContent = fruit;
  li.dataset.value = fruit;

 const btn = document.createElement("button");
  btn.textContent = "🗑";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  list.appendChild(li);

  select.value = "";
}