document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect data from the form
        let formData = {
            ownerName: document.getElementById('ownerName').value,
            ownerEmail: document.getElementById('ownerEmail').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            dogName: document.getElementById('dogName').value,
            breed1: document.getElementById('breed1').value,
            breed2: document.getElementById('breed2').value,
            dogAge: document.getElementById('dogAge').value,
            temperament: document.getElementById('temperament').value,
            dogSize: document.getElementById('dogSize').value,
            activityLevelHigh: document.getElementById('activityLevelHigh').querySelector('input').checked,
            activityLevelMed: document.getElementById('activityLevelMed').querySelector('input').checked,
            activityLevelLow: document.getElementById('activityLevelLow').querySelector('input').checked,
            special: document.getElementById('special').value,
            fixedYes: document.getElementById('fixedYes').querySelector('input').checked,
            fixedNo: document.getElementById('fixedNo').querySelector('input').checked,
            activity: document.getElementById('activity').value,
            vaxYes: document.getElementById('vaxYes').querySelector('input').checked,
            vaxNo: document.getElementById('vaxNo').querySelector('input').checked,
            maleDogsYes: document.getElementById('maleDogsYes').querySelector('input').checked,
            maleDogsNo: document.getElementById('maleDogsNo').querySelector('input').checked,
            femDogsYes: document.getElementById('femDogsYes').querySelector('input').checked,
            femDogsNo: document.getElementById('femDogsNo').querySelector('input').checked,
            maleHumansYes: document.getElementById('maleHumansYes').querySelector('input').checked,
            maleHumansNo: document.getElementById('maleHumansNo').querySelector('input').checked,
            femHumansYes: document.getElementById('femHumansYes').querySelector('input').checked,
            femHumansNo: document.getElementById('femHumansNo').querySelector('input').checked,
            serviceYes: document.getElementById('serviceYes').querySelector('input').checked,
            serviceNo: document.getElementById('serviceNo').querySelector('input').checked
        };

        // Log the collected data 
        console.log("Form Data:", formData);

        
    });
});
