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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent['cta']['img-src'])

let midimg = document.getElementById('middle-img');
midimg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Code starts here
//sets content for nav links
let navLinks = document.querySelectorAll("a");
navLinks.forEach((item,i) => {
  item.textContent = siteContent.nav['nav-item-' + i++]
});

//cta section(h1, button)
let ctaTxt = document.querySelector('.cta-text h1');
ctaTxt.textContent = siteContent.cta['h1'];

let ctaBut = document.querySelector('.cta-text button');
ctaBut.textContent = siteContent.cta['button'];

//main section headers content(features,about)
let topCh4 = document.querySelectorAll('.top-content .text-content h4');
topCh4[0].textContent = siteContent['main-content']["features-h4"];
topCh4[1].textContent = siteContent['main-content']['about-h4'];

//main section paragraph content(features,about)
let topCP = document.querySelectorAll('.text-content p');
topCP[0].textContent = siteContent['main-content']['features-content'];
topCP[1].textContent = siteContent['main-content']['about-content'];

//bottom section headers content(services,product,vision)
let bottomh4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomh4[0].textContent = siteContent['main-content']["services-h4"];
bottomh4[1].textContent = siteContent['main-content']["product-h4"];
bottomh4[2].textContent = siteContent['main-content']["vision-h4"];

//bottom section paragraph content(services,product,vision)
let bottomP = document.querySelectorAll('.bottom-content .text-content p');
bottomP[0].textContent = siteContent['main-content']["services-content"];
bottomP[1].textContent = siteContent['main-content']["product-content"];
bottomP[2].textContent = siteContent['main-content']["vision-content"];


//contact section head
let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent.contact['contact-h4'];

//contact section P
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact['address'];
contactP[1].textContent = siteContent.contact['phone'];
contactP[2].textContent = siteContent.contact['email'];

//footer
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer['copyright'];

//turning nav links green
navLinks.forEach(item => item.style.color = "#42f587");

//creating new a links(made white)
let aContact = document.createElement('a');
let aSocial = document.createElement('a');
aContact.textContent = "Contact";
aSocial.textContent = "Social";
aContact.style.color = "white";
aSocial.style.color = "white";

//appending and prepending new links to nav bar
let nav = document.querySelector('nav');
nav.prepend(aSocial);
nav.append(aContact);

//stretch

//changing background color
let body = document.querySelector('body');
body.style.backgroundColor = "teal";

//changing main header color
ctaTxt.style.color = "yellow";

//changing all h4 colors
let allh4 = document.querySelectorAll('h4');
allh4.forEach(h4 => h4.style.color = "yellow");

//changing all paragraph colors
let allP = document.querySelectorAll('p');
allP.forEach(p => p.style.color = "white");


