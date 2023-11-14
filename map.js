var map;
var searchManager;
let searchQuery;

function initializeMap() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AoIET44uo4OzRCxd-bqCey7QNLQzYLVdBx3sd5_44saPh2D7QbWSu55PUS5yxc8q'
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        searchManager = new Microsoft.Maps.Search.SearchManager(map);

        var searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', function () {
            searchQuery = document.getElementById('searchQuery').value;
            searchDogParks();
        });
    });
}

function searchDogParks(query) {
    // Ensure searchManager is defined
    if (searchManager) {
        var requestOptions = {
            bounds: map.getBounds(),
            where: query,
            callback: function (results) {
                displayDogParks(results);
            }
        };

        searchManager.search(requestOptions);
    } else {
        // Retry search after a delay (e.g., 500ms)
        setTimeout(function () {
            searchDogParks(query);
        }, 500);
    }
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
