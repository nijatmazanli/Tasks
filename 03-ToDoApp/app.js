const form = document.querySelector(".form");
const list = document.querySelector(".toDoLsit");
const input = document.querySelector(".input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  // const li = do
  createLi();

  input.value = "";
});

function createLi() {
  const li = document.createElement("li");
  const markButton = document.createElement("button");
  const unmarkButton = document.createElement("button");
  const delButton = document.createElement("button");

  li.innerText = input.value;
  markButton.innerText = "Mark as Done";
  unmarkButton.innerText = "Mark as UnDone";
  delButton.innerText = "Delete";

  li.className = "work";
  markButton.className = "mark_butt";
  unmarkButton.className = "unmark_butt";
  delButton.className = "del_butt";

  markButton.addEventListener("click", markToDo);
  unmarkButton.addEventListener("click", unmarkToDo);
  delButton.addEventListener("click", delToDo);

  li.appendChild(markButton);
  li.appendChild(unmarkButton);
  li.appendChild(delButton);

  list.appendChild(li);
}
function markToDo(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.style.color = "white";
  e.target.parentElement.style.backgroundColor = "#2F7C02";
}
function unmarkToDo(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.style.backgroundColor = "#6CEC4D";
  e.target.parentElement.style.color = "#225100";
}
function delToDo(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.remove();
  alert("Deleting Item")
}
