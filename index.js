const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  if (birthdayDate > currentDate) {
    console.log("I have changed something");
    alert("Please enter the valid birth date");
    return;
  }
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  if (birthdayDate > currentDate) {
    alert("Please enter the valid birth date");
    return null;
  }

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  return age;
}

btnEl.addEventListener("click", calculateAge);
