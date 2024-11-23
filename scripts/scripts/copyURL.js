function copyURL() {
    const url = window.location.href;
    const title = document.title;
  
    if (navigator.share) {
      // Use the Web Share API if available (mostly mobile devices)
      navigator.share({
        title: title,
        url: url
      })
      .then((e) => {})
      .catch(error => {});
    } else {
      // Fallback: copy the URL to the clipboard
      navigator.clipboard.writeText(url)
        .then(() => {
          alert("URL copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy URL:", err);
        });
    }
  }