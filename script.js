(function () {
  "use strict";

  const video = document.getElementById("wildlife-video");
  const videoWrapper = document.getElementById("video-wrapper");
  const toggleBtn = document.getElementById("toggle-btn");

  if (!video || !videoWrapper || !toggleBtn) {
    return;
  }

  let isHidden = false;

  function updateButtonLabel() {
    if (isHidden) {
      toggleBtn.textContent = "Show Video";
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      toggleBtn.textContent = video.paused ? "Play Video" : "Hide Video";
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  toggleBtn.addEventListener("click", function () {
    if (isHidden) {
      videoWrapper.classList.remove("hidden");
      isHidden = false;
      video.play();
    } else if (video.paused) {
      video.play();
    } else {
      video.pause();
      videoWrapper.classList.add("hidden");
      isHidden = true;
    }
    updateButtonLabel();
  });

  video.addEventListener("play", updateButtonLabel);
  video.addEventListener("pause", updateButtonLabel);

  updateButtonLabel();
})();
