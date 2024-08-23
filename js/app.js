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


// ** CONTACTO 
const form = document.querySelector('.contactForm .form');
const btn = document.querySelector('.contactForm .form .btn')
let verificado = {
    nombre: '',
    ciudad: '',
    email: '',
    mensaje: ''
}

form.addEventListener('focusout', verificar);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    enviar()
} )

// funciones

function verificar(e) {
    let type = e.target.id;

    switch (type) {
        case 'name':
            nombre(e.target)
            break;
        case 'ciudad':
            ciudad(e.target)
            break;
        case 'email':
            email(e.target)
            break;
        case 'mensaje':
            mensaje(e.target)
            break;

        default:

            break;
    }

    if(!Object.values(verificado).includes('')){
        btn.classList.remove('disabled');
        btn.disabled = false;
    } else {
        btn.disabled = true;
        btn.classList.add('disabled')
    }

}

function nombre(e) {
    const nombre = e.value;
    if (nombre.trim() === '') {
            alert(e, 'error')
            verificado.nombre = ''
        } else {
            alert(e, 'success')
            verificado.nombre = 'ok'
        }
    }


function ciudad(e) {
    if (e.value === '') {
        alert(e,'error')
        verificado.ciudad = ''
    } else {
        alert(e, 'success')
        verificado.ciudad = 'ok'
    }
}

function email(e) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if(!regex.test(e.value) || e.value.trim() === ''){
    alert(e, 'error')
    verificado.email = ''
  } else {
    alert(e, 'success')
    verificado.email = 'ok'
  }
}

function mensaje(e) {
    if (e.value === '') {
        alert(e, 'error')
        verificado.mensaje = ''
    } else {
        alert (e, 'success')
        verificado.mensaje = 'ok'
    }
}

function alert(e, tipo) {
    eliminarAlert(e);
    const padre = e.parentElement;
    const icon = document.createElement('I');
    icon.classList.add('fa-solid', 'fa-circle-check', `${tipo}`);
    padre.appendChild(icon);
}

function eliminarAlert(e) {
    if (e.nextElementSibling) {
        e.nextElementSibling.remove()
    }
}

function enviar() {
    form.classList.add('enviando')
    form.submit()

    verificado = {
        nombre: '',
        ciudad: '',
        email: '',
        mensaje: ''
    }
    setTimeout(() => {
        form.classList.remove('enviando')
        form.reset()
        const i = form.querySelectorAll('.fa-solid');
        i.forEach(element => {
            element.remove()
        });
        btn.classList.add('disabled')
        btn.disabled = true;
    }, 1800);
    
    
}

// FAQS
const arrows = document.querySelectorAll('.faqs .pregunta .fa-solid')

arrows.forEach(arrow => {
    arrow.addEventListener('click', mostrar)
});

function mostrar(e) {
    const item = e.target.parentElement.parentElement;
    const respuesta =item.lastElementChild;
    const icon = item.firstElementChild.lastElementChild;

    respuesta.classList.toggle("hidden");
    icon.classList.toggle("fa-angle-down")
    icon.classList.toggle("fa-angle-up")
}


//chatbot 
/*
document.querySelector('.chatbot i').addEventListener('click', (e)=>{
    const chat = document.querySelector('.chatbot');
    chat.innerHTML = '';

    const chatWindow = document.createElement('div')
    chatWindow.classList.add('chatwindow')
    chatWindow.innerHTML=`
    <div class="chat-head">
        <i class="fa-solid fa-close fa-2xl"></i>
        <p>Bienvenido al asistente de proyectos</p>
    </div>
    <div class="chat-body">
        <div class="chat-response">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
            <p>Hola, soy un asistente que te puede brindar información sobre los proyectos presentados.</p>
        </div>
        <div class="chat-ask">
            <p>Hola, si me gustaría conocer los proyectos.</p>
            <i class="fa-regular fa-circle-user fa-2xl"></i>
        </div>
        <div class="chat-response">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
            <p>Hola, soy un asistente que te puede brindar información sobre los proyectos presentados.</p>
        </div>
        <div class="chat-ask">
            <p>Hola, si me gustaría conocer los proyectos.</p>
            <i class="fa-regular fa-circle-user fa-2xl"></i>
        </div>
        <div class="chat-response">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
            <p>Hola, soy un asistente que te puede brindar información sobre los proyectos presentados.</p>
        </div>
        <div class="chat-ask">
            <p>Hola, si me gustaría conocer los proyectos.</p>
            <i class="fa-regular fa-circle-user fa-2xl"></i>
        </div>
        <div class="chat-response">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
            <p>Hola, soy un asistente que te puede brindar información sobre los proyectos presentados.</p>
        </div>
        <div class="chat-ask">
            <p>Hola, si me gustaría conocer los proyectos.</p>
            <i class="fa-regular fa-circle-user fa-2xl"></i>
        </div>

    </div>
    <div class="chat-footer">
        <input>
        <i class="fa-solid fa-square-arrow-up-right fa-xl"></i>
    </div>
    `;
    chat.appendChild(chatWindow)

    document.querySelector('.fa-close').addEventListener('click', ()=>{
        
        window.location.reload()
    })
    
}) */


