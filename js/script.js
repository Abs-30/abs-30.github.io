function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        sidebar.classList.add("closed");
    } else {
        sidebar.classList.remove("closed");
        sidebar.classList.add("open");
    }
}
