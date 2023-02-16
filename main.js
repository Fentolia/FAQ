let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

function switchMode() {
let moon = document.getElementById ("moon");
if(moon.className=="moon"){
moon.className="sun";
document.body.style.backgroundColor = "#141D26";
document.body.style.color = "#fff";
}
else {
moon.className ="moon";
document.body.style.backgroundColor = "#fff";
document.body.style.color = "#000";
}
}
