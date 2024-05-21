let fruits = ["Apple" , " Banana" , " Orange" , "Mango"]
console.log(fruits[1])
fruits.push("Grapes")
fruits.pop()
let person = { 
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: [ "Reading" , "Travelling"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(person.firstName);
console.log(person.address.city);
person.age = 31;
person.hobbies.push("cooking");


for(let i=0; i< 5; i++){
    console.log(i);
}
for(let i= 0; i< fruits.length; i++) {
    console.log(fruits[i])
}
let x= 10;
if(x>5) {
    let y = [ "bye"]
    
    console.log(y)
} else
{console.log("no")}

let age = 25;
if(age>=18) {
    if (age< 21) {
        console.log("You are an adult but not yet allowed to drink.");

    } else {
        console.log("You are an adult an allowed to drink.")
    } }
    else {
        console.log("You are a minor.")
    }

    let ggggg = document.getElementById('name')
    console.log(ggggg)
    let picture = document.getElementsByClassName('headWrapper')
    console.log(picture)

    ggggg.innerHTML= 'ep'

    function changeeye(){
    let changeeye = document.getElementById('eye')
    let newImagesource = 'images/line.jpg'
    changeeye.setAttribute('src',newImagesource)
}
function additalic(){
    let rr = document.getElementById('text2')
    rr.classList.add('italic')
}

let rr = document.getElementById('text2')

function createNewDiv(){
    let newDiv = document.createElement('div')
    newDiv.classList.add('newDiv')
    newDiv.textContent = 'elif'

    document.body.appendChild(newDiv)
}