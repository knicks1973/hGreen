document.addEventListener('DOMContentLoaded', function(goToMaristPortal))
    function goToMaristPortal() {
        goToLocation('http://my.marist.edu');
    }

    // Check if the elements exist before adding event listeners
    let portalButton = document.getElementById('portal_button');
    if (portalButton) {
        portalButton.addEventListener('click', goToMaristPortal);
    }

    let portalButtonText = document.getElementById('portal_button_text');
    if (portalButtonText) {
        portalButtonText.addEventListener('click', goToMaristPortal);
    }