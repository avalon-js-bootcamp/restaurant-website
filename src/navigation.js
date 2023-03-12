import {menuFunction} from "./menu.js"


function navigation () {
    const pageContent = document.getElementById("pageContent");
    
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    content.appendChild(menuButton);
    menuButton.addEventListener("click", menuFunction);
    menuButton.addEventListener("click", function(){
        content.removeChild(pageContent);
    });

    const contact = document.createElement("button");
    contact.textContent = "Contact";
    content.appendChild(contact);
    // CHANGE ALERT FUNCTION TO LINK TO CONTACT PAGE
    contact.addEventListener("click", function(){
        alert("Goodbye")
    })
}

export {navigation};