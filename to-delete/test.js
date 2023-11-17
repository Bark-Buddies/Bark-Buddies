import UserDog from './match.js';
// console.log(UserDog);
const dogInstance = new UserDog('Buddy', 'friendly');
console.log(dogInstance);


// create container for dogOne id //
let dogOneContainerElement = document.getElementById('dogOne');

let tableElem = document.createElement('table'); // create table at container
dogOneContainerElement.appendChild(tableElem);

function renderHeader() { 
  // add header row
  const headerRow = document.createElement('th');
  tableElem.appendChild(headerRow);

  // add header cells
  const ownerNameHeaderCell = document.createElement('th');
  headerRow.appendChild(ownerNameHeaderCell);
  ownerNameHeaderCell.textContent = 'Owner Name';

  const dogNameHeaderCell = document.createElement('th');
    headerRow.appendChild(dogNameHeaderCell);
    dogNameHeaderCell.textContent = 'Dog Name';

  const dogBreedHeaderCell = document.createElement('th');
    headerRow.appendChild(dogBreedHeaderCell);
    dogBreedHeaderCell.textContent = 'Dog Breed';

  const dogAgeHeaderCell = document.createElement('th');
    headerRow.appendChild(dogAgeHeaderCell);
    dogAgeHeaderCell.textContent = 'Dog Age';

  const dogSizeHeaderCell = document.createElement('th');
    headerRow.appendChild(dogSizeHeaderCell);
    dogSizeHeaderCell.textContent = 'Breed Size';

  const activityLevelHeaderCell = document.createElement('th');
    headerRow.appendChild(activityLevelHeaderCell);
    activityLevelHeaderCell.textContent = 'Activity Level';

  const favActivityHeaderCell = document.createElement('th');
    headerRow.appendChild(favActivityHeaderCell);
    favActivityHeaderCell.textContent = 'Favorite Activity';

  const ownerContactHeaderCell = document.createElement('th');
    headerRow.appendChild(ownerContactHeaderCell);
    ownerContactHeaderCell.textContent = 'Owner Contact';
}

const ownerRow = document.createElement('tr');
tableElem.appendChild(ownerRow);

let ownerNameHeaderCell = document.createElement('td');
ownerRow.appendChild(ownerNameHeaderCell);
ownerNameHeaderCell.textContent = dog1Array[0].ownerName;