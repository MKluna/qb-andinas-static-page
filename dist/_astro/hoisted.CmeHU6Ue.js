import{S as t,e as p,P as g,a as E,b}from"./client.C-2kNzqd.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.D9ffiitI.js";import"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js";const C="/";document.addEventListener("astro:page-load",()=>{document.getElementById("reclamos-form")?.addEventListener("submit",async function(e){e.preventDefault();const o=document.getElementById("submit-button-rclm"),s=o.querySelector("#spinner"),a=o.querySelector("#button-text-reclamos"),c=a.textContent;o.disabled=!0,s.classList.remove("hidden"),a.textContent="Enviando...";const i=grecaptcha.getResponse();if(!i){t.fire({title:"Error",text:"Por favor, verifica que no eres un robot.",icon:"error",showConfirmButton:!1,timer:2500}),l();return}const n=new FormData(e.target),m=document.getElementById("description-reclamos").value,d={Nombre:n.get("name"),Telefono:n.get("phone"),Compania:n.get("company"),Email:n.get("email"),Detalles:m},u=h(d);p.send(g,E,{from_name:"Q.B Formulario de Contacto - Reclamo",message:u,"g-recaptcha-response":i},{publicKey:b}).then(()=>{let r;t.fire({title:"¡Enviado!",text:"Tu mensaje ha sido enviado correctamente.",icon:"success",timer:2e3,timerProgressBar:!0,didOpen:()=>{t.showLoading();const f=t.getPopup()?.querySelector("b");r=setInterval(()=>{f.textContent=`${t.getTimerLeft()}`},100)},willClose:()=>{clearInterval(r)}}).then(()=>{window.location.reload(),window.location.href=C})},r=>{t.fire({title:"Error",text:JSON.stringify(r),icon:"error"}),l()});function l(){o.disabled=!1,s.classList.add("hidden"),a.textContent=c}})});function h(e){return`
      Nombre: ${e.Nombre}
      Teléfono: ${e.Telefono}
      Compañía: ${e.Compania}
      Email: ${e.Email}
      Detalles del reclamo: ${e.Detalles}
    `}