(async () => {
  initEventListeners();
  initOnePageScroll();
  // initVideoSection();

  // initPlaylistSection();
  /*global Siema */
  const siema = new Siema({
    selector: '.siema',
    // loop: true,
  });
  document.querySelector('span.prev').addEventListener('click', () => siema.prev());
  document.querySelector('span.next').addEventListener('click', () => {
    const thePlayer = document.querySelector('.the-player');
    if (thePlayer.paused) {
      thePlayer.play();
    }
    if (siema.currentSlide === 23) {
      document.querySelector('.footer').classList.remove('hidden-footer');
    }
    siema.next();
  });
  // loadSongs();
})();

// function initVideoSection() {
//   const videoContainer = document.querySelector('.video-container');
//   const theVideo = document.querySelector('.the-video');
//   theVideo.addEventListener('click', () => {
//     if (theVideo.paused) {
//       videoContainer.classList.remove('video-paused');
//       theVideo.play();
//     } else {
//       videoContainer.classList.add('video-paused');
//       theVideo.pause();
//     }
//   });
//   document.querySelector('.play-button').addEventListener('click', () => {
//     videoContainer.classList.remove('video-paused');
//     theVideo.play();
//   });
// }

// function initPlaylistSection() {
//   const herListID = 'PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG';
//   const meListID = 'PLpISLnShJQ2YxGa4InOtD4fY_c1yprQ_6';
//   const ytPlayer = document.querySelector('.yt-playlist');
//   document.querySelector('.music-her-box').addEventListener('click', () => {
//     ytPlayer.src = `https://www.youtube.com/embed/videoseries?list=${herListID}`;
//   });
//   document.querySelector('.music-me-box').addEventListener('click', () => {
//     ytPlayer.src = `https://www.youtube.com/embed/videoseries?list=${meListID}`;
//   });
// }

function initEventListeners() {
  const paAva = document.querySelector('div.pa-ava');
  paAva.addEventListener('click', () => {
    paAva.classList.toggle('changed');
  });
}

// async function loadSongs() {
//   const songInfo = await (await fetch('/song')).json();
//   appendSongs({
//     songs: songInfo.me,
//     folder: 'me',
//   });
//   appendSongs({
//     songs: songInfo.her,
//     folder: 'her',
//   });
// }

// function appendSongs({ songs, folder }) {
//   const thePlayer = document.querySelector('.the-player');
//   const musicVideo = document.querySelector('.music-video');
//   const container = folder === 'me'
//     ? document.querySelector('div.left-panel>.song-container')
//     : document.querySelector('div.right-panel>.song-container');
//   const titleSection = document.querySelector('.title-section');
//   const descriptionSection = document.querySelector('.description-section');
//   songs.forEach(song => {
//     const songDiv = document.createElement('div');
//     songDiv.innerHTML = song.title;
//     songDiv.classList.add('song-elem');
//     songDiv.addEventListener('click', () => {
//       if (songDiv.matches('.playing-song')) {
//         thePlayer.paused
//           ? (thePlayer.play())
//           : (thePlayer.pause());
//         return;
//       }
//       titleSection.innerHTML = `${song.title} - ${song.artist}`;
//       descriptionSection.innerHTML = song.description;
//       const source = `/song/${folder}/${song.file}`;
//       thePlayer.src = source;
//       thePlayer.play();
//       musicVideo.src = `/video/${song.video}`;
//       musicVideo.setAttribute("controls", "controls");
//       setPlayingSongDiv({ target: songDiv });
//     });
//     container.appendChild(songDiv);
//   });
// }

// function setPlayingSongDiv({ target }) {
//   const playing = document.querySelector('div.playing-song');
//   if (playing) playing.classList.remove('playing-song');
//   if (target) target.classList.add('playing-song');
// }

// /* global onePageScroll */

function initOnePageScroll() {
  document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => section.scrollIntoView({
      behavior: "smooth",
    }));
  });
  // onePageScroll(".main", {
  //   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  //   easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
  //   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  //   animationTime: 1000, // AnimationTime let you define how long each section takes to animate
  //   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
  //   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  //   beforeMove: function () {}, // This option accepts a callback function. The function will be called before the page moves.
  //   afterMove: function () {}, // This option accepts a callback function. The function will be called after the page moves.
  //   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  //   keyboard: true, // You can activate the keyboard controls
  //   responsiveFallback: false // You can fallback to normal page scroll by defining the width of the browser in which
  //   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
  //   // the browser's width is less than 600, the fallback will kick in.
  // });
}
