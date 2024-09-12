//using selectors inside the element
// traversing the dom
//solution #1
/*
const btns = document.querySelectorAll('.question-btn');
btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})
*/
//solution #2
const questions = document.querySelectorAll('.question');
questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', ()=>{
        // if i need when I click a button and text display and hide the last diplay one so you
        // can not display two in the same time > if you do not want do that just
        // remove sol1.1
        //#sol1.1
        questions.forEach((item)=>{
            item.classList.remove('show-text');
        });//-------------- #sol1.1 end here
        question.classList.toggle("show-text");
    })
})