var apiCall = 'https://api.mercadolibre.com/sites/MLU/search?q=chromecast';

var request = new XMLHttpRequest();

request.open('GET', apiCall, true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
}

request.send();