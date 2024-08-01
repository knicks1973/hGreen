


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
<button onClick= "document.getElementById">press SPACE BAR to get started</button>
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
