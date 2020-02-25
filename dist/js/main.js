const regExpDic = {
  name: /([А-ЯЁ][а-яё]+[\-\s]?){3,}/,
  phone: /\+?\d+([\(\s\-]?\d+[\)\s\-]?[\d\s\-]+)?/
};

const UI = {
  form: document.forms["form"],
  inputName: document.getElementById("name"),
  inputPhone: document.getElementById("phone"),
  inputEmail: document.getElementById("email")
};

const inputs = [UI.inputName, UI.inputPhone];

UI.form.addEventListener("submit", e => {
  event.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener("focus", () => removeInputError(el)));

// Handlers
function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    console.log(isValidInput);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (isValidForm) {
    form.action = "https://digital-spectr.com/ac/academy.php";
    form.method = "POST";
    form.submit();
    form.reset();
  }
  return;
}

function validate(el) {
  const regExpName = el.dataset.rule;
  return regExpDic[regExpName].test(el.value);
}

function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || "Invalid input";
  const template = inputErrorTemplate(msg);
  el.classList.add("invalid");
  parent.insertAdjacentHTML("beforeend", template);
}

function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector(".invalid-feedback");
  if (!err) return;

  el.classList.remove("invalid");
  parent.removeChild(err);
}
