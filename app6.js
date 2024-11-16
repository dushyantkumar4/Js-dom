// let btn=document.querySelector("#btn");
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green";
//     btn.style.color="white";
// })
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li clicked")
//     })
// }

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function(){
    
//     let item=document.createElement("li");
//     item.innerText=inp.value;

//     let delBtn=document.createElement("button");
//     delBtn.innerText="Delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
// });
// let delBtns=document.querySelectorAll(".delete");
// for(btns of delBtns){
//     btns.addEventListener("click",function() {
//         let per=this.parentElement;
//         console.log(per);
//         per.remove();
//     });
// };
// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//        let listItem=event.target.parentElement;
//        listItem.remove();
//     }
   
// });
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
