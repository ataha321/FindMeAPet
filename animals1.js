const allDogs = [
    {
        dogName: "Aunt Miller",
        breed: "Terrier, Staffordshire Bull/Mix",
        age: 6
    },
    {
        dogName: "Avocado",
        breed: "Terrier, American Staffordshire/Retriever, Labradorusky",
        age: 2
    },
    {
        dogName: "Barkley",
        breed: "Retriever/Mix",
        age: 5
    },
    {
        dogName: "Benji",
        breed: "Retriever, Labrador/Chow Chow",
        age: 6
    },
    {
        dogName: "Bosko",
        breed: "Terrier Mix",
        age: 1
    },
    {
        dogName: "Brandi",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Briggs",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Brutus",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Buddy Bruster",
        breed: "Shepherd/Mix",
        age: 2
    },
    {
        dogName: "LucyCalliope",
        breed: "Terrier, American Pit Bull/Mix",
        age: 1
    }
];

const dogImgs = [
    "millie.jpg",
    "Avocado.jpg",
    "Barkley.jpg",
    "Benji.jpg",
    "Bosko.jpg",
    "Brandi.jpg",
    "Briggs.jpg",
    "Brutus.jpg",
    "Buddy.jpg",
    "Calliope.jpg",

];

function findDogs() {
    let selectedDogs = [];
    let  minAge = document.querySelector("#dogAge");

    let petAge = minAge.value;

    petAge= parseInt(petAge)

    allDogs.forEach((dog) => {
        if (dog.age >= petAge) {
            selectedDogs.push(dog);
        }
    });

    let dogList = document.querySelector(".selectedDog");
    dogList.innerHTML = "";

    let dogImg = document.querySelector(".selectedDog");
    

    selectedDogs.forEach((dog, index) => {
            let list = document.createElement("li");
            console.log(list);
            list.innerHTML = `Name: ${dog.dogName}.<br> Breed: ${dog.breed}. <br> Age: ${dog.age} years old. <br><br>`;
            dogList.appendChild(list);

            let dogPic = document.createElement("img");
            dogPic.src = dogImgs[index];
            dogImg.appendChild(dogPic);

            console.log(dogList);
            console.log(dogImg);
        
    });   
} 