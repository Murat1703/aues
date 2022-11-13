let adminCardItems = document.querySelectorAll('.administration-card-item');
[].forEach.call(adminCardItems, function(adminCardItem) {
  // do whatever
  adminCardItem.addEventListener('click', () => {
    adminCardItem.classList.toggle('__active');
  })
});
