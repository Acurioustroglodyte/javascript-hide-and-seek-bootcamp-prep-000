function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
var rankedLi = document.getElementById('app').querySelectorAll('.ranked-list li');

  for (let i = 0; i < rankedLi.length; i++)
  rankedLi[i].innerHTML =  (parseInt(rankedLi[i].innerHTML) + n).toString();
}

function deepestChild() {
  var grand = document.querySelectorAll('#grand-node');
  var deepest = "";
  
  while (grand.querySelector('* > *')) {
    grand = grand.querySelector('* > *');
  }
  
  return grand;
}