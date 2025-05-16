/*=============== SHOW MENU ===============
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')

      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')*/



// Function to show/hide the nav menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// Function to handle dropdown menus
const handleDropdowns = () => {
  const dropdownToggles = document.querySelectorAll('.dropdown__toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdownMenu = toggle.nextElementSibling;
      const arrowIcon = toggle.querySelector('.dropdown__arrow');

      // Close all other dropdown menus and reset their icons
      document.querySelectorAll('.dropdown__menu').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
          const otherArrow = menu.previousElementSibling.querySelector('.dropdown__arrow');
          if (otherArrow) {
            otherArrow.classList.remove('rotate');
          }
        }
      });

      // Toggle the current dropdown menu and arrow
      const isOpen = dropdownMenu.classList.contains('show');
      dropdownMenu.classList.toggle('show', !isOpen);
      arrowIcon.classList.toggle('rotate', !isOpen);
    });
  });
};

handleDropdowns();