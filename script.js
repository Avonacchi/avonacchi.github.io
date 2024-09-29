function copyText(textBoxId, button) {
    var copyText = document.getElementById(textBoxId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Change button text to "Copied!"
    var originalText = button.textContent;
    button.textContent = "Copied!";

    // Return to original text after 3-5 seconds
    setTimeout(function() {
        button.textContent = originalText;
    }, 3000); // Change 3000 to 5000 for 5 seconds
}