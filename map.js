var map;
var searchManager;

function initializeMap() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Your Bing Maps Key'
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        searchManager = new Microsoft.Maps.Search.SearchManager(map);

        var searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', function () {
            var searchQuery = document.getElementById('searchQuery').value;
            searchDogParks(searchQuery);
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
