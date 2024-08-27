//chatbot 

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
    
}) 