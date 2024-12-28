// function factorial(n){

//     console.log('in recursion' + n )

//     if (n === 1) {
//         return 1
//     } 


//     else {

//         return n * factorial(n-1)
//     } 
// }

// console.log(factorial(5))

// function itFactorial(n){

//     let answer = 1 

//     while (n>0){

//         answer *= n ;

//         n--

//     }

//     return answer

// }

// console.log(itFactorial(5))


// function countDown(num){

//     console.log(num)

//     if (num === 0){
//         return 
//     } 

//     else {

//         countDown(num-1)


// }

// }

// countDown(5)

// function fibs(num){
//     let arr = [0,1]

//     let elToAdd = arr()

// }



// function fibs(num){
//     for (let i=0; i<num; i++){
//         if (i> 2){
//             num = 

//         }

//         else arr.push(i)
//     }
// }


// function fibonacci(n){
//     if (n<2){
//         return n 
//     }
//     else return (fibonacci(n-1)+fibonacci(n-2))
// }

// console.log(fibonacci(5))

//make fibonacci generator 

// let arr = []

// function fibs(number) {

//     let n = 0

//     while (n < number) {

//         console.log('in while')

//         if (n < 2) {
//             arr.push(n)
//         }

//         else {
//             let sumNum = arr[arr.length - 1] + arr[arr.length - 2]
//             arr.push(sumNum)
//         }

//         n++

//         console.log(arr)
//     }



// }

// fibs(8)

//


// function fibsRec(num, fibRecArr=[0,1]){

// if (fibRecArr.length === num ){
//     return fibRecArr
// }

// let sumNum = fibRecArr[fibRecArr.length - 1] + fibRecArr[fibRecArr.length - 2]

// fibRecArr.push(sumNum)

// return fibsRec(num, fibRecArr )


// }


// function fibsRec(num, arr = [0,1]) {
//     if(arr.length ===num ) {
//         return arr
//     }

//     let nextNum = arr[arr.length-1] + arr[arr.length-2]


//     arr.push(nextNum)



//     return fibsRec(num, arr)
// }



// function mergeSort(arr){


//     console.log('in merge sort')

//     console.log(arr)

//     if (arr.length <= 1) {
//         console.log('retruning')
//         return arr
//     }



//     else {

//           //sort the left half 

//         let halfArrLength = Math.floor(arr.length / 2)

//         let leftArr = arr.slice(0, halfArrLength)

//         let rightArr = arr.slice(halfArrLength)


//         let sortedLeft = mergeSort(leftArr)

//         let sortedRight = mergeSort(rightArr)


//         return merge(sortedLeft,sortedRight)



//     }


// }



// function merge(left,right){

//     result = []

//     while (left.length > 0 && right.length > 0 ){
//         if (left[0] <= right[0]){
//             result.push(left.shift())
//         }

//         else {
//             result.push(right.shift())
//         }
//     }




//     return result.concat(left, right);


// }


// console.log(mergeSort([5,6,10,1,3,7,2])
// )

//test shift 
// let arr = [2,3,4,5,6]

// arr.shift()

// console.log(arr)

// // arr.unshift()

// // console.log(arr)

// arr.unshift(0)

// console.log(arr)


// let arr = [1,2,3,4,5,6,7]

// function findSum(){

//     let total = 0 
//     for (let i of arr) {

//         console.log(i)

//         console.log(typeof(i))
//         total += i

//     }

//     return total
// }

// console.log(findSum(arr))


// let animalArr = ['cat', 'dog','fish','frog']

// for (let i in animalArr){
//     console.log(i)

//     console.log(typeof(i))
// }

// let slicedArr = animalArr.slice()

// console.log(animalArr.length)

// const linkedList = () => {

//     const addNode = () => {

//         console.log('adding node')

//     }


//     return { addNode }
// }


// let newLinkedList = linkedList()
// newLinkedList.addNode()

// //hashing : taking an input and generating a corresponding output

// function hash(name) {
//     console.log(name.charAt(0))
//     return name.charAt(0)
// }

// hash('brian')

// function betterHash(name, surname) {
//     console.log(name.charCodeAt(0), surname.charAt(0))
// }

// betterHash('brian', 'ooi')

// function evenBetterHash(string) {
//     let hashCode = 0 

//     for (let i = 0; i < string.length; i++) {

//         console.log(i)

//         console.log(string.charCodeAt(i))
//         hashCode += string.charCodeAt(i)

//         console.log(hashCode)
//     }



//     console.log(hashCode)


//     return hashCode
// }


// evenBetterHash('Fred')


// const map1 = new Map()

// map1.set('a', 1);

// map1.set('b', 2);

// console.log(map1)


// for (let i of map1){
//     console.log(i)
// }

class HashMap{
    constructor(){
        this.loadFactor = 0.8
        this.capacity = 16

    }

    hash(key){
        let hashCode= 0 

        const primeNumber = 31

        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }

        return hashCode
    }
}

const hash = new HashMap()

