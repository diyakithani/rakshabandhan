const btn = document.getElementById("openGift");
const giftScreen = document.getElementById("gift");
const main = document.getElementById("main"); // contains #rakhi
const rakhi = document.getElementById("rakhi"); // the section you want to show

btn.addEventListener("click", () => {
  // Optional: prevent double-click spam
  btn.disabled = true;

  // Fade the overlay out
  const anim = giftScreen.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500,
    easing: "ease",
    fill: "forwards", // keeps it at opacity 0 until we hide it
  });

  anim.onfinish = () => {
    // Remove gift from layout completely
    giftScreen.classList.add("hidden");
    giftScreen.style.opacity = ""; // clean up inline style

    // Reveal the main/rakhi section
    if (main) main.classList.remove("hidden");
    if (rakhi) rakhi.classList.remove("hidden");

    // Optional: focus heading for accessibility
    rakhi?.querySelector("h1")?.focus?.();
  };
});
