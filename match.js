// Dog class to represent a dog with temperament and activity level
const availableDogs = []; // Array to store created dogs instances
const newUserDogs = []; // Array to store UserDog instances
const matchedDogsArray = [];
// let topDogs = [];
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
    this.ownerName = ownerName || "test";
    this.ownerEmail = ownerEmail || "test@test.com";
    this.city = city || "Seattle";
    this.state = state || "WA";
    this.zip = zip || "98101";
    this.dogName = dogName || "Torrey";
    this.breed1 = breed1;
    this.breed2 = breed2;
    this.dogAge = dogAge || 2;
    this.temperament = temperament || "energetic";
    this.dogSize = dogSize || "med";
    this.activityLevel = activityLevel ||"high";
    this.special = special;
    this.fixed = fixed || true;
    this.favActivity = favActivity || "chase";
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
    vax,
    special = false,
    service = false,
    breed2 = null,
    city = 'Seattle',
    state = 'WA',
    zip = 98101,
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
    this.special = special;
    this.fixed = fixed;
    this.favActivity = favActivity;
    this.vax = vax;
    this.service = service;
    this.femDogs = femDogs;
    this.maleDogs = maleDogs;
    this.femHumans = femHumans;
    this.maleHumans = maleHumans;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.ageDiff = ageDiff;
    this.matchScore = matchScore;
  }

  // Match Score Calculation
  calcMatchScore(userDog) {
    console.log('Matching', this.dogName, 'with', userDog.dogName);
    if (this.city === userDog.city || this.zip === userDog.zip) {
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
      if (this.matchScore > 0) {
        // Push the dogs with a match score over 15 to a specific array
        matchedDogsArray.push({
          [this.dogName]: this,

          matchScore: this.matchScore,
        });
      }
      console.log('Matched Dogs Array:', matchedDogsArray);

      return this.matchScore;
    } else {
      console.log('no match available in your area');
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
  // let randomFixed = randomBoolean();
  // let randomFemDogs = randomBoolean();
  // let randomMaleDogs = randomBoolean();
  // let randomFemHumans = randomBoolean();
  // let randomMaleHumans = randomBoolean();
  // let randomVax = randomBoolean();

  // Calculate the maximum length of arrays
  const maxLength = Math.max(
    shuffledDogNames.length,
    shuffledDogTemps.length,
    shuffledActivityLevels.length,
    shuffledFavActivities.length,
    shuffledDogSizes.length,
    shuffledDogAges.length,
    shuffledBreeds.length,
    shuffledHumans.length
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
      randomBoolean() // vax
    );
    availableDogs.push(dogInstance);
  }
}

initDogs();

/// USER INPUT HANDLING //////////////

let form = document.querySelector('form');
let formData = {};

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
  // console.log('Form Data:', formData);
  const newDog = new UserDog(formData);
  newUserDogs.push(newDog);

  // Calculate match scores for each AvailableDogs instance
  for (const dog of availableDogs) {
    dog.calcMatchScore(newDog);
  }

  // Render matches after calculating match scores
  topDogs = renderMatches();
  saveTopDogs();
  // loadTopDogs();
  renderOnScreen(topDogs);
});

function renderOnScreen(topDogsData) {
console.log(topDogsData);
for (let dogObj of topDogsData) {
  let dogName = Object.keys(dogObj)[0];
  console.log(dogObj[dogName].ownerName);
}
}

// function parseStorage(storageText) {
//   // restore from storage
//   const storedUserObjects = JSON.parse(storageText);

//   console.log(storedUserObjects);
//   for (let userObject of storedUserObjects) {
//     let dogName = Object.keys(userObject)[0];
//     console.log(userObject[dogName].ownerName);
//     const currentUser = new UserDog(
//       userObject[dogName].ownerName,
//       userObject[dogName].ownerEmail,
//       userObject[dogName].city
//     );
//     matchedDogsArray.push(currentUser);
//   }
//   console.log("STORED MATCHED DOGS ARRAY:", matchedDogsArray);  
//////////////////////////////////////////////////////
///////////// MATCH ALGORITHM ////////////////////////
////////////////////////////////////////////////////

function renderMatches() {
  // Sort the availableDogs array by matchScore in descending order
  matchedDogsArray.sort((a, b) => b.matchScore - a.matchScore);

  // Take the top 2 dogs
  const topDogs = matchedDogsArray.slice(0, 2);

  console.log('Top Dogs with the highest matchScore:', topDogs);
  // console.log(availableDogs);

  // Log matchedDogsArray
  console.log(topDogs);
  return topDogs;
}
renderMatches();

//////////////////////////////////////////////////////
///////////// LOCAL STORAGE ////////////////////////
////////////////////////////////////////////////////

const userStorageKey = 'userKey';
const matchKey = 'matchKey';

// function saveNewUsers() {
//   const userStorageText = JSON.stringify(newUserDogs); // convert array to string
//   localStorage.setItem(userStorageKey, userStorageText); // set value
// }

function saveTopDogs() {
  // const topDogs = renderMatches();
  const matchStorageText = JSON.stringify(topDogs); // convert array to string
  localStorage.setItem(matchKey, matchStorageText); // set value
}

// function parseStorage(storageText) {
//   // restore from storage
//   const storedUserObjects = JSON.parse(storageText);

//   console.log(storedUserObjects);
//   for (let userObject of storedUserObjects) {
//     let dogName = Object.keys(userObject)[0];
//     console.log(userObject[dogName].ownerName);
//     const currentUser = new UserDog(
//       userObject[dogName].ownerName,
//       userObject[dogName].ownerEmail,
//       userObject[dogName].city
//     );
//     matchedDogsArray.push(currentUser);
//   }
//   console.log("STORED MATCHED DOGS ARRAY:", matchedDogsArray);  
  
// }

// function loadTopDogs() {
//   const matchStorageText = localStorage.getItem(matchKey);
//   console.log('MATCH STORAGE TEXT: ', matchStorageText);
//   if (matchStorageText) {
//     parseStorage(matchStorageText);
//   } else {
//     console.log('no stored match data');
//   }
// }

// console.log(topDogs);

// function loadUsers() {
//   const userStorageText = localStorage.getItem(userStorageKey); // access stored user data stored in the saveNewUsers() function
//   console.log(userStorageText);
//   if (userStorageText) {
//     parseStorage(userStorageText); // if there is stored user data, access it and parse it, if not init
//   } else {
//     console.log('no stored user data');
//   }
// }

// loadTopDogs();
// loadUsers();

// STATIC user dog - to be updated with object from Form
// const userDog = new UserDog(
//   'UserDog',
//   'friendly',
//   'high',
//   'fetch',
//   'medium',
//   7,
//   'Australian Shepherd',
//   true
// );

// console.log(`user dog: ${JSON.stringify(userDog, null, 2)}`);
