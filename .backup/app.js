(function () {
  [...document.querySelectorAll('.control')].forEach((button) => {
    button.addEventListener('click', function () {
      document.querySelector('.active-btn').classList.remove('active-btn');
      this.classList.add('active-btn');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(button.dataset.id).classList.add('active');
    });
  });
  document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
})();
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.button'),
    loader = document.querySelector('.loader'),
    check = document.querySelector('.check');

  btn.addEventListener('click', function () {
    loader.classList.add('active');
  });

  loader.addEventListener('animationend', function () {
    check.classList.add('active');
  });
});
