//app.js
"use strict";
document.addEventListener("deviceready", init);

let peepList = {peeps:[]};
let index = 0;
let saveBtn = document.getElementById("saveBtn");
let addPeepBtn = document.getElementById("addPeepBtn");
let cancelBtn = document.getElementById("cancelBtn");

function init(){
    
window.addEventListener('push',pageChanged);
//localStorage.clear();
    if(!localStorage.getItem("tout0004")){
    localStorage.setItem("tout0004", JSON.stringify(peepList));

         //saveFriend();
                         }
    
    addPeepBtn.addEventListener('touchend', addEvents);
        showPeeps();
}

function savePeeps(){

 //get values from form

    let name = document.getElementById("peepName").value;
    let dob = document.getElementById("peepDOB").value;
    
   
    let newPeep = {
        id: Date.now(),
        fullname: name,
        DOB : dob
    }
    peepList.peeps.push(newPeep);
    localStorage.setItem("tout0004",JSON.stringify(peepList));
    
//clear form
    document.getElementById("peepName").value = "";
    document.getElementById("peepDOB").value = "";
    
    showPeeps()
//    hideForm()
    
//remove event listeners from modal window
    saveBtn.removeEventListener('touchend', savePeeps);
    cancelBtn.addEventListener('touchend', cancelPeeps);
}

function showPeeps(){
    
    peepList = JSON.parse(localStorage.getItem("tout0004"));
    console.log(peepList);
    let value = peepList.peeps;
    
    
    let ul = document.getElementById("peepList");
    ul.innerHTML="";
//loop through peepList and create List of peeps
    value.forEach(function(value){
        let name = value.fullname;
        console.log(name);
        let dob = value.DOB;
        console.log(dob);
        
        let li = document.createElement("li");
            li.classList.add("table-view-cell");
        let a1 = document.createElement("a");
        // create an a tag for modal on name
            a1.innerHTML = name;
            // add a class list / hrefs
        let a2 = document.createElement("a");
        //a for switching pages
            a2.classList = "navigate-right pull-right";
            a2.href="gifts.html";
        let span1 = document.createElement("span");
        //span for name
            //add span1 class list
            
        let span2 = document.createElement("span");
        //span for DOB
            //add span2 class list
            span2.innerHTML = moment(dob).format("MMM Do");
        
//append elements to peepList
        ul.appendChild(li);
        li.appendChild(span1);
        span1.appendChild(a1);
        li.appendChild(a2);
        a2.appendChild(span2);
    })
    
    
}

function deletePeeps(){
    
    let li = ev.currentTarget.parentElement;
    let peep = li.querySelector("span").textContent;
    
    let index = -1;
    
    for( var i = 0; i < peepList.length; i ++){
        if(peepList[i].fullname == peep){
            index = i;
            break;
        }
    }
    console.log(index);
    if(index > -1){
        peepList.splice(index, 1);
    }
    li.parentElement.removeChild(li);
    if(contactList.length > -1){
        let put = JSON.stringify(peepList);
        localStorage.setItem("tout0004",put);
        delBtn.removeEventListener('touchend', deletePeeps);
        
        showPeeps();
    }
}

function saveGifts(){
    
}

function showGifts(){
    
}

function deleteGifts(){
    
}

function cancelPeeps(){
    
    cancelBtn.removeEventListener('touchend',cancelPeeps);
}
function addEvents(){
//add event listeners to modal window
    saveBtn.addEventListener('touchend',savePeeps);
    cancelBtn.addEventListener('touchend', cancelPeeps);
    console.log("added!");
}
function pageChanged(){
    if(document.getElementById("peepList")){
            showPeeps();
            console.log("page one")
        }
//        else{
//            let btn = document.getElementById("giftList");
//            btn.addEventListener("click", app.saveNew);
//        }
}
