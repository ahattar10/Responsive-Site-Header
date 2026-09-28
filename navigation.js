const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Enhance the menu when its controls exist.
if (button && list) {
    // Show the button in its collapsed state.
    document.documentElement.classList.add("nav-enhanced");
    button.hidden = false;
    button.setAttribute("aria-expanded", "false");

    // Update the state CSS uses for visibility.
    function setMenuOpen(isOpen) {
        button.setAttribute("aria-expanded", String(isOpen));
    }

    // Toggle the menu on click.
    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    // Close the menu on Escape when open, then return focus to the button.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            button.focus();
        }
    });
}


