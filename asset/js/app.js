//date
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
document.querySelector(".date").textContent = añoActual;

// HERO
document.querySelector(".menu").addEventListener("click", () => {
  const cuadro = document.querySelector(".cuadro_resumen");
  console.log('click');
  
  if (cuadro.classList.contains("hidden")) {
    setTimeout(() => {
      cuadro.classList.remove("hidden");
    }, 500);
  } else {
    cuadro.classList.add("hidden");
  }

  document.querySelectorAll(".nav-links .nav-item a").forEach(item => {
    item.addEventListener("click", () => {
      if (cuadro.classList.contains("hidden")) {
        setTimeout(() => {
          cuadro.classList.remove("hidden");
        }, 500);
      } else {
        cuadro.classList.add("hidden");
      }
    });
  }) 

});

// HEADER
console.log(window.innerWidth);

window.onscroll = function() { 
  const header = document.querySelector("#inicio"); 
  if (window.scrollY > 60 && window.innerWidth >= 576) { 
    document.querySelector('.cuadro_resumen').classList.add("hidden");
    header.classList.remove("inicio-altura");
    if(window.innerWidth >= 576){
    document.querySelector('main').style.marginTop = '210px';
    }
  } else { 
        
    if(window.innerWidth >= 576){
      document.querySelector('.cuadro_resumen').classList.remove("hidden"); 
      header.classList.add("inicio-altura");
      document.querySelector('main').style.marginTop = 'var(--nav-h)';
    } 
  }
  };


// DESTACADOS
const destacados_card = document.querySelectorAll(".destacados__card");

destacados_card.forEach(card=> {
  card.addEventListener("click", () => {
    card.classList.toggle('card__imagen');
    card.querySelector('.card__detalles').classList.toggle('hidden');

    destacados_card.forEach(destacado => {
      if(destacado !== card) {
        destacado.classList.add('card__imagen');
        destacado.querySelector('.card__detalles').classList.add('hidden');
      } 
    })
  })
 
});

// ** CONTACTO
const form = document.querySelector(".contactForm .form");
const btn = document.querySelector(".contactForm .form .btn");
let verificado = {
  nombre: "",
  ciudad: "",
  email: "",
  mensaje: "",
};

form.addEventListener("focusout", verificar);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  enviar();
});

// funciones

function verificar(e) {
  let type = e.target.id;

  switch (type) {
    case "name":
      nombre(e.target);
      break;
    case "ciudad":
      ciudad(e.target);
      break;
    case "email":
      email(e.target);
      break;
    case "mensaje":
      mensaje(e.target);
      break;

    default:
      break;
  }

  if (!Object.values(verificado).includes("")) {
    btn.classList.remove("disabled");
    btn.disabled = false;
  } else {
    btn.disabled = true;
    btn.classList.add("disabled");
  }
}

function nombre(e) {
  const nombre = e.value;
  if (nombre.trim() === "") {
    alert(e, "error");
    verificado.nombre = "";
  } else {
    alert(e, "success");
    verificado.nombre = "ok";
  }
}

function ciudad(e) {
  if (e.value === "") {
    alert(e, "error");
    verificado.ciudad = "";
  } else {
    alert(e, "success");
    verificado.ciudad = "ok";
  }
}

function email(e) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if (!regex.test(e.value) || e.value.trim() === "") {
    alert(e, "error");
    verificado.email = "";
  } else {
    alert(e, "success");
    verificado.email = "ok";
  }
}

function mensaje(e) {
  if (e.value === "") {
    alert(e, "error");
    verificado.mensaje = "";
  } else {
    alert(e, "success");
    verificado.mensaje = "ok";
  }
}

function alert(e, tipo) {
  eliminarAlert(e);
  const padre = e.parentElement;
  const icon = document.createElement("I");
  icon.classList.add("fa-solid", "fa-circle-check", `${tipo}`);
  padre.appendChild(icon);
}

function eliminarAlert(e) {
  if (e.nextElementSibling) {
    e.nextElementSibling.remove();
  }
}

function enviar() {
  form.classList.add("enviando");
  form.submit();

  verificado = {
    nombre: "",
    ciudad: "",
    email: "",
    mensaje: "",
  };
  setTimeout(() => {
    form.classList.remove("enviando");
    form.reset();
    const i = form.querySelectorAll(".fa-solid");
    i.forEach((element) => {
      element.remove();
    });
    btn.classList.add("disabled");
    btn.disabled = true;
  }, 1800);
}

// FAQS
const arrows = document.querySelectorAll(".faqs .pregunta .fa-solid");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", mostrar);
});

function mostrar(e) {
  const item = e.target.parentElement.parentElement;
  const respuesta = item.lastElementChild;
  const icon = item.firstElementChild.lastElementChild;

  respuesta.classList.toggle("hidden");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}

// SEARCH
const select = document.querySelector("#year");
const year = [];

for (let i = 2023; i <= añoActual; i++) {
  year.push(i);
  year.sort((a, b) => b-a);
  console.log(year);
  
}

select.innerHTML = "";
year.forEach((element) => {
  const op = document.createElement("option");
  op.setAttribute("value", element);
  op.textContent = element;
  select.appendChild(op);

});

