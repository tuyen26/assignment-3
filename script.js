//Chức năng ẩn thông tin
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let checkEmail = function () {
  const email = document.querySelector(".email-input").value;
  if (regex.test(email)) {
    document.querySelector(".personal-content").classList.remove("hidden1");
    document.querySelector(".personal-sign-in").classList.add("hidden1");
  } else {
    document.querySelector(".input-label").textContent = "Email không phù hợp";
    document.querySelector(".input-label").style.color = "red";
  }
};

document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault(); //loại bỏ trạng thái tự tải lại trang của form
  checkEmail();
});

//Chức năng ẩn thông tin nghề nghiệp

// function onMose() {
//   console.log("hello");
//   document.querySelector(".view").classList.remove("hidden");
// }
// function outMose() {
//   console.log("bye");
//   document.querySelector(".view").classList.add("hidden");
// }

// const job = document.querySelector("#job");
const job = document.querySelectorAll(".job-info");
const btnViewMore = document.querySelectorAll(".view-more");
const btnViewLess = document.querySelectorAll(".view-less");
const viewContent = document.querySelectorAll(".view-content");

// function btnChange(n) {
//   btnViewMore[n].classList.toggle("hidden");
//   btnViewLess[n].classList.toggle("hidden");
// }
function moreClick(n) {
  btnViewMore[n].addEventListener("click", function () {
    viewContent[n].classList.remove("hidden2");
    btnViewMore[n].classList.add("hidden2");
    btnViewLess[n].classList.remove("hidden2");
  });
}
function lessClick(n) {
  btnViewLess[n].addEventListener("click", function () {
    viewContent[n].classList.add("hidden2");
    btnViewMore[n].classList.remove("hidden2");
    btnViewLess[n].classList.add("hidden2");
  });
}

function onMose(n) {
  btnViewMore[n].classList.remove("hidden1");
}
function outMose(n) {
  btnViewMore[n].classList.add("hidden1");
}
for (let i = 0; i < job.length; i++) {
  job[i].addEventListener("mouseout", function () {
    outMose(i);
  });
  job[i].addEventListener("mouseover", function () {
    onMose(i);
    moreClick(i);
    lessClick(i);
  });
}
