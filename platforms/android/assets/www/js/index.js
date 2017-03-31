/*****************************************************************
File: index.js
Author: Christian Josef Jurt
Description: This is an app that allows you to catelog gift ideas for your friends and family

Version: 0.0.1
Updated: March 31, 2017

*****************************************************************/

"use strict";

moment.locale('en-CA');

var person = null;
var gift = null;
const jurt0001 = "giftr-jurt0001";
var currentPerson = null;
var ideaName = 0;
var personName = 0;


if(document.deviceready){
        	document.addEventListener('deviceready', init, false);
		}else{
        	document.addEventListener('DOMContentLoaded', init, false);
		}

function init() {
    localStorage.clear();
    
    window.addEventListener('push', pageChanged);
    
    let addBtn = document.getElementById("add-person");
    addBtn.addEventListener("touchend", addPerson);
    
    if(!localStorage.getItem(jurt0001)){
     let emptyArray = {"people":[]
                       
                      };
   
        localStorage.setItem(jurt0001, JSON.stringify(emptyArray));
        //console.log("local storage key is now set");     
        
        showList();
               
    }
    
    else {

        let list = JSON.parse(localStorage.getItem(jurt0001));
        //console.log(list);
        showList(list);    //LINE THAT DOESN'T WORK.
        

        //console.log("localStorage Already Exists");
   
    }   
}

function pageChanged(){
        //user has clicked a link in the tab menu and new page loaded
        //check to see which page and then call the appropriate function
        
        if (document.getElementById("contact-list")) { //selecting the content area
            
            let addBtn = document.getElementById("add-person");
            addBtn.addEventListener("touchend", addPerson);
        
            //console.log("I'm Home!"); 
            
            showList();  //Displays list of notifications
            
             //let addBtn2 = document.getElementById("add-idea");
             //addBtn2.removeEventListener("touchend", addGift);
            
        }else {        
            
            //console.log("I'm on the gift Ideas Page"); //means i've navigated to the 2nd html page.
            
            var addBtn2 = document.getElementById("add-idea");
            addBtn2.addEventListener("touchend", addGift);
          
            giftList();    
            
        }
        
    }

function addPerson(){
    
console.log('Add Person Button has been clicked');   
    
//let form = document.getElementById("form");
//    form.reset();
    
let savBtn = document.getElementById("save");
    savBtn.addEventListener("touchend", personSave);  
  
let cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("touchend", cancelPerson);  
    
let cancelX = document.getElementById("x");
    cancelX.addEventListener("touchend", cancelPerson);        
    
    
    
};

function cancelPerson(){

    console.log("add person or edit person has been cancelled and form cleared")
    
    let savBtn = document.getElementById("save");
    savBtn.removeEventListener("touchend", personSave); 
    
    let form = document.getElementById("form");
    form.reset();

}

function personSave(){
    
console.log("personSaved has been activated");    
            
let name = document.getElementById("name").value;
    
 if(name == ""){
     
     personName = personName + 1;
     
        name = "What's his face? #" + personName;
        }      
let dateOfBirth = document.getElementById("dob").value;
    
    if(dateOfBirth == ""){
        dateOfBirth = "2000-01-01";
        }  
    
    
//console.log(dateOfBirth);    
    
let timeStampId = Date.now();
    
person = {
    
    fullName: name,
    dob: dateOfBirth,
    id: timeStampId,
    ideas:[]

}
    
let list = JSON.parse(localStorage.getItem(jurt0001));     
//console.log(list);
let peopleList = list.people;
peopleList.push(person);    

localStorage.setItem(jurt0001, JSON.stringify(list));
    
 let form = document.getElementById("form");
    form.reset();
   
 
showList();   
    
}

function showList(){
    
    let section = document.getElementById("contact-list");
    section.innerHTML = "";
    
    let list = JSON.parse(localStorage.getItem(jurt0001));   
    
    console.log(list.people.length);
    
    if(list.people.length != "" ){
    let d = list.people[0].dob;
    
//console.log(list.people[0].dob.substring(5));  
//console.log(d.getMonth());    
    


function compare(a, b) {
if (a.dob.substring(5) < b.dob.substring(5)) return -1;
if (a.dob.substring(5) > b.dob.substring(5)) return 1;
return 0;
}
list.people.sort(compare);
    }
   
    
    for(let i=0; i<list.people.length; i++){   
        
        //console.log("Add one");
        let li = document.createElement("li");
        li.className = "table-view-cell";
        li.setAttribute("data-id", list.people[i].id)
        
        let span = document.createElement("span");
        span.className = "name";
        let a = document.createElement("a");
        a.href = "#personModal";
        a.innerHTML = list.people[i].fullName;
        let a2 = document.createElement("a");
        a2.href = "gifts.html";
        a2.addEventListener("touchend", giftListTarget);  
        a2.className = "navigate-right pull-right";
        let span2 = document.createElement("span");
        span2.className = "dob";
        
        
        let theDate = list.people[i].dob;
        let DateFormat = moment(theDate).format('MMMM Do');
        
        
        span2.innerHTML = DateFormat;
        
        span.appendChild(a); 
        li.appendChild(span);
        a2.appendChild(span2);
        li.appendChild(a2);
        
        
        let ul = document.getElementById("contact-list");
        ul.appendChild(li);
        
     let savBtn = document.getElementById("save");
     savBtn.removeEventListener("touchend", personSave); 
        
        a.addEventListener("touchend", editPerson);
        
    }
    
    function giftListTarget(ev){
    
       currentPerson = ev.currentTarget.parentElement.getAttribute("data-id"); 
        
        //console.log(currentPerson);
        
}
    
};

function deleteGift(ev){
   currentPerson = ev.currentTarget.parentElement.getAttribute("data-id"); 
    
    //console.log(ev.currentTarget.parentElement.firstChild);   
    
    //console.log("delete button: " + currentPerson);
    
        let list = localStorage.getItem(jurt0001);
        let parsed = JSON.parse(list);
        let parsedPeople = parsed.people;
        var index = 0;
   
    for (let i = 0; i < parsedPeople.length; i++) {

        
        if (parsedPeople[i].id == currentPerson) {

            //console.log("does " + parsedPeople[i].id + " match " + currentPerson);
            index = i;
        
        }
        
    }
    

    for(var i=0;i<parsedPeople[index].ideas.length; i++){
     
       //console.log("from localStorage: " + parsedPeople[index].ideas[i].idea)
       //console.log("from li item: " + ev.currentTarget)
       let el = ev.currentTarget.parentElement.firstChild;
       let el2 = el.firstChild.innerHTML;
     
       
        
       if (parsedPeople[index].ideas[i].idea == el2) {
          
           //console.log("i: " + i);
           //console.log(parsedPeople[index].ideas[i]);
           
           parsedPeople[index].ideas.splice(i, 1);
           
           localStorage.setItem(jurt0001, JSON.stringify(parsed));
           
           //console.log("we got a match: " + parsedPeople[index].ideas + " " + el2)
        
           
           giftList();
           
           //console.log("ideas left in localStorage: " + parsedPeople[index].ideas);
           
           
        }
        
        
        
    }
    
    
    
    
}

function editPerson(ev){
 
    ev.preventDefault;
    
    let savBtn = document.getElementById("save");
    savBtn.addEventListener("touchend", editSave);
    
    let cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("touchend", cancelPerson);  
    
    let cancelX = document.getElementById("x");
    cancelX.addEventListener("touchend", cancelPerson); 
    
    //console.log("edit button is working!");
    
     let li = ev.currentTarget.parentElement.parentElement;
    //console.log(li);
    let dataName = li.getAttribute("data-id");
    //console.log("dataName: " + dataName);
    
    let index = 0;
    
    let list = localStorage.getItem(jurt0001);
    let parsed = JSON.parse(list);
    //console.log(parsed);
    
    let parsedPeople = parsed.people;
   
    for (var i = 0; i < parsedPeople.length; i++) {
        
        //console.log(parsedPeople[i].id);
        
        if (parsedPeople[i].id == dataName) {
            
            //console.log(parsedPeople[i].id + " " + dataName);
            index = i;
            break;
        }
        
        var parsedId = parsedPeople[i].id;
        var parsedIdeas = parsedPeople[i].ideas;
        //console.log(parsedIdeas);
        
    }
    
   // console.log("parsedId: " + parsedId);
    
   let theName = document.getElementById("name").value = parsedPeople[index].fullName;
    
    
   let theDob = document.getElementById("dob").value = parsedPeople[index].dob;
    
    //console.log("name feild value before edit save button is click: " + document.getElementById("name").value)
    //console.log("dob feild value before edit save button is click: " + document.getElementById("dob").value)
    
        function editSave(ev, theName, theDob, myIdeas) {   
            
        //console.log("EditSave has been activated");        
            
    //console.log(document.getElementById("name").value)
    //console.log(document.getElementById("dob").value)
           
        let name = document.getElementById("name").value;
        
        if(name == ""){
        name = "What's her face?";
        }       
            
        let dateOfBirth = document.getElementById("dob").value;
     
        //console.log("parsed people: " + parsed.people);    
        let theId = li.getAttribute("data-id"); 
          

        let entry = {
            fullName: name,
            dob: dateOfBirth,
            id: theId,
            ideas:[]
        };
            
            //console.log(entry);
          //console.log(index);
          
            
            //let newEntry = parsed.people.splice(index, 1, entry);
            parsed.people.splice(index, 1, entry);
            
            //console.log(parsed);
            
         
        localStorage.setItem(jurt0001, JSON.stringify(parsed));    
        let form = document.getElementById("form");
        form.reset();
        showList();
        //let savBtn = document.getElementById("save");
        savBtn.removeEventListener("touchend", editSave);
    }    
}

function giftList(){
    
         let section = document.getElementById("gift-list");
         section.innerHTML = "";
    
         let section2 = document.getElementById("gift-list-p");
         section2.innerHTML = "";
    
    
        let list = localStorage.getItem(jurt0001);
        let parsed = JSON.parse(list);     
        let parsedPeople = parsed.people;
    
        //console.log("THIS IS PARSED PEOPLE:" + parsedPeople);
    
        var index = 0;
   
    for (let i = 0; i < parsedPeople.length; i++) {

        
        if (parsedPeople[i].id == currentPerson) {

            let giftTitle = document.getElementById("gifts");
            giftTitle.innerHTML = parsedPeople[i].fullName;
            index = i;
            //console.log("index is: " + i);
            //break;
        }
        
    }
    
    if(parsedPeople[index].ideas.length == 0){
                    
                let section2 = document.getElementById("gift-list-p");
         section2.innerHTML = "There are currently no gift ideas in list.";    
                    
    }else{
            for(var i=0;i<parsedPeople[index].ideas.length; i++){   
                
                
                
                //console.log(parsedPeople[index]);
                
        //console.log("index is: " + index);  
        //console.log(parsedPeople[index].ideas[i]);        
        //console.log(parsedPeople[index].ideas[i].idea);          
        //console.log("ADDING A GIFT TO THE LIST");
        
                let li = document.createElement("li");
        li.className = "table-view-cell";
        li.setAttribute("data-id", parsedPeople[index].id) 
        let div = document.createElement("div");
        
        let p = document.createElement("p");
        p.innerHTML = parsedPeople[index].ideas[i].idea;   
        p.className = "ideaTitle";        
        let p2 = document.createElement("p");
        p2.innerHTML = parsedPeople[index].ideas[i].at;         
        let a = document.createElement("a");
        a.innerHTML = parsedPeople[index].ideas[i].url; 
                
        console.log(parsedPeople[index].ideas[i].url);        
        
        a.addEventListener("touchstart", (function(url){
            return function() { navigator.app.loadUrl( url, { openExternal:true });};
        })(parsedPeople[index].ideas[i].url));
                                 
                           
        let p3 = document.createElement("p"); 
        p3.innerHTML = parsedPeople[index].ideas[i].cost;
                
        let btn = document.createElement("button");
        btn.className = "btn btn-negative";
        btn.innerHTML = "Delete";  
        btn.addEventListener("touchstart", deleteGift);          
                      
               
        div.appendChild(p); 
        div.appendChild(p2);
        div.appendChild(a);
        div.appendChild(p3);
        li.appendChild(div);
        li.appendChild(btn); 
                
                       
        let ul = document.getElementById("gift-list");
        ul.appendChild(li);

        
    }
            }
            
}

function addGift(){
    
//console.log('Add Gift Button has been clicked');   
    
//let form = document.getElementById("form");
//    form.reset();
    
let savBtn = document.getElementById("gift-save");
    savBtn.addEventListener("touchend", giftSave);  
  
let cancelBtn = document.getElementById("gift-cancel");
    cancelBtn.addEventListener("touchend", cancelGift);  
    
let cancelX = document.getElementById("x-gift");
    cancelX.addEventListener("touchend", cancelGift);        
    
    
    
};
    
function giftSave(ev){
    
    //console.log("trying to find the correct gift list: " + ev.currentTarget.Parent);
    
 //console.log('giftSave Button has been clicked');    

        let idea = document.getElementById("idea").value;
    
    
    if(idea == ""){
        
        cancelGift();
        console.log("should have click the cancel button");
    }   
    
    else{
    
    
        let at = document.getElementById("at").value;
        let url = document.getElementById("url").value;
    
if(!url == ""){
var prefix = 'http://';
if (url.substr(0, prefix.length) !== prefix)
{
    url = prefix + url;
}
}
    
    
        let cost = document.getElementById("cost").value;

    //let timeStampId = Date.now();
    
    gift = {
        
    idea:idea,
      at:at,
     url:url,
    cost:cost   
        
};    
        
 let list = JSON.parse(localStorage.getItem(jurt0001));     
 //console.log(list);
 //console.log(currentPerson);
//console.log(list.people);    
//console.log(list.people.length);    
 let index = null    
    
for(let i=0; i<list.people.length; i++){
    
    if(list.people[i].id == currentPerson){
    index = i
    //console.log(index);
    }
}    
    
    
 list.people[index].ideas.push(gift); 
    
localStorage.setItem(jurt0001, JSON.stringify(list));    
let form = document.getElementById("gift-form");
     form.reset();   
   
 
giftList();   
    
    }
}

function cancelGift(){
    
    //console.log('cancelGift Button has been clicked');
    
    let savBtn = document.getElementById("gift-save");
    savBtn.removeEventListener("touchend", giftSave); 
    
    let form = document.getElementById("gift-form");
    form.reset();
    
}