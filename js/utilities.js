// get the input field value
function getInputFieldValueById(id) {
  const inputValueString = document.getElementById(id);
  const inputValue = inputValueString.value;
  if (inputValue < 0) {
    alert("NEGATIVE NUMBER GIVEN !!! Insert positive value.");
    exit;
  } else if (inputValue === "") {
    alert("EMPTY field !!! Insert a number.");
    exit;
  } else {
    return inputValue;
  }
}

// Get the tag element data
function getTagInnerTextById(id) {
  const tagText = document.getElementById(id).innerText;
  return tagText;
}

// Get the tag element by Id
function getTagById(id) {
  const tag = document.getElementById(id);
  return tag;
}

// Random color generator
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Triangle random background color generator
const triangle = getTagById("triangle-bg");
triangle.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
triangle.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.backgroundColor = "#fff";
};

// Rectangle random background color generator
const rectangle = getTagById("rectangle-bg");
rectangle.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
rectangle.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  rectangle.style.backgroundColor = "#fff";
};

// Ellipse random background color generator
const ellipse = getTagById("ellipse-bg");
ellipse.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
ellipse.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  ellipse.style.backgroundColor = "#fff";
};

// Parallelogram random background color generator
const parallelogram = getTagById("parallelogram-bg");
parallelogram.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
parallelogram.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  parallelogram.style.backgroundColor = "#fff";
};

// Rhombus random background color generator
const rhombus = getTagById("rhombus-bg");
rhombus.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
rhombus.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  rhombus.style.backgroundColor = "#fff";
};

// Pentagon random background color generator
const pentagon = getTagById("pentagon-bg");
pentagon.onmouseover = function () {
  this.style.backgroundColor = getRandomColor();
  this.style.color = "#000";
};
pentagon.onmouseleave = function () {
  this.style.backgroundColor = getRandomColor();
  pentagon.style.backgroundColor = "#fff";
};

/* Will display the hidden input fields
=======================================*/

// Disable button on click
function disableButton(id) {
  const btn = document.getElementById(id);
  btn.setAttribute("disabled", true);
}

/* Will display the hidden input fields
=======================================*/
// Displays triangle Input fields
const displayTriangleBtn = document.getElementById(
  "display-triangle-input-btn"
);
displayTriangleBtn.addEventListener("click", function () {
  const triangleBtn = getTagById("triangle-input-fields");
  triangleBtn.style.display = "block";
});

// Displays rectangle Input fields
const displayRectangleBtn = document.getElementById(
  "display-rectangle-input-btn"
);
displayRectangleBtn.addEventListener("click", function () {
  const rectangleBtn = getTagById("rectangle-input-fields");
  rectangleBtn.style.display = "block";
});

// Displays parallelogram Input fields
const displayParallelogramBtn = document.getElementById(
  "display-parallelogram-input-btn"
);
displayParallelogramBtn.addEventListener("click", function () {
  const parallelogramBtn = getTagById("parallelogram-input-fields");
  parallelogramBtn.style.display = "block";
});

// Displays rhombus Input fields
const displayRhombusBtn = document.getElementById("display-rhombus-input-btn");
displayRhombusBtn.addEventListener("click", function () {
  const rhombusBtn = getTagById("rhombus-input-fields");
  rhombusBtn.style.display = "block";
});

// Displays pentagon Input fields
const displayPentagonBtn = document.getElementById(
  "display-pentagon-input-btn"
);
displayPentagonBtn.addEventListener("click", function () {
  const pentagonBtn = getTagById("pentagon-input-fields");
  pentagonBtn.style.display = "block";
});

// Displays Ellipse Input fields
const displayEllipseInputField = document.getElementById(
  "display-ellipse-input-field"
);
displayEllipseInputField.addEventListener("click", function () {
  const ellipseBtn = getTagById("ellipse-input-fields");
  ellipseBtn.style.display = "block";
});

/* Hide inputs show values
================================= */
// Triangle
document
  .getElementById("hide-triangle-input-show-value")
  .addEventListener("click", function () {
    const triangleBtn = getTagById("triangle-input-fields");
    const tag1 = document.getElementById("supposed-triangle-base");
    const tag2 = document.getElementById("supposed-triangle-height");

    const triangleInputValue1 = getInputFieldValueById("triangle-base");
    const triangleInputValue2 = getInputFieldValueById("triangle-height");
    console.log(triangleInputValue1, triangleInputValue2);

    // Sets value to the text tag
    tag1.innerText = triangleInputValue1;
    tag2.innerText = triangleInputValue2;
    // Hide the input fields
    triangleBtn.style.display = "none";
    triangleInputValue1.value = "";
    triangleInputValue2.value = "";
  });

// Rectangle
document
  .getElementById("hide-rectangle-input-show-value")
  .addEventListener("click", function () {
    const triangleBtn = getTagById("rectangle-input-fields");
    const tag1 = document.getElementById("supposed-rectangle-width");
    const tag2 = document.getElementById("supposed-rectangle-length");

    const triangleInputValue1 = getInputFieldValueById("rectangle-width");
    const triangleInputValue2 = getInputFieldValueById("rectangle-length");
    console.log(triangleInputValue1, triangleInputValue2);

    // Sets value to the text tag
    tag1.innerText = triangleInputValue1;
    tag2.innerText = triangleInputValue2;
    // Hide the input fields
    triangleBtn.style.display = "none";
    triangleInputValue1.value = "";
    triangleInputValue2.value = "";
  });

// Parallelogram
document
  .getElementById("hide-parallelogram-input-show-value")
  .addEventListener("click", function () {
    const parallelogramBtn = getTagById("parallelogram-input-fields");
    const tag1 = document.getElementById("supposed-parallelogram-width");
    const tag2 = document.getElementById("supposed-parallelogram-length");

    const parallelogramInputValue1 =
      getInputFieldValueById("parallelogram-base");
    const parallelogramInputValue2 = getInputFieldValueById(
      "parallelogram-height"
    );

    // Sets value to the text tag
    tag1.innerText = parallelogramInputValue1;
    tag2.innerText = parallelogramInputValue2;
    // Hide the input fields
    parallelogramBtn.style.display = "none";
  });

// Rhombus
document
  .getElementById("hide-rhombus-input-show-value")
  .addEventListener("click", function () {
    const rhombusBtn = getTagById("rhombus-input-fields");
    const tag1 = document.getElementById("supposed-rhombus-diagonal1");
    const tag2 = document.getElementById("supposed-rhombus-diagonal2");

    const rhombusInputValue1 = getInputFieldValueById("rhombus-diagonal1");
    const rhombusInputValue2 = getInputFieldValueById("rhombus-diagonal2");

    // Sets value to the text tag
    tag1.innerText = rhombusInputValue1;
    tag2.innerText = rhombusInputValue2;
    // Hide the input fields
    rhombusBtn.style.display = "none";
  });

// Pentagon
document
  .getElementById("hide-pentagon-input-show-value")
  .addEventListener("click", function () {
    const pentagonBtn = getTagById("pentagon-input-fields");
    const tag1 = document.getElementById("supposed-pentagon-diagonal1");
    const tag2 = document.getElementById("supposed-pentagon-diagonal2");

    const pentagonInputValue1 = getInputFieldValueById("pentagon-p");
    const pentagonInputValue2 = getInputFieldValueById("pentagon-b");

    // Sets value to the text tag
    tag1.innerText = pentagonInputValue1;
    tag2.innerText = pentagonInputValue2;
    // Hide the input fields
    pentagonBtn.style.display = "none";
  });

// Ellipse
document
  .getElementById("hide-input-show-value")
  .addEventListener("click", function () {
    const ellipseBtn = getTagById("ellipse-input-fields");
    const tag1 = document.getElementById("supposed-ellipse-diagonal1");
    const tag2 = document.getElementById("supposed-ellipse-diagonal2");

    const ellipseInputValue1 = getInputFieldValueById("ellipse-a");
    const ellipseInputValue2 = getInputFieldValueById("ellipse-b");
    console.log(ellipseInputValue1, ellipseInputValue2);

    // Sets value to the text tag
    tag1.innerText = ellipseInputValue1;
    tag2.innerText = ellipseInputValue2;
    // Hide the input fields
    ellipseBtn.style.display = "none";
  });
