const array = [1, 2, 3, 4, 5, 6, 7];



function removeElement(array, number) {

    const myValue = array.findIndex(index => {
        if (index == number)
            return true;
    });


    if (myValue == -1) {
        throw new TypeError('Вы ввели строку,Null или число больше семи');
    } else {
            array.splice(myValue, 1);
    return array;
    }

}

console.log(removeElement(array,5));


// =================================================================

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function generateKey(lenth, myArr) {
//     const min = Math.ceil(0);
//     const max = Math.floor(characters.length - 1);
//     let rezArr = [];
    
//     for (let i = 0; i < lenth; i++) {
//         const randomValue = myArr[Math.floor(Math.random() * (max - min + 1)) + min];
//         rezArr.push(randomValue)
//     }

//     let str = rezArr.join('');

//     return str;
// }
// console.log(generateKey(16, characters));