
$(document).ready(function () {

  function startTyping(text, speed = 120) {
    const $output = $('#typedText');
    const $cursor = $('.cursor');
    $output.text(''); // очистка текста
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        $output.append(text[i]);
        i++;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  }
  function removeAll() {
    $('.found-img').animate({'margin-top':'-100%'}, 50);
    $('.search-place').addClass('rem');
    $('.type').animate({'left':'-100%'}, 50);
    $('.type-2').animate({'right':'-100%'}, 50);
  }
  function showGreeting() {
    $('.greeting').animate({'bottom':'0%'});
    setTimeout(() => {
    // Показать первую
    $('.greet-name').css({'display':'block'}, 2000).addClass('show');

    setTimeout(() => {
        // Удалить первую
        $('.greet-name').removeClass('show').addClass('remove');
    }, 2000);

    setTimeout(() => {
        // Показать вторую
        $('.greet-2').show().addClass('show');
    }, 3000);

    setTimeout(() => {
        // Удалить вторую
        $('.greet-2').removeClass('show').addClass('remove');
    }, 5000);

    setTimeout(() => {
        $('.greet-3').show().addClass('show');
    }, 6000);

    }, 500);
  }

  // ▶ Запуск по клику
  $('.start-button').on('click', function () {
    $(this).css({
        'border':'2.5px solid black',
    });
    setTimeout(() => {
        $(this).addClass('hidden');
        startTyping("Best Web Dev who likes to code");
        setTimeout(() => {
            removeAll();
        }, 5000)
    }, 500);
    setTimeout(() => {
        showGreeting();
    }, 5800);
  });
});
