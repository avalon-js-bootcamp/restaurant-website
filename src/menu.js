function menuFunction(){
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.setAttribute("id", "pageContent");
    content.appendChild(pageContent);

    //add menu list items - loop?
    const menuList = document.createElement("ul");
    pageContent.appendChild(menuList);
}

export {menuFunction};