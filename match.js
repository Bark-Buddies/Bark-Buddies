// Dog class to represent a dog with temperament and activity level
class Dog {
    constructor(name, temperament, activityLevel) {
        this.name = name;
        this.temperament = temperament;
        this.activityLevel = activityLevel;
    }
}

// Function to match dogs based on temperament and activity level
function matchDogs(userDog, availableDogs) {
    // Filter dogs based on temperament and activity level
    const matchedDogs = availableDogs.filter(dog => {
        // You can customize the matching criteria based on your requirements
        const temperamentMatch = dog.temperament === userDog.temperament;
        const activityLevelMatch = dog.activityLevel === userDog.activityLevel;

        return temperamentMatch && activityLevelMatch;
    });

    return matchedDogs;
}

// Static Dogs
const userDog = new Dog('UserDog', 'Friendly', 'High');
const availableDogs = [
    new Dog('Dog1', 'Friendly', 'High'),
    new Dog('Dog2', 'Calm', 'Medium'),
    new Dog('Dog3', 'Friendly', 'Medium'),
    new Dog('Dog4', 'Energetic', 'High'),
];

const matchedDogs = matchDogs(userDog, availableDogs);

console.log('Matched Dogs:', matchedDogs);
