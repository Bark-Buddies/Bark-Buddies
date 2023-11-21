'use strict';

const availableDogs = []; // Array to store created dogs instances
let topDogs = []; // Array to store top dog matches

////////////////////////////////
//// CREATE DOG DATA //////////
///////////////////////////////
const dogNames = [
  'Torrey',
  'Moulder',
  'Lando',
  'Spot',
  'Teddy',
  'Bear',
  'Griffin',
  'Leia',
  'Jax',
  'Harry',
  'Bella',
  'Max',
  'Charlie',
  'Lucy',
  'Cooper',
  'Leo',
  'Lola',
  'Daisy',
  'Sadie',
  'Milo',
  'Ruby',
  'Oliver',
  'Luna',
  'Tucker',
  'Rosie',
  'Bailey',
  'Chloe',
  'Bear',
  'Molly',
  'Bentley',
  'Stella',
  'Coco',
  'Zeus',
  'Maddie',
  'Duke',
  'Penny',
  'Winston',
  'Zoe',
  'Riley',
  'Lily',
  'Rocky',
  'Lulu',
  'Teddy',
  'Mia',
  'Jackson',
  'Sophie',
  'Gus',
  'Jax',
  'Emma',
  'Oscar',
  'Chico',
  'Piper',
  'Dexter',
  'Gracie',
  'Moose',
  'Harley',
  'Lily',
  'Duke',
  'Koda',
  'Ziggy',
  'Hazel',
  'Rusty',
  'Mochi',
  'George',
  'Mia',
  'Louie',
  'Zara',
  'Rocco',
  'Nala',
  'Molly',
  'Cody',
  'Abby',
  'Leo',
  'Lola',
  'Charlie',
  'Roxy',
  'Hunter',
  'Izzy',
  'Rudy',
  'Sasha',
  'Marley',
  'Zeke',
  'Coco',
  'Apollo',
  'Belle',
  'Baxter',
  'Ella',
  'Winnie',
  'Simba',
  'Zara',
];

const dogTemps = [
  'energetic',
  'calm',
  'protective',
  'independent',
  'shy',
  'affectionate',
  'dominant',
  'outgoing',
];

const activityLevels = ['high', 'med', 'low'];

const favActivities = ['fetch', 'chase', 'swimming', 'hiking', 'snow sports'];

const dogSizes = ['giant', 'large', 'med', 'small'];

const dogAges = [1, 2, 3, 4, 5, 6];

const dogBreeds = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'French Bulldog',
  'Bulldog',
  'Poodle',
  'Beagle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Dachshund',
  'Boxer',
  'Shih Tzu',
  'Siberian Husky',
  'Great Dane',
  'Doberman Pinscher',
  'Cavalier King Charles Spaniel',
  'Australian Shepherd',
  'Shetland Sheepdog',
  'Border Collie',
];

const humanNames = [
  'Emily',
  'Liam',
  'Olivia',
  'Noah',
  'Emma',
  'Ava',
  'Sophia',
  'Jackson',
  'Isabella',
  'Lucas',
  'Aiden',
  'Mia',
  'Ethan',
  'Amelia',
  'Harper',
  'Benjamin',
  'Evelyn',
  'Oliver',
  'Abigail',
  'Ella',
  'Michael',
  'Grace',
  'James',
  'Charlotte',
  'David',
  'Scarlett',
  'Mason',
  'Aria',
  'Lily',
];

// Create a myLocation variable
var zip = [
  // Seattle, WA
  '98101',
  '98102',
  '98103',
  '98104',
  '98105',
  '98106',
  '98107',
  '98108',
  '98109',
  '98112',

  // Bothell, WA
  '98011',
  '98012',
  '98021',

  // Redmond, WA
  '98052',
  '98053',

  // Trinity, TX
  '75862',
  '77360',
  '75851',
  '75845',
  '75847',
  '75926',
  '75856',
  '75834',
  '75865',

  // Coronado, CA
  '92118',
  '92155',
  '92178',
];
// Access and manipulate the zipCodes property

var city = ['Seattle', 'Bothell', 'Redmond', 'Trinity', 'Coronado'];

class UserDog {
  constructor({
    ownerName,
    ownerEmail,
    city,
    state,
    zip,
    dogName,
    breed1,
    breed2,
    dogAge,
    temperament,
    dogSize,
    activityLevel,
    special,
    fixed,
    favActivity,
    vax,
    maleDogs,
    femDogs,
    maleHumans,
    femHumans,
    service,
  }) {
    this.ownerName = ownerName || 'test';
    this.ownerEmail = ownerEmail || 'test@test.com';
    this.city = city || 'Seattle';
    this.state = state || 'WA';
    this.zip = zip || '98101';
    this.dogName = dogName || 'Torrey';
    this.breed1 = breed1;
    this.breed2 = breed2;
    this.dogAge = dogAge || 2;
    this.temperament = temperament || 'energetic';
    this.dogSize = dogSize || 'med';
    this.activityLevel = activityLevel || 'high';
    this.special = special;
    this.fixed = fixed || true;
    this.favActivity = favActivity || 'chase';
    this.vax = vax || true;
    this.maleDogs = maleDogs || true;
    this.femDogs = femDogs || true;
    this.maleHumans = maleHumans || false;
    this.femHumans = femHumans || false;
    this.service = service;
  }
}

// EXISTING DOGS
class AvailableDogs {
  constructor(
    dogName,
    temperament,
    activityLevel,
    favActivity,
    dogSize,
    dogAge,
    breed1,
    ownerName,
    ownerEmail,
    fixed,
    femDogs,
    maleDogs,
    femHumans,
    maleHumans,
    city,
    zip,
    vax,
    special = false,
    service = false,
    breed2 = null,
    state,
    ageDiff = 0,
    matchScore = 0
  ) {
    this.dogName = dogName;
    this.temperament = temperament;
    this.activityLevel = activityLevel;
    this.ownerName = ownerName;
    this.ownerEmail = ownerEmail;
    this.breed1 = breed1;
    this.breed2 = breed2;
    this.dogAge = dogAge;
    this.dogSize = dogSize;
    this.fixed = fixed;
    this.favActivity = favActivity;
    this.service = service;
    this.femDogs = femDogs;
    this.maleDogs = maleDogs;
    this.femHumans = femHumans;
    this.maleHumans = maleHumans;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.vax = vax;
    this.special = special;
    this.ageDiff = ageDiff;
    this.matchScore = matchScore;
  }

  // Match Score Calculation
  calcMatchScore(userDog) {
    if (
      this.city.toLowerCase() === userDog.city.toLowerCase() ||
      this.zip === userDog.zip
    ) {
      if (this.temperament === userDog.temperament) {
        this.matchScore += 5;
      }
      if (this.activityLevel === userDog.activityLevel) {
        this.matchScore += 4;
      }
      const ageDiff = difference(this.dogAge, userDog.dogAge);
      this.ageDiff = ageDiff;
      if (ageDiff <= 3) {
        this.matchScore += 2;
      }
      if (this.dogSize === userDog.dogSize) {
        this.matchScore += 3;
      }
      if (this.fixed === userDog.fixed) {
        this.matchScore += 1;
      }
      if (
        this.femDogs === userDog.femDogs ||
        this.maleDogs === userDog.maleDogs
      ) {
        this.matchScore += 2;
      }
      if (
        this.femHumans === userDog.femHumans ||
        this.maleHumans === userDog.maleHumans
      ) {
        this.matchScore += 2;
      }
    } else {
      return;
    }
  }
}
//////HELPER FUNCTIONS////////

// randomize array
// Fisher Yates function via chatGPT
function shuffleArray(array) {
  const shuffledArray = [...array]; // Create a copy of the array to avoid modifying the original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function difference(a, b) {
  return Math.abs(a - b);
}

const randomBoolean = () => Math.random() >= 0.5; // 50% probability of getting true

// EXISTING DOG DATA CREATION //////

function initDogs() {
  let shuffledDogNames = shuffleArray(dogNames);
  let shuffledDogTemps = shuffleArray(dogTemps);
  let shuffledActivityLevels = shuffleArray(activityLevels);
  let shuffledFavActivities = shuffleArray(favActivities);
  let shuffledDogSizes = shuffleArray(dogSizes);
  let shuffledDogAges = shuffleArray(dogAges);
  let shuffledBreeds = shuffleArray(dogBreeds);
  let shuffledHumans = shuffleArray(humanNames);
  let shuffledCity = shuffleArray(city);
  let shuffledZip = shuffleArray(zip);

  // Calculate the maximum length of arrays
  const maxLength = Math.max(
    shuffledDogNames.length,
    shuffledDogTemps.length,
    shuffledActivityLevels.length,
    shuffledFavActivities.length,
    shuffledDogSizes.length,
    shuffledDogAges.length,
    shuffledBreeds.length,
    shuffledHumans.length,
    shuffledCity.length,
    shuffledZip.length
  );

  /* modulo operator (%) is used to cycle through the arrays. This way, even if one array runs out of elements, it will start again from the beginning of that array */

  for (let i = 0; i < maxLength; i++) {
    const dogInstance = new AvailableDogs(
      shuffledDogNames[i % shuffledDogNames.length],
      shuffledDogTemps[i % shuffledDogTemps.length],
      shuffledActivityLevels[i % shuffledActivityLevels.length],
      shuffledFavActivities[i % shuffledFavActivities.length],
      shuffledDogSizes[i % shuffledDogSizes.length],
      shuffledDogAges[i % shuffledDogAges.length],
      shuffledBreeds[i % shuffledBreeds.length],
      shuffledHumans[i % shuffledHumans.length],
      `${shuffledHumans[i % shuffledHumans.length]}@gmail.com`,
      randomBoolean(), // fixed
      randomBoolean(), // femDogs
      randomBoolean(), // maleDogs
      randomBoolean(), // femHumans
      randomBoolean(), // maleHumans
      shuffledCity[i % shuffledCity.length],
      shuffledZip[i % shuffledZip.length],
      randomBoolean() // vax
    );
    availableDogs.push(dogInstance);
  }
}

initDogs();

/// USER INPUT HANDLING //////////////

let form = document.querySelector('form');
let formData = {};
let tableRendered = false;

form?.addEventListener('submit', function (event) {
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
    maleDogs: document.getElementById('maleDogs').querySelector('input')
      .checked,
    femDogs: document.getElementById('femDogs').querySelector('input').checked,
    maleHumans: document.getElementById('maleHumans').querySelector('input')
      .checked,
    femHumans: document.getElementById('femHumans').querySelector('input')
      .checked,
    service: document.getElementById('service').querySelector('input').checked,
  };

  // create newDog from user input in form
  const newDog = new UserDog(formData);

  // Calculate match scores for each AvailableDogs instance
  for (const dog of availableDogs) {
    dog.calcMatchScore(newDog);
  }

  // Render top matches after calculating match scores
  topDogs = renderMatches();

  // save top 2 dogs to local storage
  saveTopDogs(topDogs);

  // push newDog to availableDogs array and add to local storage
  availableDogs.push(newDog);
  saveAllDogs(availableDogs);

  // Check if the table has not been rendered yet
  if (!tableRendered) {
    renderOnScreen(topDogs); // Render the table only if it hasn't been rendered before
    tableRendered = true; // Set the flag to true after rendering the table
  }

  // Change the header text when the table is rendered
  document.getElementById(
    'mainHeader'
  ).textContent = `Here are your dog's Buddies!`;
});

function renderOnScreen() {
  renderHeader();
  renderTableData(topDogs);
}

////// RENDER TABLE /////////////////////////////////
function renderTableData(topDogs) {
  // add tbody element
  const tableBodyElem = document.createElement('tbody');
  tableElem.appendChild(tableBodyElem);

  // for each match need <tbody> , <tr>, <td> hierarchy
  let matchNum = 1;
  for (let i = 0; i < topDogs.length; i++) {
    // add data row
    const dataRow = document.createElement('tr');
    tableBodyElem.appendChild(dataRow);

    // add <td> for match number
    dataRow.appendChild(createTableCell('Match ' + matchNum));
    matchNum++; // increment match number for each topDog

    dataRow.appendChild(createTableCell(topDogs[i].ownerName));
    dataRow.appendChild(createTableCell(topDogs[i].dogName));
    dataRow.appendChild(createTableCell(topDogs[i].breed1));
    dataRow.appendChild(createTableCell(topDogs[i].dogAge));
    dataRow.appendChild(createTableCell(topDogs[i].dogSize));
    dataRow.appendChild(createTableCell(topDogs[i].activityLevel));
    dataRow.appendChild(createTableCell(topDogs[i].favActivity));
    const buttonCell = createContactButton(topDogs[i].ownerEmail);
    dataRow.appendChild(buttonCell);
  }
}

function createTableCell(content) {
  const cell = document.createElement('td');
  cell.textContent = content;
  return cell;
}

function createContactButton(emailAddress) {
  const button = document.createElement('button');
  button.textContent = 'Contact Me!';
  // dataRow.appendChild(button);
  button.classList.add('matchButton');

  // create contact cell <td> element and append
  const ownerContactCell = document.createElement('td');
  ownerContactCell.appendChild(button);

  button.addEventListener('click', function () {
    window.location.href = 'mailto:' + emailAddress;
  });

  return ownerContactCell;
}

// global reference to container referenced by DOM
const articleElem = document.createElement('article');
const dogContainerElem = document.getElementById('dogMatches');
const tableElem = document.createElement('table'); // create table at container
dogContainerElem.appendChild(tableElem);

// add article element and append to container IF the location container "dogMatches ContainerElement" exists in the HTML
if (dogContainerElem) {
  dogContainerElem.appendChild(articleElem);
  articleElem.classList.add('profile-table');
  // initiate the table and append to the article
  articleElem.appendChild(tableElem);
}

function renderHeader() {
  // add table head
  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  // add header Row
  const headerRow = document.createElement('tr');
  tableHeadElem.appendChild(headerRow);

  const matchHeadingCell = document.createElement('th');
  headerRow.appendChild(matchHeadingCell);
  matchHeadingCell.textContent = 'Match #';

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

//////////////////////////////////////////////////////
///////////// MATCH ALGORITHM ////////////////////////
////////////////////////////////////////////////////

function renderMatches() {
  // Sort the availableDogs array by matchScore in descending order
  availableDogs.sort((a, b) => b.matchScore - a.matchScore);

  // Take the top 2 dogs
  const topDogs = availableDogs.slice(0, 2);

  return topDogs;
}

//////////////////////////////////////////////////////
///////////// LOCAL STORAGE ////////////////////////
////////////////////////////////////////////////////

const matchKey = 'matchKey';
const allDogsKey = 'allDogsKey';

function saveTopDogs(topDogs) {
  const matchStorageText = JSON.stringify(topDogs); // convert array to string
  localStorage.setItem(matchKey, matchStorageText); // set value
}

function saveAllDogs(availableDogs) {
  const allDogsStorageText = JSON.stringify(availableDogs); // convert array to string
  localStorage.setItem(allDogsKey, allDogsStorageText); // set value
}
