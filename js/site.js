document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

async function loadHeroMedia() {
  const container = document.getElementById("hero-media-container");
  if (!container) return;

  let items;
  try {
    const response = await fetch("data/hero-media.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    items = await response.json();
  } catch (error) {
    console.error("Kunde inte läsa hero-media.json", error);
    items = [{ type: "image", src: "images/index/hero/rosso-01.jpg", duration: 8000 }];
  }

  if (!Array.isArray(items) || items.length === 0) return;
  let index = 0;

  const showNext = () => {
    container.replaceChildren();
    const item = items[index];
    index = (index + 1) % items.length;

    if (item.type === "video") {
      const video = document.createElement("video");
      video.className = "hero-video";
      video.src = item.src;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("aria-hidden", "true");
      let loopsDone = 0;
      const loopsWanted = Number(item.loops) || 1;
      video.addEventListener("ended", () => {
        loopsDone += 1;
        if (loopsDone < loopsWanted) {
          video.currentTime = 0;
          video.play().catch(showNext);
        } else {
          showNext();
        }
      });
      video.addEventListener("error", showNext, { once: true });
      container.appendChild(video);
      return;
    }

    const image = document.createElement("div");
    image.className = "hero-background";
    image.style.backgroundImage = `url('${item.src}')`;
    image.setAttribute("aria-hidden", "true");
    container.appendChild(image);
    window.setTimeout(showNext, Number(item.duration) || 8000);
  };

  showNext();
}

loadHeroMedia();
