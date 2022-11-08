'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(
    btnsOpenModal[i].addEventListener('click', function () {
      model.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
}

function closeModal() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!model.classList.contains('hidden')) {
      closeModal();
    }
  }
});
