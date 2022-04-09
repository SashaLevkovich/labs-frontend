const btn = document.getElementById('btn');

btn.onclick = (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const word = document.querySelector('#word').value;

  let data = [{ email: email }, { password: password }, { word: word }];
  let dataJson = JSON.stringify(data);

  setCookie('dataJson', dataJson, { 'max-age': 3600 });
};

const secBtn = document.getElementById('secBtn');

secBtn.onclick = (e) => {
  e.preventDefault();
  const secEmail = document.querySelector('#secEmail').value;
  const secPassword = document.querySelector('#secPassword').value;
  const secWord = document.querySelector('#secWord');

  let cook = getCookie('dataJson');

  cook = JSON.parse(cook);

  let arr = [];

  cook.forEach(function (item) {
    if (typeof item === 'object') {
      let keys = Object.keys(item);
      keys.forEach((key) => {
        arr.push(item[key]);
      });
    }
  });

  if (arr[0] == secEmail) {
    if (arr[1] == secPassword) {
      secWord.innerHTML = arr[2];
    }
  }
};

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = name + '=' + value;

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}

var today = new Date();
var Data = today.getMonth();

function season() {
  name = prompt('What is your name?', '');
  Cookies.set('name', name, { expires: 2 });
  alert('Hello ' + Cookies.get('name'));
  nextSeason(Data);
  console.log(Data);
}

function nextSeason(Data) {
  var doing = document.getElementById('doList');
  switch (Data) {
    case 11:
    case 0:
    case 1:
      doing.innerHTML = '<p>Зима! Поездка в горы не ждет.</p><img src="1.jpg">';
      break;
    case 2:
    case 3:
    case 4:
      doing.innerHTML = '<p>Весна! Вперед путешествовать.</p><img src="3.jpg">';
      break;
    case 5:
    case 6:
    case 7:
      doing.innerHTML = '<p>Лето! Море, солнце.</p><img src="2.jpg">';
      break;
    case 8:
    case 9:
    case 10:
      doing.innerHTML = '<p>Осень! По чашечке кофе?.</p><img src="4.jpg">';
  }
}

function repeat() {
  Data += 3;
  nextSeason(Data);
}
