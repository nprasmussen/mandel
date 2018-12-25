var familie = [
    'Far',
    'Niels',
    'Mor',
    'Jens'
  ]
  
  
  window.onload = function() {
    init();
  }

  function init() {
    var year = getYear();
    var whoIsUp = getWhoIsUp(year);
    getNext();
    renderView(whoIsUp);
  }
  
  function getYear() {
    var year = new Date().getFullYear();
    return year;
  }
  
  function getWhoIsUp(year) {
    var whosUp = familie[year % 4]
    return whosUp;
  };
  
  function renderView(whoIsUp) {
    document.getElementById("whoisup").innerHTML = whoIsUp;
  }
  
  function getNext() {
    var list = document.getElementById("next");
    var year = getYear();

    for (var i = 0; i < 3; i++) {
      
      var item = document.createElement("li");
      var nextYear = year + i + 1;
      var textnode = document.createTextNode(nextYear + ': ' + getWhoIsUp(nextYear));  
      item.appendChild(textnode);
      list.appendChild(item);
    }
  }