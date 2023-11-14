// Dog class to represent a dog with temperament and activity level
let availableDogs = [];

// class Dog {
//   constructor(name, temperament, activityLevel) {
//     this.name = name;
//     this.temperament = temperament;
//     this.activityLevel = activityLevel;
//   }
// }

// Function to match dogs based on temperament and activity level
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
    fixed = true,
    femDogs = true,
    maleDogs = true,
    femHumans = true,
    maleHumans = true,
    vax = true,
    special = false,
    service = false,
    breed2 = null,
    city = 'seattle',
    state = 'wa',
    zip = 98101,
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
    this.matchScore = matchScore;
  }

  // Match Score Calculation

  calcMatchScore(userDog) {
    if (this.temperament === userDog.temperament) {
      this.matchScore += 3;
    }
    if (this.activityLevel === userDog.activityLevel) {
      this.matchScore += 2;
    }
    if (difference(this.dogAge, userDog.dogAge) <=2) {
      this.matchScore += 1;
    }
    if (this.dogSize === userDog.dogSize) {
      this.matchScore += 1;
    }
    if (this.fixed === userDog.fixed) {
      this.matchScore += 1;
    }
    console.log(difference(this.dogAge, userDog.dogAge)); 
    return this.matchScore;
  }
}

// availableDogs.sort((a, b) => b.matchScore - a.matchScore);
/*
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2
*/

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

function initDogs() {
  let shuffledDogNames = shuffleArray(dogNames);
  let shuffledDogTemps = shuffleArray(dogTemps);
  let shuffledActivityLevels = shuffleArray(activityLevels);
  let shuffledFavActivities = shuffleArray(favActivities);
  let shuffledDogSizes = shuffleArray(dogSizes);
  let shuffledDogAges = shuffleArray(dogAges);
  let shuffledBreeds = shuffleArray(dogBreeds);
  let shuffledHumans = shuffleArray(humanNames);
  for (let i = 0; i < shuffledDogNames.length; i++) {
    const dogInstance = new AvailableDogs(
      shuffledDogNames[i],
      shuffledDogTemps[i],
      shuffledActivityLevels[i],
      shuffledFavActivities[i],
      shuffledDogSizes[i],
      shuffledDogAges[i],
      shuffledBreeds[i],
      shuffledHumans[i],
      `${shuffledHumans[i]}@gmail.com`
    );
    availableDogs.push(dogInstance);
  }
}

initDogs();

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

//////// USER INPUT COLLECTED FROM FORM ////////////


// STATIC user dog - to be updated with object from Form
const userDog = new AvailableDogs(
  'UserDog',
  'friendly',
  'high',
  'fetch',
  'medium',
  3,
  'Australian Shepherd',
  true
);

console.log(`user dog: ${JSON.stringify(userDog, null, 2)}`);

//////////////////////////////////////////////////////
///////////// MATCH ALGORITHM ////////////////////////
////////////////////////////////////////////////////

for (const dog of availableDogs) {
  dog.calcMatchScore(userDog);
}

function renderMatches() {
  // Sort the availableDogs array by matchScore in descending order
  availableDogs.sort((a, b) => b.matchScore - a.matchScore);

  // Take the top 2 dogs
  const topDogs = availableDogs.slice(0, 2);

  console.log('Top Dogs with the highest matchScore:');
  console.log(topDogs);

  return topDogs;
}
renderMatches();

// Old code
// // Iterate over the availableDogs array
// for (const dog of availableDogs) {
//   // Check if the current dog has a higher matchScore
//   if (dog.matchScore > highScore) {
//     highScore = dog.matchScore;
//   }
// }

// Filter dogs with the highest matchScore
// const topDogs = availableDogs.filter((dog) => dog.matchScore === highScore);
