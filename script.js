function container() {
    let container = document.createElement("div");
container.setAttribute("class","container");
document.body.appendChild(container);

container.style.backgroundColor="red";
container.style.height="100vh";
container.style.width="100%";
}

container();

function navBar() {
    let navigationBar = document.createElement("nav");
    navigationBar.setAttribute("class","nav");
    document.querySelector(".container").appendChild(navigationBar);
    navigationBar.style.backgroundColor="yellow";
    navigationBar.style.height="50vh";
    navigationBar.style.width="100%";

    let unorderedList = document.createElement("ul");
    unorderedList.setAttribute("class","u-list");
    document.querySelector(".nav").appendChild(unorderedList);

    let list1 = document.createElement("li");
    list1.setAttribute("class","list");
    list1.innerText="Home";
    document.querySelector(".u-list").appendChild(list1);

    let list2 = document.createElement("li");
    list2.setAttribute("class","list");
    list2.innerText="About";
    document.querySelector(".u-list").appendChild(list2);

}

navBar();

