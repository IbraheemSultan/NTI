// SOLVE GRADS PROPLEMS
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const m1 = document.getElementById("physicsMarks").value;
  const m2 = document.getElementById("chemistryMarks").value;
  const m3 = document.getElementById("biologyMarks").value;
  const m4 = document.getElementById("mathematicsMarks").value;
  const m5 = document.getElementById("computerMarks").value;
  let marks = [m1, m2, m3, m4, m5];
  const per = [];
  const grad = [];
  for (i = 0; i < 5; i++) {
    per[i] = (marks[i] / 20) * 100;
    if (per[i] >= 90) grad[i] = "A";
    else if (per[i] >= 80) grad[i] = "B";
    else if (per[i] >= 70) grad[i] = "C";
    else if (per[i] >= 60) grad[i] = "D";
    else if (per[i] >= 40) grad[i] = "E";
    else grad[i] = "F";
  }

  const g1 = (document.getElementById("physicsGrad").innerHTML = grad[0]);
  const g2 = (document.getElementById("chemistryGrad").innerHTML = grad[1]);
  const g3 = (document.getElementById("biologyGrad").innerHTML = grad[2]);
  const g4 = (document.getElementById("mathematicsGrad").innerHTML = grad[3]);
  const g5 = (document.getElementById("computerGrad").innerHTML = grad[4]);

  const p1 = (document.getElementById("physicsPercentage").innerHTML =
    per[0] + "%");
  const p2 = (document.getElementById("chemistryPercentage").innerHTML =
    per[1] + "%");
  const p3 = (document.getElementById("biologyPercentage").innerHTML =
    per[2] + "%");
  const p4 = (document.getElementById("mathematicsPercentage").innerHTML =
    per[3] + "%");
  const p5 = (document.getElementById("computerPercentage").innerHTML =
    per[4] + "%");
});

// Clac Min Max of 3

const formMin = document.forms["clacMinMax"];
formMin.addEventListener("submit", function (e) {
  e.preventDefault();

  let n1 = formMin["n1"].value;
  let n2 = formMin["n2"].value;
  let n3 = formMin["n3"].value;

  let max = n1;
  if (max <= n2) {
    max = n2;
    if (max <= n3) {
      max = n3;
    }
  } else if (max <= n3) {
    max = n3;
  }

  let min = n1;
  if (min >= n2) {
    min = n2;
    if (min >= n3) {
      min = n3;
    }
  } else if (min >= n3) {
    min = n3;
  }

  // another soultion  by math

  // max =Math.max(n1,n2,n3);
  // min= Math.min(n1,n2,n3);

  console.log(min);
  document.getElementById("min").innerHTML = min;
  document.getElementById("max").innerHTML = max;
});

// Positive Or Negative Value

const formPos = document.forms["posOrNeg"];
formPos.addEventListener("submit", function (e) {
  e.preventDefault();

  let n1 = formPos["n1"].value;
  if (n1 >= 0) document.getElementById("pos").innerHTML = " Positive";
  else document.getElementById("pos").innerHTML = "Negative";
});

//  Even Or Odd

const evenOrOdd = document.forms["evenOrOdd"];
evenOrOdd.addEventListener("submit", function (e) {
  e.preventDefault();

  let n1 = evenOrOdd["n1"].value;
  if (n1 % 2 == 0) document.getElementById("type").innerHTML = "Even";
  else document.getElementById("type").innerHTML = "Odd";
});

// Calculate specific root
const calcroot = document.forms["calcRoot"];

calcroot.addEventListener("submit", function (e) {
  e.preventDefault();
  let n1 = calcroot["n1"].value;
  let n2 = calcroot["n2"].value;
  let output = Math.pow(n1, 1 / n2);
  document.getElementById("value").innerHTML = output;
});

// simple-calculator
const simple = document.forms["simple"];
function validition() {
  let n1 = simple["n1"].value;
  let n2 = simple["n2"].value;
  let s = simple["oper"].value;
  let output;
  let x;
  const arr = ["+", "-", "*", "/", "%"];
  let bool = false;
  for (i = 0; i < 5; i++) {
    if (s == arr[i]) {
      bool = true;
      x = i;
      break;
    }
  }
  if (bool) {
    switch (x) {
      case 0:
        output = n1 + n2;
        break;
      case 1:
        output = n1 - n2;
        break;
      case 2:
        output = n1 * n2;
        break;
      case 3:
        output = n1 / n2;
        break;
      case 4:
        output = n1 % n2;
        break;
    }
    console.log(output)
    document.getElementById("output").innerHTML = output;
    return false;
  } else {
    document.getElementById("msg").innerHTML = "Not Valud Valie";
    return false;
  }
}
