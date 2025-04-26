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











async function validarYEnviarFormulario() {
  var producto = document.getElementById('mainMenu').value;
  var talle;
  var price = "$0";

  var menu = document.getElementById('mainMenu');
  var selectedOption = menu.options[menu.selectedIndex];
  var textoProducto = selectedOption.text;


  if (!producto) {
      alert('Por favor selecciona un producto.');
      return;
  }

  if (producto === 'opcion1') {
      talle = document.getElementById('op1Sub').value;
      price = "690"
  } else if (producto === 'opcion2') {
      talle = document.getElementById('op2Sub').value;
      price = "690"
  }

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
let metodo = document.getElementById('metodo').value;

if (!nombre) {
  alert('Por favor ingresa tu nombre.');
  return;
}

if (!apellido) {
  alert('Por favor ingresa tu apellido.');
  return;
}

if (!numero) {
  alert('Por favor ingresa tu número de teléfono.');
  return;
}

if (!metodo) {
  alert('Por favor ingresa tu método de pago.');
  return;
}

  var mensaje = {
    content: `Nuevo pedido:\n- Nombre: ${nombre}\n- Apellido: ${apellido}\n- Número: ${numero}\n- Método de pago: ${metodo}\n- Producto: ${textoProducto}\n- Talle: ${talle}\n- Precio: ${price}\n\n_______________________________`
  };

  var webhookUrl = 'https://discord.com/api/webhooks/1362809483838885979/48xTmNBkpvjjKy9koBv9eMPoPAn8UDF3RREF-8EuR4oe1DhfkYodW21uRAWLhbiUqUTS';

  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mensaje),
  })
  .then(response => {
    if (!response.ok) {
        alert('Hubo un error al procesar tu pedido. Inténtalo nuevamente.');
        return;
    }
    window.location.href = `../realizarpagos?monto=${price}`;
  })
  .catch(error => {
    alert('Hubo un error al enviar el pedido.');
  });
}


function mostrarPrecio() {
  let urlParams = new URLSearchParams(window.location.search);
  let price = urlParams.get('monto');
  document.getElementById('priceProduct').textContent = price ? price : 'Desconocido';
}

mostrarPrecio();