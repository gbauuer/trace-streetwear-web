function copyURL() {
  // Get the current page URL
  const currentURL = window.location.href;

  // Copy the URL to the clipboard
  navigator.clipboard.writeText(currentURL)
      .then(() => {
          // Optional confirmation
          alert('URL de la página actual copiada al portapapeles.');
      })
      .catch(err => {
      });
}