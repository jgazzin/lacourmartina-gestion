document.querySelectorAll('.verMas').forEach(i =>{
    i.addEventListener('click', (e)=>{
        const seccionVer = e.target.parentElement.nextElementSibling;
        seccionVer.classList.toggle('hidden')
        e.target.classList.toggle('fa-arrow-down')
        e.target.classList.toggle('fa-arrow-up')
    })
})