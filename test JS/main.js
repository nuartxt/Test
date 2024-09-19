const input = document.querySelector(".question-input")
const btn1 = document.querySelector(".add-option")
const btn2 = document.querySelector(".btn-success")
const question = document.getElementById("questions")
const question2 = document.getElementById("questions2")
const options = document.querySelector(".options")
const correctAnswer = document.querySelector(".correct-answer")



btn1.addEventListener("click", ()=>{
    const newinput2 = document.createElement("input")
    options.append(newinput2);
    newinput2.style.width = "58.5em"
    newinput2.style.height = "40px"
    newinput2.placeholder = "Введите вариант"  
    newinput2.style.margin = "10px 0px 10px 0px"
    newinput2.style.borderRadius = "5px"

    const chekbox = document.createElement("button")
    correctAnswer.append(chekbox)
})

btn2.addEventListener("click", () => {
    const newinput = document.createElement("input")
    question.append(newinput)
    newinput.style.width = "68.5em"
    newinput.style.height = "40px"
    newinput.placeholder = "Введите доп вопрос"
    newinput.style.borderRadius = "5px"
    // console.log("lalal")

    const newbtn = document.createElement("button")
    question.append(newbtn)
    newbtn.style.width = "170px"
    newbtn.style.height = "40px"
    newbtn.style.borderRadius = "5px"
    newbtn.style.margin = "10px 0px 10px 0px"
    newbtn.style.backgroundColor = "blue"
    newbtn.textContent = "Добавить доп вариант"
    newbtn.style.color = "white"   
    // newbtn.classList = "btnbtn" 
    newbtn.classList.add("btnbtn");


})

// const btn3 = document.querySelector(".btnbtn")
btn3.addEventListener("click", ()=>{
    console.log("hello")
})

