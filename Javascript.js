enterBtn.addEventListener("click", () => {
    sword.play();
    fire.play();

    intro.classList.add("flash");
    intro.classList.add("fade-out");

    intro.style.display = "none";
bg.play();
startEmbers(); // 🔥 START PARTICLES HERE
});
this.speedX = (Math.random() - 0.5) * 0.5;
