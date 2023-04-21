const faqImage = document.querySelector('.faq_image')
const about = document.querySelector('.about')
const textabout = document.querySelector('.text')
const faq = document.querySelector('.faq')
const show = document.querySelector('.show-text')
const visible = document.querySelector('.text__about_vision')
const fqText = document.querySelector('.fq_text')
const showFq= document.querySelector('.show-text_fq')

//Появление
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visible.classList.add('show-text')
            
        }
    });
});
observer.observe(visible)

//аккордион
fqText.addEventListener('click',function(){
    fqText.nextElementSibling.classList.toggle('faq_text-content')
})