import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

document.addEventListener("astro:page-load", () => {
    const script = document.getElementById("emailjs-script");
    const SERVICE_ID = script.getAttribute('data-service-id');
    const TEMPLATE_ID = script.getAttribute('data-template-id');
    const PUBLIC_KEY = script.getAttribute('data-public-key');

    document
        .getElementById("mensajes-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const entregaSelect = document.getElementById("dropoff-location");
            const retiroSelect = document.getElementById("pickup-location");
            const textArea = document.getElementById("description").value;
            const data = {
                Nombre: formData.get("name"),
                Telefono: formData.get("phone"),
                Compania: formData.get("company"),
                Email: formData.get("email"),
                DomicilioEntrega: formData.get("dropoff-address"),
                LocalidadEntrega: entregaSelect.options[entregaSelect.selectedIndex].text,
                DomicilioRetiro: formData.get("pickup-address"),
                LocalidadRetiro: retiroSelect.options[retiroSelect.selectedIndex].text,
                Detalles: textArea,
            };

            const message = formatMessage(data);

            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: `Q.B Formulario de Contacto - Mensajeria`,
                message: message,
            }, {
                publicKey: PUBLIC_KEY,
            }).then(() => {
                let timerInterval;
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Tu mensaje ha sido enviado correctamente.',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    window.location.reload();
                    window.location.href = '/';
                });
            }, (err) => {
                Swal.fire({
                    title: 'Error',
                    text: JSON.stringify(err),
                    icon: 'error',
                });
            });
        });
});

function formatMessage(data) {
    return `
        Nombre: ${data.Nombre}
        Teléfono: ${data.Telefono}
        Compañía: ${data.Compania}
        Email: ${data.Email}
        Domicilio de Entrega: ${data.DomicilioEntrega}
        Localidad de Entrega: ${data.LocalidadEntrega}
        Domicilio de Retiro: ${data.DomicilioRetiro}
        Localidad de Retiro: ${data.LocalidadRetiro}
        Detalles: ${data.Detalles}
    `;
}
