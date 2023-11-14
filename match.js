// Dog class to represent a dog with temperament and activity level
let availableDogs = [];

class Dog {
  constructor(name, temperament, activityLevel) {
    this.name = name;
    this.temperament = temperament;
    this.activityLevel = activityLevel;
  }
}

// Function to match dogs based on temperament and activity level
class AvailableDogs {
  constructor(name, temperament, activityLevel, matchScore = 0) {
    this.name = name;
    this.temperament = temperament;
    this.activityLevel = activityLevel;
    this.matchScore = matchScore;
  }

  match(userDog) {
    if (this.temperament === userDog.temperament) {
      this.matchScore += 1;
    }
    if (this.activityLevel === userDog.activityLevel) {
      this.matchScore += 1;
    }
    return this.matchScore;
  }
}

let dog1 = new AvailableDogs('Dog1', 'Friendly', 'High');
let dog2 = new AvailableDogs('Dog2', 'Friendly', 'High');
let dog3 = new AvailableDogs('Dog3', 'Friendly', 'Medium');
let dog4 = new AvailableDogs('Dog4', 'Energetic', 'High');
availableDogs.push(dog1, dog2, dog3, dog4);
console.log(availableDogs);

const userDog = new Dog('UserDog', 'Friendly', 'High');

for (const dog of availableDogs) {
  dog.match(userDog);
}

function renderMatches() {
  let highScore = 0; // Set the initial highScore to 0

  // Iterate over the availableDogs array
  for (const dog of availableDogs) {
    // Check if the current dog has a higher matchScore
    if (dog.matchScore > highScore) {
      highScore = dog.matchScore;
    }
  }

  // Filter dogs with the highest matchScore
  const topDogs = availableDogs.filter(dog => dog.matchScore === highScore);

  console.log("Dogs with the highest matchScore:");
  console.log(topDogs);

  return topDogs;
}
renderMatches();
