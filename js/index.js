const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//## Task 1: Create selectors to point your data into elements
//## Task 2: Update the HTML with the JSON data

/* Nav Items */
//getting nav links
const navLinks = document.querySelectorAll('a');
//adding the data from the JSON to the site
const aLinkArray = Object.values(siteContent.nav);
navLinks.forEach(function(element, index){
  element.textContent = aLinkArray[index];
})

/*cta section Items */

//creating array of json data for cta section
const ctaSection = Object.values(siteContent.cta);
//getting h1 header in section cta and adding title from json data
// const ctah1 = document.querySelectorAll('.cta-text h1')[0];
const ctah1 = document.querySelector('.cta-text h1:nth-of-type(1)');
ctah1.textContent = ctaSection[0];

//get button in cta header 
const ctaBtn = document.querySelector('.cta-text button:nth-of-type(1)');
ctaBtn.textContent = ctaSection[1];

//add img src to img 
const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', ctaSection[2]);


/* main-content section Items*/
const mainArray = siteContent["main-content"];
//top-content items 
//features 
const featuresDiv = document.querySelector('.top-content .text-content');
const featuresHeader = document.querySelector('.text-content h4:nth-of-type(1)');
featuresHeader.textContent = mainArray["features-h4"];

const featuresContent = document.querySelector('.text-content p:nth-of-type(1)');
featuresContent.textContent = mainArray["features-content"];

//create about section in top-content 
const topTextContent = document.querySelector('.top-content .text-content');
//create text-content for about section
const aboutDiv = document.createElement('div');

//header
const aboutHeader = document.createElement('h4');
aboutHeader.textContent = mainArray["about-h4"];
aboutDiv.appendChild(aboutHeader);
//paragraph
const aboutContent = document.createElement('p');
aboutContent.textContent = mainArray["about-content"];
aboutDiv.appendChild(aboutContent);

//change top text content to flex-direction column
const topContentDiv = document.querySelector('.top-content');
topContentDiv.appendChild(aboutDiv);

//get img in the top-content 
const topImg = document.querySelector('#middle-img');
topImg.setAttribute('src', mainArray["middle-img-src"]);

//bottom-content 
//services
const servicesHeader = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesHeader.textContent = mainArray["services-h4"];
const servicesContent = document.querySelector('.bottom-content .text-content p');
servicesContent.textContent = mainArray["services-content"];

//product 
const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHeader.textContent = mainArray["product-h4"];
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContent.textContent = mainArray["product-content"];

//vision
const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionHeader.textContent = mainArray["vision-h4"];
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContent.textContent = mainArray["vision-content"];


/*Contact Section */
const contactArray = siteContent.contact;

const contactKeys = Object.keys(contactArray);

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = contactArray["contact-h4"];
const contactP =document.querySelectorAll('.contact p');

contactP.forEach(function(element, index){
  element.textContent = contactArray[contactKeys[index+1]];
}); 

/*Footer Section */
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent["footer"]["copyright"];

/*Task 3 - Change the color of the navigation text to be green. */
navLinks.forEach(function(element){
  element.style.color = "green";
})

/* Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want. */
const beforeNav = document.createElement('a');
beforeNav.textContent = "Whatever";
beforeNav.style.color = "green";
beforeNav.href = '#';

const afterNav = document.createElement('a');
afterNav.textContent = "You Want";
afterNav.style.color = "green";
afterNav.href = "#";


const nav = document.querySelector('nav');
nav.prepend(beforeNav);
nav.append(afterNav);