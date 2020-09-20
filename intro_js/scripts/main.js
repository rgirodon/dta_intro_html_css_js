var myImage = document.querySelector('img');

myImage.onclick = function() {
	
    var mySrc = myImage.getAttribute('src');
	
    if (mySrc == 'img/logo_tse.png') {
        
      myImage.setAttribute('src','img/logo_iram.png');
	} 
    else {
      myImage.setAttribute('src','img/logo_tse.png');
	}
}

/*
var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
  
    var myName = prompt('Entrez votre nom.');
    
    localStorage.setItem('name', myName);
  
    myHeading.innerHTML = 'Bienvenue au M1 DCIMN, ' + myName;
}

if (!localStorage.getItem('name')) {
    
    setUserName();
} 
else {  
    var storedName = localStorage.getItem('name');
  
    myHeading.innerHTML = 'Bienvenue au M1 DCIMN, ' + storedName;
}

myButton.onclick = setUserName;
*/