// ==========================
// Mobile Menu
// ==========================

function toggleMenu(){

const navbar = document.getElementById("navbar");

navbar.classList.toggle("active");

}



// ==========================
// Dark Mode
// ==========================

const darkBtn = document.getElementById("darkModeBtn");


if(darkBtn){

darkBtn.addEventListener("click", function(e){

e.preventDefault();

document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){

darkBtn.innerHTML="☀️ Light";

localStorage.setItem("theme","dark");

}

else{

darkBtn.innerHTML="🌙 Dark";

localStorage.setItem("theme","light");

}


});


}



// Save Dark Mode

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark-mode");


if(darkBtn){

darkBtn.innerHTML="☀️ Light";

}

}




// ==========================
// Reading Progress Bar
// ==========================


window.addEventListener("scroll",function(){


let scrollTop = document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


let progress = (scrollTop / height) * 100;


document.getElementById("progress-bar").style.width = progress + "%";


});




// ==========================
// Search Button
// ==========================


const searchBtn = document.getElementById("searchBtn");


if(searchBtn){


searchBtn.addEventListener("click",function(){


let search = document.getElementById("searchInput").value.toLowerCase();



if(search.trim() !== ""){


window.location.href = "search.html?query=" + search;


}


});


}




// ==========================
// Enter Key Search
// ==========================


const searchInput = document.getElementById("searchInput");


if(searchInput){


searchInput.addEventListener("keypress",function(e){


if(e.key === "Enter"){


searchBtn.click();


}


});


}





// ==========================
// Simple Newsletter Alert
// ==========================


const subscribeBtn = document.querySelector(".newsletter button");


if(subscribeBtn){


subscribeBtn.addEventListener("click",function(){


alert("Thank you for subscribing to LuminaVubon🌐");


});


}
