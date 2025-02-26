// To show the menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// removing the menu on mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when clicking on each nav linkAction, we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Shadow the header section
const shadowHeader = () => {
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// EMAIL SECTION
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_jdnyr7g', 'template_066usss', '#contact-form', 'By221_O5_Xr5D-SIQ')
    .then(() => {
        //Show wthat the message has been sent
        contactMessage.textContent = 'Message sent successfully!'

        //Remove success message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear the form input fields
        contactForm.reset()
    }, () => {
        //Show specific error message in contact form
        contactForm.textContent = 'Message not sent!:('
    })
}

contactForm.addEventListener('submit', sendEmail)