document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-container .card-js");

  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");

  const showMoreBtn2023 = document.getElementById("showMoreBtn2023");
  const showLessBtn2023 = document.getElementById("showLessBtn2023");

  const showMoreBtnDig2023 = document.getElementById("showMoreBtnDig2023");
  const showLessBtnDig2023 = document.getElementById("showLessBtnDig2023");

  const showMoreBtnSpkr2023 = document.getElementById("showMoreBtnSpkr2023");
  const showLessBtnSpkr2023 = document.getElementById("showLessBtnSpkr2023");

  // Function to show only the first 4 cards
  const showInitialCards = () => {
    cards.forEach((card, index) => {
      card.classList.toggle("visible", index < 4);
    });
  };

  const showInitialCards2023 = () => {
    cards.forEach((card, index) => {
      card.classList.toggle("visible", index < 4);
    });
  };

  const showInitialCardsDig2023 = () => {
    cards.forEach((card, index) => {
      card.classList.toggle("visible", index < 4);
    });
  };

  const showInitialCardsSpkr2023 = () => {
    cards.forEach((card, index) => {
      card.classList.toggle("visible", index < 4);
    });
  };

  // Function to show all cards
  const showAllCards = () => {
    cards.forEach((card) => card.classList.add("visible"));
  };

  const showAllCards2023 = () => {
    cards.forEach((card) => card.classList.add("visible"));
  };

  const showAllCardsDig2023 = () => {
    cards.forEach((card) => card.classList.add("visible"));
  };

  const showAllCardsSpkr2023 = () => {
    cards.forEach((card) => card.classList.add("visible"));
  };

  // Show initial cards on page load
  showInitialCards();
  showInitialCards2023();
  showInitialCardsDig2023();
  showInitialCardsSpkr2023();

  // Event listener for Show More button
  showMoreBtn.addEventListener("click", () => {
    showAllCards();
    showMoreBtn.classList.add("d-none");
    showLessBtn.classList.remove("d-none");
  });

  // Event listener for Show Less button
  showLessBtn.addEventListener("click", () => {
    showInitialCards();
    showMoreBtn.classList.remove("d-none");
    showLessBtn.classList.add("d-none");
  });

  // Event listener for Show More button
  showMoreBtn2023.addEventListener("click", () => {
    showAllCards2023();
    showMoreBtn2023.classList.add("d-none");
    showLessBtn2023.classList.remove("d-none");
  });

  // Event listener for Show Less button
  showLessBtn2023.addEventListener("click", () => {
    showInitialCards2023();
    showMoreBtn2023.classList.remove("d-none");
    showLessBtn2023.classList.add("d-none");
  });

  // Event listener for Show More button
  showMoreBtnDig2023.addEventListener("click", () => {
    showAllCardsDig2023();
    showMoreBtnDig2023.classList.add("d-none");
    showLessBtnDig2023.classList.remove("d-none");
  });

  // Event listener for Show Less button
  showLessBtnDig2023.addEventListener("click", () => {
    showInitialCardsDig2023();
    showMoreBtnDig2023.classList.remove("d-none");
    showLessBtnDig2023.classList.add("d-none");
  });

  // Event listener for Show More button
  showMoreBtnSpkr2023.addEventListener("click", () => {
    showAllCardsSpkr2023();
    showMoreBtnSpkr2023.classList.add("d-none");
    showLessBtnSpkr2023.classList.remove("d-none");
  });

  // Event listener for Show Less button
  showLessBtnSpkr2023.addEventListener("click", () => {
    showInitialCardsSpkr2023();
    showMoreBtnSpkr2023.classList.remove("d-none");
    showLessBtnSpkr2023.classList.add("d-none");
  });
});

// $(window).scroll(function() {
//   if($(this).scrollTop() != 0) {
//     $('#to-top').fadeIn(); 
//   } else {
//     $('#to-top').fadeOut();
//   }
// });

// $('#to-top').click(function() {
//   $('body,html').animate({scrollTop:0},"fast");
// });
