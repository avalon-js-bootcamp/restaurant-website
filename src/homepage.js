function homepage () {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.setAttribute("id", "pageContent");
    content.appendChild(pageContent);

    const heading = document.createElement("h1");
    heading.textContent = "Restaurant Homepage";
    pageContent.appendChild(heading);

    const hours = document.createElement("h2");
    hours.textContent = "Opening Hours";
    pageContent.appendChild(hours);

    const hours2 = document.createElement("div");
    hours2.textContent = "Monday-Sunday: 9am-9pm";
    pageContent.appendChild(hours2);
}


export {homepage};