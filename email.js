function sendMail() {
  var link =
    'mailto:virus_714@yahoo.com' +
    '?cc=' +
    '&subject=' +
    escape(document.getElementById('name2').value) +
    '&body=' +
    escape(document.getElementById('myText').value);
  window.location.href = link;
}
