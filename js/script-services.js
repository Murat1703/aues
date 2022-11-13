let serviceItems = document.querySelectorAll('.service-item');
[].forEach.call(serviceItems, function(serviceItem) {
  // do whatever
  serviceItem.addEventListener('click', () => {
  	serviceItem.classList.toggle('__active');
  })
});
