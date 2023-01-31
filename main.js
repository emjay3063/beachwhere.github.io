const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/northstradbroke01.jpg") {
        myImage.setAttribute("src","images/burleigh-heads.jpg")
    } else {
        myImage.setAttribute("src", "images/northstradbroke01.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to BeachWhere, ${myName}`};
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `Welcome back, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};
