
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const input = box.querySelector("input[type='radio']");

    input.addEventListener("change", function () {
      boxes.forEach((b) => b.classList.remove("expanded")); 
      box.classList.add("expanded"); 
    });
  });
});
