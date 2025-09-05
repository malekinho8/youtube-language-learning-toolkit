V_YOUTUBE_PLAYER = document.querySelector('ytd-player').getPlayer();
V_SECONDS = 1;

function backwardXSeconds(seconds) {
  V_YOUTUBE_PLAYER.seekToStreamTime(V_YOUTUBE_PLAYER.getCurrentTime() - seconds);
}
function forwardXSeconds(seconds) {
  V_YOUTUBE_PLAYER.seekToStreamTime(V_YOUTUBE_PLAYER.getCurrentTime() + seconds);
}

// --- EDITED CODE ADDITION ---

// Define the two full caption track objects you want to toggle between
const V_ARABIC_CAPTION_TRACK = {
  "languageCode": "ar",
  "languageName": "Arabic (auto-generated)",
  "displayName": "Arabic (auto-generated)",
  "kind": "asr",
  "name": "",
  "id": null,
  "is_servable": false,
  "is_default": false,
  "is_translateable": true,
  "vss_id": "a.ar"
};

const V_ENGLISH_TRANSLATED_CAPTION_TRACK = {
  "languageCode": "ar",
  "languageName": "Arabic (auto-generated)",
  "displayName": "Arabic (auto-generated) >> English",
  "kind": "asr",
  "name": "",
  "id": null,
  "is_servable": false,
  "is_default": false,
  "is_translateable": true,
  "vss_id": "a.ar",
  "translationLanguage": {
    "languageCode": "en",
    "languageName": "English"
  }
};

let V_IS_ARABIC_CAPTION = true; // State variable to track the current caption language

function toggleCaptionLanguage() {
  console.log("-----------------------------------------");
  console.log("toggleCaptionLanguage function called.");

  try {
    if (V_IS_ARABIC_CAPTION) {
      // Switch from Arabic to English-translated
      V_YOUTUBE_PLAYER.setOption('captions', 'track', V_ENGLISH_TRANSLATED_CAPTION_TRACK);
      console.log("Switched to English-translated captions.");
    } else {
      // Switch from English-translated back to Arabic
      V_YOUTUBE_PLAYER.setOption('captions', 'track', V_ARABIC_CAPTION_TRACK);
      console.log("Switched to Arabic captions.");
    }

    // Toggle the state for the next press
    V_IS_ARABIC_CAPTION = !V_IS_ARABIC_CAPTION;
    console.log("Current caption state is Arabic:", V_IS_ARABIC_CAPTION);

  } catch (e) {
    console.error("Error setting caption language:", e);
  }

  console.log("-----------------------------------------");
}

// --------------------- ORIGINAL CODE REMAINS THE SAME BELOW ---------------------

try {
  window.removeEventListener('keydown', v_backward_listener);
  window.removeEventListener('keydown', v_forward_listener);
  window.removeEventListener('keydown', v_caption_listener);
} catch (e) {}

v_backward_listener = function(e) {
  if (e.keyCode === 37 && e.altKey) {
    console.log("Alt + Left Arrow pressed. Moving backward.");
    backwardXSeconds(V_SECONDS);
  }
}

v_forward_listener = function(e) {
  if (e.keyCode === 39 && e.altKey) {
    console.log("Alt + Right Arrow pressed. Moving forward.");
    forwardXSeconds(V_SECONDS);
  }
}

v_caption_listener = function(e) {
  if (e.keyCode === 67 && e.altKey) {
    console.log("Alt + C pressed. Toggling caption language.");
    toggleCaptionLanguage();
  }
}

window.addEventListener('keydown', v_backward_listener);
window.addEventListener('keydown', v_forward_listener);
window.addEventListener('keydown', v_caption_listener);