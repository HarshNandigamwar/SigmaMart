// Audio Utility Function
const playSound = (soundUrl) => {
  // Check if the browser supports Audio
  if (typeof Audio !== "undefined") {
    const audio = new Audio(soundUrl);
    audio.volume = 0.5;
    audio.play().catch((error) => {
      console.error(
        "Audio play failed, user interaction may be required:",
        error
      );
    });
  }
};

export default playSound;
