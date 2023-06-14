const btn= document.querySelector('.btn');
btn.addEventListener=('mouseover', (e) => {
    e.PreventDefault();
console.log(e);
document.querySelector(#my-form).style.background="#ccc";
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').LastElementChild.innerHTML='<h1>Hello</h1>';

})


const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit' ,onsubmit);
function onSubmit(e) {
     e.preventDefault();

     if(nameInput.value==='' || emailInput.value=== ''){
        msg.classList.add('error');
        msg.innerHTml('please enter fields');

        setTimeout(() => msg.remove(), 3000);
     }else{
        console.log('success');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode (`${nameInput.value} : {emailInput.value}`));

        userList.appendChild(li);
        //clear fiels
        nameInput.value='';
        emailInput.value='';
     }
     
}