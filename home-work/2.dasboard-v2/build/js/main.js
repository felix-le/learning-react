window.onload = function () { 
  dropdownGlobal();
}

function dropdownGlobal() {
  var dropdowns = document.querySelectorAll('.dropdown');
  if (dropdowns.length > 0) {
    dropdowns.forEach(function (elDropdown) {
      elDropdown.addEventListener('click', function (e) {
        var nextSibling = elDropdown.nextElementSibling;
        var activeEle = elDropdown.children;
        var Arrow = activeEle[0].children;

        
        nextSibling.classList.toggle('is-hidden');
        activeEle[0].classList.toggle('active');
        Arrow[2].classList.toggle('icon-chevron-down');

      });
    });
  }
}

// var dropdowns = document.querySelectorAll('.dropdown');
