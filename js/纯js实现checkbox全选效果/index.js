const fruits = ["apple", "banana", "watermalen", "pear", "orange"];

// create a checkbox for each fruit
const fragment = document.createDocumentFragment();
fruits.forEach((fruit) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.id = fruit;
  input.type = "checkbox";
  input.classList.add("item");
  input.checked = Math.random() > 0.5;
  input.id = fruit;
  const label = document.createElement("label");
  label.setAttribute("for", fruit);
  label.innerText = fruit;
  li.appendChild(input);
  li.appendChild(label);
  fragment.appendChild(li);
});
const ul = document.querySelector("#fruits");
ul.appendChild(fragment);

// bind events
const checkAll = document.querySelector("#checkAll");
const items = [...document.querySelectorAll(".item")];
const n = items.length;
items.forEach((item) => {
  item.addEventListener("change", (e) => {
    renderAll();
  });
});
checkAll.addEventListener("change", (e) => {
  items.forEach((item) => {
    item.checked = e.target.checked;
  });
  renderAll();
});
function renderAll() {
  const checked = items.filter((item) => item.checked).length;
  checkAll.checked = checked === n;
  checkAll.indeterminate = checked > 0 && checked < n;
}
renderAll();
