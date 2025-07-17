const form = document.forms["addForm"];
let c = 0;
let checker;
let texter;
let deleter;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputText = form["newTask"].value;
  console.log(inputText);
  if (inputText == ""){
    swal("Error!", "Please Eneter Your Task!", "error");
  } 
  else {
    let clone = task.cloneNode(true);
    clone.classList.remove("none");
    clone.id = "task" + c++;
    clone.children[1].innerHTML = inputText;
    task.after(clone);
    clone.children[0].id = "checker" + c;
    clone.children[1].id = "texter" + c;
    clone.children[2].id = "deleter" + c;
    clone.children[0].onclick = () => {
      clone.children[1].classList.toggle("deletedTask");
    };
    clone.children[2].onclick = () => {
      clone.classList.add("none");
    };
    deletAll.classList.add("show");
    deletAll.addEventListener("click", function (e) {
      while(list.children.length > 1){
        list.removeChild(list.lastChild);
      }
    });
  }
});


function deletTask() {
  task.classList.add("none");
}
let flag = true;

function finishTask() {
  task.children[1].classList.toggle("deletedTask");
}
