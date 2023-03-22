document.addEventListener('DOMContentLoaded', function () {
    new Splide('#MU', {
      perPage: 4,
      perMove: 1,
      gap: "1.5rem",
      padding: "4rem",
      pagination: false,
      type: "loop",
      autoplay: true,
    }).mount();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Ars', {
        perPage: 4,
        perMove: 1,
        gap: "1.5rem",
        padding: "4rem",
        pagination: false,
        type: "loop",
        autoplay: true,
      }).mount();
  });

  const notifications = document.querySelector('.notifications')
  const modal = document.querySelector('.modal')
  const modalContainer = document.querySelector('.modal_container')

 
  function showNotifications() {
    modal.classList.add('open')
  }

  function hideNotifications() {
    modal.classList.remove('open')
  }

  notifications.addEventListener('click', showNotifications)
  modal.addEventListener('click', hideNotifications)

  modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
  })

  const profile = document.querySelector('.profile')
  const modal01 = document.querySelector('.modal_01')
  const modalprofile = document.querySelector('.modal-profile')

  function showProfile() {
    modal01.classList.add('open')
  }

  function hideProfile() {
    modal01.classList.remove('open')
  }

  profile.addEventListener('click', showProfile)
  modal01.addEventListener('click', hideProfile)

  modalprofile.addEventListener('click', function (event){
    event.stopPropagation()
  })