'use strict';

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
  
  // Intersection Observer
  
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };
  
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  $(function() {
    // スムーススクロール
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function() {
      // リンクを取得
      let href= $(this).attr("href");
      // ジャンプ先のid名をセット
      let target = $(href == "#" || href == "" ? 'html' : href);
      // topからジャンプ先の要素までを取得
      let position = target.offset().top;
      // animateでスムーススクロール
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    // ---------------------------------------
    // topに戻る
    let pagetop = $('#to-top');
    // 最初に画面が表示されたときは、トップに戻るボタンを非表示に設定
    pagetop.hide();

    // スクロールイベント
    $(window).scroll(function() {
      // スクロールの位置が700pxを超えた場合
      if ($(this).scrollTop() > 700) {
        // トップに戻るボタンを表示
        pagetop.fadeIn();

        // スクロールが700px未満の場合
      } else {
        // トップに戻るボタンを非表示
        pagetop.fadeOut();
      }
    });

    // クリックイベント
    pagetop.click(function() {
      $('body,html').animate({scrollTop: 0}, 500);

      // イベントが伝播しないための記述
      return false;
    });
  });
}
