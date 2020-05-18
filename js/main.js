// searching songs without API 
function search_song() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('song_title');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerText.toLowerCase().includes(input)) {
      x[i].style.display = "none";

    } else {
      x[i].style.display = "block";
      clearInput();
    }
  }

}


function clearInput() {
  document.getElementById('searchbar').value = '';
}

function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.show-fontSize')) {
    var openDropdown = document.getElementsByClassName("show-fontSize");
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}


// fontSize controller 
function changeSize(n) {
  var s = document.getElementById('text-font-size');
  s.style.fontSize = n.value + 'px'
}


//show textsize controller

function showContent() {
  var x = document.querySelector('.show-fontSize');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// display themes colors

function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-theme");
}