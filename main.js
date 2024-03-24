document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    modeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        localStorage.setItem("darkMode", "true");
        document.documentElement.style.setProperty('--linkText', '#fff');
        document.documentElement.style.setProperty('--head', '#fff');
        document.documentElement.style.setProperty('--about', '#ffffff99');
        document.documentElement.style.setProperty('--background', '#000000');
        document.documentElement.style.setProperty('--background-btn', '#222');
        document.documentElement.style.setProperty('--waves', '#ffffff');
        document.documentElement.style.setProperty('--waves7', '#ffffffb3');
        document.documentElement.style.setProperty('--waves5', '#ffffff80');
        document.documentElement.style.setProperty('--waves3', '#ffffff4d');
    }

    function enableLightMode() {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
        document.documentElement.style.setProperty('--linkText', '#fff');
        document.documentElement.style.setProperty('--head', '#000000');
        document.documentElement.style.setProperty('--about', '#000000');
        document.documentElement.style.setProperty('--background', '#fff');
        document.documentElement.style.setProperty('--background-btn', '#000000');
        document.documentElement.style.setProperty('--waves', '#000000');
        document.documentElement.style.setProperty('--waves7', '#000000b3');
        document.documentElement.style.setProperty('--waves5', '#00000080');
        document.documentElement.style.setProperty('--waves3', '#0000004d');
    }
});

