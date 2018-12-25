var familie = [
    'Far',
    'Niels',
    'Mor',
    'Jens'
  ]
  
  init();
  
  function init() {
    var year = getYear();
    var whoIsUp = getWhoIsUp(year);
    renderView(whoIsUp);
  }
  
  function getYear() {
    var year = new Date().getYear();
    return year;
  }
  
  function getWhoIsUp(year) {
    var whosUp = familie[year % 4]
    return whosUp;
  };
  
  function renderView(whoIsUp) {
    document.getElementById("whoisup").innerHTML = whoIsUp;
  }
  