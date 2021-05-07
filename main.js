console.log("from mainjs");
const form = document.getElementById("form");
const size = document.getElementById("size");
const question = document.getElementById("question");
const type = document.getElementById("type");
const delivery = document.getElementById("delivery");
const deliveryErr = document.getElementById("delivery-error");
const typeErr = document.getElementById("type-error");
const questionErr = document.getElementById("question-error");
const sizeErr = document.getElementById("size-error");
const show = document.getElementById("show-score");
show.style.display = "none";
deliveryErr.style.display = "none";
typeErr.style.display = "none";
questionErr.style.display = "none";
sizeErr.style.display = "none";

let sizeError = true;
let questionError = true;
let typeError = true;
let deliveryError = true;

const totalScore = (a, b, c, d) => {
  const score =
    parseInt(a.value) +
    parseInt(b.value) +
    parseInt(c.value) +
    parseInt(d.value);
  return score;
};

const sizeScore = (size) => {
  if (size.value === "") {
    size.focus();
    sizeErr.style.display = "block";
    sizeError = false;
    return false;
  } else {
    sizeError = true;
    sizeErr.style.display = "none";
    return true;
  }
};
const deliveryScore = (delivery) => {
  if (delivery.value === "") {
    deliveryErr.style.display = "block";
    delivery.focus();
    deliveryError = false;
    return false;
  } else {
    deliveryError = true;
    deliveryErr.style.display = "none";
    return true;
  }
};

const questionScore = (question) => {
  if (question.value === "") {
    questionErr.style.display = "block";
    question.focus();
    questionError = false;
    return false;
  } else {
    questionError = true;
    questionErr.style.display = "none";
    return true;
  }
};
const typeScore = (type) => {
  if (type.value === "") {
    typeErr.style.display = "block";
    type.focus();
    typeError = false;
    return false;
  } else {
    typeError = true;
    typeErr.style.display = "none";
    return true;
  }
};
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  sizeScore(size);
  deliveryScore(delivery);
  questionScore(question);
  typeScore(type);
  if (!sizeError || !questionError || !typeError || !deliveryError) {
    return false;
  } else {
    const val = totalScore(size, delivery, question, type);

    show.style.display = "block";
    document.getElementById("score").innerHTML = val;
  }
});
