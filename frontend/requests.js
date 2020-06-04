const ul = document.getElementById('ul');

const lead = document.getElementsByClassName('lead');

function createNode(element, name) {
  var code = document.createElement(element);
  code.className = name;
  return code;
}
function append(ul, li) {
  return ul.appendChild(li);
}

fetch('http://localhost:5000/api/comment')
  .then(function (response) {
    // response.json() returns a promise, use the same .then syntax to work with the results
    response.json().then(function (comments) {
      // users is now our actual variable parsed from the json, so we can use it
      comments.forEach(function (comment) {
        let li = createNode('li', 'list-group-item');
        let commentSpan = createNode('span', 'span');
        let nameSpan = createNode('span', 'lead');
        nameSpan.innerHTML = `${comment.name}`;
        commentSpan.innerHTML = `${comment.text}`;
        append(ul, nameSpan);
        append(li, commentSpan);
        append(ul, nameSpan);
        append(ul, li);
      });
    });
  })
  .catch((err) => console.error(err));

function test() {
  let nameComment = document.getElementById('nameComment').value;
  let textComment = document.getElementById('textComment').value;
  const url = 'http://localhost:5000/api/comment/add';
  let data = {
    name: nameComment,
    text: textComment,
  };
  let fetchData = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(url, fetchData).then(function () {
    console.log('Good?');
  });
  window.location.reload();
}
