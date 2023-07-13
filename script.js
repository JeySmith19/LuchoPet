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
  
  
  

  function initMap() {
    var location = { lat: -9.051226376912952, lng: -75.51615345949874 };
  
    var mapOptions = {
      center: location,
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    var marker = new google.maps.Marker({
      map: map,
      position: location,
      title: "Ubicación"
    });
  }
  
