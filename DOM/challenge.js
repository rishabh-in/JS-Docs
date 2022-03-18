const navMenu = ['Home', 'Buy', 'Cart', 'Payment', 'Contact us'];

const content = `
        <li><a href="#">${navMenu[0]}</a></li>
        <li><a href="#">${navMenu[1]}</a></li>
        <li><a href="#">${navMenu[2]}</a></li>
        <li><a href="#">${navMenu[3]}</a></li>
        <li><a href="#">${navMenu[4]}</a></li>
`

const mainNav = document.createElement("nav");
mainNav.classList.add('main-navigation');
mainNav.setAttribute('id', 'main-navigation');

const navList = document.createElement("ul");
navList.classList.add("nav-items");
navList.setAttribute("id", 'nav-items');

navList.innerHTML = content;

// append navList to mainNav
mainNav.append(navList);

// styling the navList
navList.style.listStyleType = "none";

// container element
const container = document.querySelector(".container");

// append the element to parent element
container.append(mainNav);
