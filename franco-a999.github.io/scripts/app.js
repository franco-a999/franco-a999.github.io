let menuOpen = false;

function toggleMenu() {
  if(!menuOpen){
    $('#navDiv').animate({
      right: 0
    }, 300, 'swing');
  }
  else {
    $('#navDiv').animate({
      right: -330
    }, 300, 'swing');
  }
  menuOpen = !menuOpen;
}