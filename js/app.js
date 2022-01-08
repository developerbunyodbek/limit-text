// SELECTORS
const textarea = document.querySelector("#text");
const result = document.querySelector("#result");
result.innerText = "0/50";

text.addEventListener("input", () => {
  let textLength = textarea.value.length;
  result.innerText = `${textLength}/50`;

  if (textLength > 50) {
    textarea.style.borderColor = "#ca1e1e";
    result.style.color = "#ca1e1e";
    textarea.style.color = "#ca1e1e";
  } else {
    textarea.style.borderColor = "#15a815";
    result.style.color = "#15a815";
    textarea.style.color = "#15a815";
  }
});
