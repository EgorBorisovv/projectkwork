const faqImage = document.querySelector('.faq_image')
const about = document.querySelector('.about')
const textabout = document.querySelector('.text')
const faq = document.querySelector('.faq')
// const subImg = document.querySelector('.submit_img')
// const mintImg = document.querySelector('.mint_img')
about.addEventListener('click',function(){
    textabout.classList.toggle('visible')
    faq.classList.remove('visible')
})
faqImage.addEventListener('click',function(){
    faq.classList.toggle('visible')
    textabout.classList.remove('visible')
})