const header = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})