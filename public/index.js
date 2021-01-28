


document.addEventListener('DOMContentLoaded', (event) => {

  window.addEventListener('load', function () {
    window.scrollTo(0, 0);
  });


  window.addEventListener('scroll', function () {
    navbarScroll();
  });


  function navbarScroll() {
    var y = window.scrollY;
    if (y > 2) {
      $('.header-container').addClass('small');
    } else if (y < 2) {
      $('.header-container').removeClass('small');
    }
  };



  scrollToMethodSobreMi();
  scrollToMethodTrabajos();
  scrollToMethodContact();


  playAudio('#audio0223', '#play0223');
  playAudio('#audio0223', '#playMobile0223');

  playAudio('#audioLang', '#playLang');
  playAudio('#audioLang', '#playMobileLAN');

  playAudio('#audioParrilla', '#playParrilla');
  playAudio('#audioParrilla', '#playParrillaFront');

  playAudio('#audioRDS', '#playRDSfront');
  playAudio('#audioRDS', '#playRDS');

  playAudio('#audioSTR', '#playSTRFront');
  playAudio('#audioSTR', '#playSTR');

  playAudio('#last-item-audio', '#playATfront');
  playAudio('#last-item-audio', '#playAT');

  playAudio('#audioTodos', '#reproducirTodos-front');
  playAudio('#audioTodos', '#reproducirTodos-mobile');

  playAudio('#audioCiardi', '#ciardi-play-front');
  playAudio('#audioCiardi', '#ciardi-play-mobile');

  playAudio('#audio-la25', '#la25-play-front');
  playAudio('#audio-la25', '#play-la25-mobile');




  function scrollToMethodSobreMi() {
    const sobreMiButton = document.querySelector('#sobre-mi');
    const presentationToScroll = document.querySelector('.presentation');
    sobreMiButton.addEventListener('click', function () {
      $('.header-container').addClass('small');
      presentationToScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    });
  };


  function scrollToMethodTrabajos() {
    const trabajosRbutton = document.querySelector('#trabajos-realizados');
    const trabajosRtoScroll = document.querySelector('#grid-section');
    trabajosRbutton.addEventListener('click', function () {
      trabajosRtoScroll.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });
  };

  function scrollToMethodContact() {
    const contactButton = document.querySelector('#Contacto');
    const contacttoScroll = document.querySelector('#contact-box');
    contactButton.addEventListener('click', function () {
      contacttoScroll.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  };


  // tener un metodo que reciba el string de play y audio. 
  // cada vez que se produce se guarda is playing TRUE y también guardar cuales el audio que estás reproduciendo,
  // entonces cuando haces click en otro
  // se pausa el audio con un if y se hace el play del nuevo



  let currentAudio = null;


  function playAudio(audioId, playerId) {
    const audio = document.querySelector(audioId);
    const play = document.querySelector(playerId);
    play.addEventListener('click', function () {
      if (currentAudio != audio) {
        if (currentAudio) {
          currentAudio.pause();
        }
        currentAudio = audio;
        currentAudio.play();
      } else {
        if (currentAudio.paused) {
          currentAudio.play();
        } else {
          currentAudio.pause();
        }
      }
    });
  };


});
