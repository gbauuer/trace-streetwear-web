// Mostrar el submenú según la opción seleccionada
function mostrarSubmenu() {
  var producto = document.getElementById('mainMenu').value;
  var submenu1 = document.getElementById('submenu1');
  var submenu2 = document.getElementById('submenu2');


  if (producto === 'opcion1') {
    submenu1.style.display = 'block';
    submenu2.style.display = 'none';
  } else if (producto === 'opcion2') {
    submenu1.style.display = 'none';
    submenu2.style.display = 'block';
  } else {
    submenu1.style.display = 'none';
    submenu2.style.display = 'none';
  }
}











function validarYEnviarFormulario() {
  var producto = document.getElementById('mainMenu').value;
  var talle;

  var menu = document.getElementById('mainMenu');
  var selectedOption = menu.options[menu.selectedIndex];  // Obtener la opción seleccionada
  var textoProducto = selectedOption.text;


  if (!producto) {
      alert('Por favor selecciona un producto.');
      return;
  }

  if (producto === 'opcion1') {
      talle = document.getElementById('op1Sub').value;
  } else if (producto === 'opcion2') {
      talle = document.getElementById('op2Sub').value;
  }

  // Validar que se haya seleccionado un talle
  if (!talle) {
      alert('Por favor selecciona un talle.');
      return;
  }


  if (producto === 'opcion1') {
    talle = document.getElementById('op1Sub').value;
} else if (producto === 'opcion2') {
    talle = document.getElementById('op2Sub').value;
}
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let numero = document.getElementById('numero').value;

  var mensaje = {
    content: `Nuevo pedido:\n- Nombre: ${nombre}\n- Apellido: ${apellido}\n- Número: ${numero}\n- Producto: ${textoProducto}\n- Talle: ${talle}`
  };

  var webhookUrl = 'https://discord.com/api/webhooks/1362809483838885979/48xTmNBkpvjjKy9koBv9eMPoPAn8UDF3RREF-8EuR4oe1DhfkYodW21uRAWLhbiUqUTS';

  // Enviar al Webhook
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mensaje),
  })
  .then(response => {
    if (!response.ok) {
        console.error('Error al enviar al Webhook:', response.status);
        alert('Hubo un error al procesar tu pedido. Inténtalo nuevamente.');
        return;
    }
    // Si el Webhook fue exitoso, redirigir al pago
    window.location.href = "../realizarpagos.html";
  })
  .catch(error => {
    console.error('Error al enviar al Webhook:', error);
    alert('Hubo un error al enviar el pedido.');
  });
}
