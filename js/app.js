document.querySelectorAll('.verMas').forEach(i =>{
    i.addEventListener('click', (e)=>{
        const seccionVer = e.target.parentElement.nextElementSibling;
        seccionVer.classList.toggle('hidden')
        e.target.classList.toggle('fa-circle-down')
        e.target.classList.toggle('fa-circle-up')
    })
})

//date
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
document.querySelector('.date').textContent = añoActual;