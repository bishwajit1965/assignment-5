let serial = 0;

// Triangle
document
  .getElementById("triangle-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("triangle-card-title");
    const elementBase = getInputFieldValueById("triangle-base");
    const elementHeight = getInputFieldValueById("triangle-height");
    const elementArea = 0.5 * parseInt(elementBase) * parseInt(elementHeight);

    displayDataInTable(elementTitle, elementBase, elementHeight, elementArea);

    // Will disable the button on click once
    disableButton("triangle-card-btn");
  });

// Rectangle
document
  .getElementById("rectangle-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("rectangle-card-title");
    const elementWidth = getInputFieldValueById("rectangle-width");
    const elementLength = getInputFieldValueById("rectangle-length");

    const elementArea = parseInt(elementWidth) * parseInt(elementLength);

    displayDataInTable(elementTitle, elementWidth, elementLength, elementArea);
    disableButton("rectangle-card-btn");
  });

// Parallelogram
document
  .getElementById("parallelogram-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("parallelogram-card-title");
    const elementWidth = getInputFieldValueById("parallelogram-base");
    const elementLength = getInputFieldValueById("parallelogram-height");
    const elementArea = parseInt(elementWidth) * parseInt(elementLength);

    displayDataInTable(elementTitle, elementWidth, elementLength, elementArea);

    // Will disable the button on click once
    disableButton("parallelogram-card-btn");
  });

// Rhombus
document
  .getElementById("rhombus-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("rhombus-card-title");
    const elementDiagonal1 = getInputFieldValueById("rhombus-diagonal1");
    const elementDiagonal2 = getInputFieldValueById("rhombus-diagonal2");
    const elementArea =
      0.5 * parseInt(elementDiagonal1) * parseInt(elementDiagonal2);

    displayDataInTable(
      elementTitle,
      elementDiagonal1,
      elementDiagonal2,
      elementArea
    );

    // Will disable the button on click once
    disableButton("rhombus-card-btn");
  });

// Pentagon
document
  .getElementById("pentagon-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("pentagon-card-title");
    const elementP = getInputFieldValueById("pentagon-p");
    const elementB = getInputFieldValueById("pentagon-b");
    const elementArea = 0.5 * parseInt(elementP) * parseInt(elementB);

    displayDataInTable(elementTitle, elementP, elementB, elementArea);

    // Will disable the button on click once
    disableButton("pentagon-card-btn");
  });

// Pentagon
document
  .getElementById("ellipse-card-btn")
  .addEventListener("click", function () {
    const elementTitle = getTagInnerTextById("ellipse-card-title");
    const elementA = getInputFieldValueById("ellipse-a");
    const elementB = getInputFieldValueById("ellipse-b");
    const elementArea = 3.14 * parseInt(elementA) * parseInt(elementB);

    displayDataInTable(elementTitle, elementA, elementB, elementArea);
    // Will disable the button on click once
    disableButton("ellipse-card-btn");
  });

/* Utilities functions
| ========================================================================*/

// Get element
function displayDataInTable(elementTitle, elementA, elementB, elementArea) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td class="md:text-xs">${(serial += 1)}</td>
      <td class="md:text-xs">${elementTitle}</td>
      <td class="md:text-xs">v1: ${elementA}</td>
      <td class="md:text-xs">v2: ${elementB}</td>
      <td class="md:text-xs">${elementArea.toFixed(2)} cm<sup>2</sup></td>
      <td class="md:text-xs">
      <button id="convert-to-meter-btn" class="bg-blue-500 text-white py-1 px-1 rounded"><i class="fa fa-arrow-up"></i>m <sup>2</sup></button>
      </td>
      `;

  container.appendChild(tr);
}

function toggle() {
  const div1 = document.getElementById("divOne");
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
}
