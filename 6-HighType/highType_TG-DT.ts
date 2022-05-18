// highType Type Guards and Differentiating Types
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet()

// error
if (pet.swim) {
  pet.swim()
} else if (pet.fly) {
  pet.fly()
}

// ok
if ((<Fish>pet).swim) {
  <Fish>pet.swim()
} else {
  <Bird>pet.fly()
}
