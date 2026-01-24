const toggleBtn = document.getElementById('toggle-btn'); //нажатие кнопки
const hiddenCard = document.querySelectorAll('.brand-card__hidden'); //все элементы с тегом
const bottonText = toggleBtn.querySelector('.btn__text'); //текст на кнопке
const bottonIcon = toggleBtn.querySelector('.btn__icon'); //найти стрелки

let isOpen = false; //переменная состояния (сначла закрыто т.е. false)

toggleBtn.addEventListener('click', ()=>{
    
    if(!isOpen){
        hiddenCard.forEach(card => {
            card.style.display = 'flex';
            card.classList.remove('brand-card__hidden')
        });
        bottonText.textContent = 'Скрыть';
        bottonIcon.classList.add('rotated');
        isOpen = true;
    }else{
            hiddenCard.forEach(card => {
                card.style.display = 'none';
                card.classList.add('brand-card__hidden')
            });
        bottonText.textContent = 'Показать все';
        bottonIcon.classList.remove('rotated');
        isOpen = false;
        }
    });

const cards = document.querySelectorAll('.brand-card');

function toggleHiddenCards() {
  const width = window.innerWidth;

  if (width >= 760 && width <= 1120 && !isOpen) {
    // 7 и 8 карточки (индексы 6 и 7)
    cards[6]?.classList.add('brand-card__hidden');
    cards[7]?.classList.add('brand-card__hidden');
  } else {
    cards[6]?.classList.remove('brand-card__hidden');
    cards[7]?.classList.remove('brand-card__hidden');
  }
}
window.addEventListener('load', toggleHiddenCards);
window.addEventListener('resize', toggleHiddenCards);

let swiper;

function initSwiper() {
  const brandSwiper = document.querySelector('.brand-swiper');

  if (window.innerWidth <= 767 && !swiper) {
    swiper = new Swiper(brandSwiper, {
      slidesPerView: 'auto',      // 2 карточки на экран
      spaceBetween: 16,
      freeMode: false,        // чтобы точки работали
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if (window.innerWidth > 767 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);