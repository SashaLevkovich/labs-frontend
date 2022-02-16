$(document).ready(function () {
  const modal = [
    { id: 1, title: 'Прихожая', sq: '5.39m*2' },
    { id: 2, title: 'Холл', sq: '10.98m*2' },
    { id: 3, title: 'Топочная-клодовая', sq: '4.82m*2' },
    { id: 4, title: 'Санузел', sq: '2.78m*2' },
    { id: 5, title: 'Санузел', sq: '5.47m*2' },
    { id: 6, title: 'Кухня-гостинная', sq: '26.83m*2' },
    { id: 7, title: 'Спальня', sq: '19.01m*2' },
    { id: 8, title: 'Спальня', sq: '17.41m*2' },
    { id: 9, title: 'Спальня-кабинет', sq: '12.94m*2' },
    { id: 10, title: 'Терраса', sq: '14.73m*2' },
  ];

  $('.part').hover(function () {
    let id = modal.find((f) => f.id === +$(this).attr('id'));

    const info = $(`
    <div class="info">
      <h1>Информация</h1>
      <h4>Название:</h4>
      <p>${id.title}</p>
      <h4>Площадь:</h4>
      <p>${id.sq}</p>
    </div>
    `);
    $('.wrapper').html(info);

    setTimeout(() => {
      $('.info').fadeIn();
    }, 1000);
  });

  $('.part').mouseleave(function () {
    $('.info').css({ opacity: '0' }).fadeOut(100).remove();
  });
});
