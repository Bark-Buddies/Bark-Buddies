var map;
var searchManager;


function initializeMap() {
    map = new Microsoft.Maps.Map('#map', {
        credentials: 'YAnpJZ-2lFGLVVyCyHWkIFWo1vrj_AkLEI3aonyWTcH-0RAk-I37Nr91X-6hIiuUr'
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        searchManager = new Microsoft.Maps.Search.SearchManager(map);

        var searchForm = document.getElementById('searchForm');
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            searchDogParks();
        });
    });
}

function searchDogParks() {
    var location = document.getElementById('location').value;

    var requestOptions = {
        bounds: map.getBounds(),
        where: location,
        callback: function (results) {
            displayDogParks(results);
        }
    };

    searchManager.search(requestOptions);
}

function displayDogParks(results) {
    map.entities.clear();

    if (results && results.length > 0) {
        var location = results[0].location;
        var pin = new Microsoft.Maps.Pushpin(location);
        map.entities.push(pin);
        map.setView({ center: location, zoom: 12 });
    } else {
        alert('No dog parks found.');
    }
}

// Initialize the map when the page loads.
initializeMap();
