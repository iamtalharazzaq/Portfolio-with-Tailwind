const sideMenu = document.querySelector("#side");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

document.addEventListener("DOMContentLoaded", function() {
    const wheelScroll = document.getElementById("scrollContainer");
    wheelScroll.addEventListener("wheel", (e) => {
        e.preventDefault();
        wheelScroll.scrollLeft += e.deltaY; // Convert vertical scroll to horizontal scroll
    });
});

