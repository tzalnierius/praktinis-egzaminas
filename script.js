"use strict"


var name1 = document.getElementById("name1")
var surname1 = document.getElementById("surname1")
var phone1 = document.getElementById("phone1")
var name2 = document.getElementById("name2")
var surname2 = document.getElementById("surname2")
var phone2 = document.getElementById("phone2")
var personal = document.getElementById("personal")
var company = document.getElementById("company")
var yearly = document.getElementById("yearly")
var monthly = document.getElementById("monthly")
var sendBtn = document.getElementById("send-btn")
var getStartedBtn = document.getElementById("getstarted-btn")

function validation1 (){
    console.log(yearly.checked)
    if(name1.value != "" && isNaN(name1.value)
        && surname1.value != "" && isNaN(surname1.value)
        && phone1.value >0
        && (yearly.checked || monthly.checked)){
            alert("Congratulations! Enjoy your Subscription!")}   
    else{
        alert("Fill up all fields or please check entered information")}
}

getStartedBtn.addEventListener("click", function(){
    validation1()
    }
)
function validation2 (){
    console.log(yearly.checked)
    if(name2.value != "" && isNaN(name2.value)
        && surname2.value != "" && isNaN(surname2.value)
        && phone2.value >0
        && (personal.checked || company.checked)){
            alert("We will answer you asap!")}   
    else{
        alert("Fill up all fields or please check entered information")}
}

sendBtn.addEventListener("click", function(){
    validation2()
    }
)