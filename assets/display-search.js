var param = location.search.split('&')
var term = param[0].split('=')[1]
var format = param[1].split('=')[1]
var baseURL = `https://www.loc.gov/${format}/?q=${term}&fo=json`;
var resultEl = document.querySelector('#result-text')
var resultContainer = document.querySelector('#result-content')


fetch(baseURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    var results = data.results
    appendToPage(results);
})



function appendToPage(data){



for (var i = 0; i < data.length; i++){
var item = data[i];
var row = document.createElement('div');
row.classList.add('row');
var h1 = document.createElement('h1');

h1.textContent = item.title;

var p = document.createElement('p');

p.textContent = item.description[0];

var a = document.createElement('a');

a.href = item.url;
a.target = "_blank";

a.append(h1);
row.append('a');
row.append('p');
 resultContainer.append(row);
}

}