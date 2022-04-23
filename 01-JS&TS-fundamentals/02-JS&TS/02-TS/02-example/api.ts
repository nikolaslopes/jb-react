const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/nikolaslopes');
xhr.send(null);

export const myPromise = function () {
  return new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          console.log(`The request code is ${xhr.status}`);
        } else {
          reject('Failed');
        }
      }
    }
  })
}
