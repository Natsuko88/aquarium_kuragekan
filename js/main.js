//クラゲ画像のアニメーション
const showkurage=(entries)=>{
    const keyframes={
        opacity:[0,1],
        translate:['0 50px',0],
    };
    entries[0].target.animate(keyframes,3000);
};
const kurageObserver=new  IntersectionObserver(showkurage);

kurageObserver.observe(document.querySelector('#kurage01'));
kurageObserver.observe(document.querySelector('#kurage02'));
kurageObserver.observe(document.querySelector('#kurage03'));
kurageObserver.observe(document.querySelector('#kurage04'));

//mapのレスポンシブ
imageMapResize();

//モーダル
const modal001Button = document.querySelector('[data-modal="modal001"]');
console.log(modal001Button);
const modal002Button = document.querySelector('[data-modal="modal002"]');
console.log(modal002Button);
const modal003Button = document.querySelector('[data-modal="modal003"]');
console.log(modal003Button);
const modal004Button = document.querySelector('[data-modal="modal004"]');
console.log(modal004Button);
const modal005Button = document.querySelector('[data-modal="modal005"]');
console.log(modal005Button);
const modal006Button = document.querySelector('[data-modal="modal006"]');
console.log(modal006Button);
const modal007Button = document.querySelector('[data-modal="modal007"]');
console.log(modal007Button);
const modal008Button = document.querySelector('[data-modal="modal008"]');
console.log(modal008Button);
const modal009Button = document.querySelector('[data-modal="modal009"]');
console.log(modal009Button);
const modalCloseBtns = document.querySelectorAll('[data-modal="close"]');
console.log(modalCloseBtns);

/* モーダルを消す動作 */
modalCloseBtns.forEach(modalCloseBtn => {
    modalCloseBtn.addEventListener('click', function() {
      document.querySelector('[data-modal="bg"]').classList.remove('is-active');
      document.querySelector('[data-modal="inner"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal001"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal002"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal003"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal004"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal005"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal006"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal007"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal008"]').classList.remove('is-active');
      document.querySelector('[data-modal="box-modal009"]').classList.remove('is-active');

    });
  });

//モーダル表示
modal001Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal001"]').classList.add('is-active');
  });
  modal002Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal002"]').classList.add('is-active');
  });
  modal003Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal003"]').classList.add('is-active');
  });
  modal004Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal004"]').classList.add('is-active');
  });
  modal005Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal005"]').classList.add('is-active');
  });
  modal006Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal006"]').classList.add('is-active');
  });
  modal007Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal007"]').classList.add('is-active');
  });
  modal008Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal008"]').classList.add('is-active');
  });
  modal009Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('[data-modal="bg"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="box-modal009"]').classList.add('is-active');
  });







