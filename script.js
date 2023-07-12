function enviarWhatsapp(mensaje) {
    const telefono = '+51931533177';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url);
  }




  const services = document.querySelectorAll('.service');
  let currentServiceIndex = 0;
  
  function showNextService() {
    services[currentServiceIndex].classList.remove('active');
    services[currentServiceIndex].classList.add('previous');
  
    currentServiceIndex++;
    if (currentServiceIndex >= services.length) {
      currentServiceIndex = 0;
    }
  
    services[currentServiceIndex].classList.add('active');
    services[currentServiceIndex].classList.remove('previous');
  
    setTimeout(showNextService, 3000);
  }
  
  services[currentServiceIndex].classList.add('active');
  
  setTimeout(showNextService, 3000);
  
  
