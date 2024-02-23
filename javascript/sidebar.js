const navLinks=document.querySelectorAll('.nav p')
const hamburger=document.getElementById('hamburger')
const sidebar=document.getElementById('sidebar')

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navLinks.forEach(otherLinks=>{
        otherLinks.classList.remove('active')
        })
link.classList.add('active')
sidebar.style.display='none'
    })
})

hamburger.addEventListener('click',()=> sidebar.style.display='block')






