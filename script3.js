// let name = 'rian'

// function hash(name) {
//     return name.charAt(0);
// }

// console.log(hash(name))

// console.log(name)


// console.log(combinedStreetandBlock18)


// let form = document.querySelector('form')


// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e){

//     console.log(e)

//     e.preventDefault();

//     console.log(form)


//     const formData = new FormData(form)

//     console.log(formData)

// }

// function hash(string){

//     console.log(string.charCodeAt(0))
//     return string.charCodeAt(0)
// }


// hash('a')

//objects 

function Fuckboi(name, job) {
    this.name = name;
    this.job = job

}

const brandon = new Fuckboi('brandon', 'copywriter')

console.log(brandon.job)

//object constructor 

function Book(title, author, numOfPages) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages

}

const lotr = new Book('Lord of the Rings', 'Tolkien', 23)

Book.prototype.info = function () {
    console.log(`${this.title} is written by ${this.author} and has ${this.numOfPages} pages`)

}

lotr.info()

