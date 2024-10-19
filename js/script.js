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




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add 'active' class to the corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            activeLink.classList.add("active");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    sections.forEach(section => observer.observe(section));
  });


  