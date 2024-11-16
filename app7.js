// let input=document.createElement("input","text");

// let btn=document.createElement("button");
// btn.innerText="click me";
// let body=document.querySelector("body");
// body.append(input);
// body.append(btn);
// input.placeholder="username";
// btn.setAttribute("id","btn");
// let newbtn=document.querySelector("#btn");
// newbtn.style.backgroundColor="blue";
// newbtn.style.color="white";
// let hOne=document.createElement("h1");
// hOne.innerText="Dom Picture";
// body.append(hOne);
// hOne.innerHTML=`<u>${hOne.innerText}</u>`;
// let underlines=document.querySelector("u");
// underlines.style.textDecorationColor="purple";
// let newPera=document.createElement("p");
// newPera.innerHTML=`Apna college <strong>Delta</strong> Practice`;
// body.append(newPera);

// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=()=>{
//     console.log("button was clicked");
//     alert("thanks for choosing us our expert will contact you soon")
// };
// btn.onmouseenter=()=>{
//     console.log("you enterd the button");
// };
// btn.onclick=sayHello;
// btn.onmouseenter=()=>{
//     console.log("you to")
// }


// function sayHello(){
//     alert("you have clicked on button");
// };
// function greet(){
//     alert("hello");
// };
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",greet);
// btn.addEventListener("dblclick",()=>{
//     alert("you double clicked");
// })
// let btn=document.querySelector("button");


// btn.addEventListener("click",()=>{
//     let h3=document.querySelector("h1");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// let p=document.querySelector("p");
// p.addEventListener("click",()=>{
//     console.log("pera was clicked");
// });
// let div=document.querySelector("div");
// div.addEventListener("mouseenter",()=>{
//     console.log("you have hover the box");
// })
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// let changeColor=function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="lime";
// };


// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// let input=document.querySelector("input");

// btn.addEventListener("click",function(event){
//     console.log("btn clicked")
// });
// // input.addEventListener("keydown",function(){
// //     console.log("key presed");
// // })
// input.addEventListener("keyup",function(eve){  
//     console.log("code", eve.code);
//     if(eve.code=="KeyU"){
//         console.log("characte move forwart");
//     }
//     else if(eve.code=="KeyD"){
//         console.log("character move downward");
//     }
//     else if(eve.code=="KeyR"){
//         console.log("character move right");
//     }
//     else if(eve.code=="KeyL"){
//         console.log("character move left");
//     }
    
// })
// let form=document.querySelector("form");
// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass")
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hi${user.value}, your passward is ${pass.value}`);
    // console.dir(this);
    // console.log(form.elements[0].value);
    // console.log(form.elements[1].value);
// });
// let user=document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log(this.value);
// });
// user.addEventListener("input",function(){
//     console.log("new input change");
//     console.log(`new input change is:- ${this.value}`)
// })
// let head=document.querySelector("#heading");
// head.addEventListener("mouseout",function(){
// console.log("mouse out");
// head.style.color="lime";
// }
    
// )
// let form=document.querySelector("form");
// form.addEventListener("submit",function(ev){
// ev.preventDefault();
// });

// let inp=document.querySelector("#inp1");
// inp.addEventListener("keypress",function(e){
//     console.log(e.code);
// });
// let pera=document.querySelector("p");
// window.addEventListener("wheel",function(event){
//     if(event.deltaY<0){
//         console.log("scroling up");
//     }else if(event.deltaY>0){
//         console.log("scroling down///");
//     }
// });
window.addEventListener("DOMContentLoaded",function(eve){
console.log("content loaded");

});
window.addEventListener("load",function(event){
    console.log("fully loaded");
})


