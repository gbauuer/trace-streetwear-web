
  function validarYEnviarFormulario() {

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let numero = document.getElementById('numero').value;
  let usuario_instagram = document.getElementById('usuario_instagram').value;
  let email = document.getElementById('email').value;
  
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
  
  if (!usuario_instagram) {
    alert('Por favor ingresa tu usuario de Instagram.');
    return;
  }

  if (!email) {
    alert('Por favor ingresa tu email.');
    return;
  }

  

  
    var mensaje = {
      content: `Nuevo usuario en el sorteo:\n- Nombre: ${nombre}\n- Apellido: ${apellido}\n- Número: ${numero}\n- Email: ${email}\n- Usuario de Instagram: ${usuario_instagram}\n\n_______________________________`
    };
  
    var webhookUrl = 'https://discord.com/api/webhooks/1365487955438731315/UqqQpMt4y-glVZT2GyjUc-GKP6dehJLxL9enJwNOHBZM7E1dsrWc6RYafMpJaYnaA0Jx';
  
    
    fetch(webhookUrl, {
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
      window.location.href = `https://www.instagram.com/trace.stw`;
    })
    .catch(error => {
      alert('Hubo un error al enviar el pedido.');
    });
  }