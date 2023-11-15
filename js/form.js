document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('form');
    let formData = {};

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect data from the form
        formData = {
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
            activityLevel: document.getElementById('activityLevel').value,
            special: document.getElementById('special').value,
            fixed: document.getElementById('fixed').querySelector('input').checked,
            favActivity: document.getElementById('favActivity').value,
            vax: document.getElementById('vax').querySelector('input').checked,
            maleDogs: document.getElementById('maleDogs').querySelector('input').checked,
            femDogs: document.getElementById('femDogs').querySelector('input').checked,
            maleHumans: document.getElementById('maleHumans').querySelector('input').checked,
            femHumans: document.getElementById('femHumans').querySelector('input').checked,
            service: document.getElementById('service').querySelector('input').checked,

        };
      
        console.log("Form Data:", formData);
    });
});
//  // Log the collected data 
//  console.log("Form Outside Function:", formData);

//  export default formData;