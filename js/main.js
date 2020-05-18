
// searching songs without API 
function search_song() {
  let input = document.getElementById('searchbar').value;
  console.log(input)
  input = input.toLowerCase();
  let x = document.getElementsByClassName('song_title');
  console.log(x)

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
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
// // Do not remove these lines:
// document.addEventListener("DOMContentLoaded", () => {
//   setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
// });

$('.dropdown-toggle').dropdown()
