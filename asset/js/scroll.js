$(window).on("scroll", function() {
  // Если высота больше 200px 
  // Добавляем классу header класс fixed
    if ($(window).scrollTop() > 150) $('.navi-1').addClass('navi');
  // Иначе удаляем класс fixed
          else $('.navi-1').removeClass('navi');
    });