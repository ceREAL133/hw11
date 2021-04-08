let arr = [20, 1, 11, 23, 4, 54, 61, 34, 2, 10, 26, 74, 7, 26, 73, 22, 55, 66, 12, 20];

//Створити масив з 20 чисел та:
//a) відсортувати його від меншого до більшого.

// let sortedArr = arr.sort((a, b) => a-b);
// console.log(sortedArr);

//відсортувати його від більшого до меншого.
// let sortedArr = arr.sort((a, b) => b-a);
// console.log(sortedArr);

//Відфілтрувати числа які є кратними 3.
// let sortedArr = arr.filter(a => a % 3 === 0);
// console.log(sortedArr);

//Відфілтрувати числа які є більшими за 10
// let sortedArr = arr.filter(a => a > 10);
// console.log(sortedArr);

//  Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//arr.forEach(element => /*document.write*/ console.log(element));

//За допомогою map збільшити кожен елемент в масиві в три рази.
// let newArr = arr.map(a => a * 3)
// console.log(newArr);

// Порахувати загальну суму всіх елментів у масиві (reduce)
// let newArr = arr.reduce((a, currentValue) => a + currentValue);
// console.log(newArr);

let str = ['hello, mentor :D', 'hello, World!', 'zack', 'js is great', 'i\'m designer and i don\'t have job', 'owu' ]

//Відсортувати його в алфавітному порядку
// let newStr = str.sort();
// console.log(newStr);

//Відсортувати в зворотньому порядку
// let newStr = str.sort();
// newStr = str.reverse();
// console.log(newStr);

//Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let newStr = str.filter(elem => elem.length > 5);
// console.log(newStr);

//Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let newStr = str.map(elem => `Sam says: ${elem}`);
// console.log(newStr);

//дано масив
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

//відсортувати його за  віком (зростання , а потім окремо спадання)
//let sortedUsers = users.sort((a, b) => a.age-b.age);
//console.log(sortedUsers);

// let sortedUsers = users.sort((a, b) => b.age-a.age);
// console.log(sortedUsers);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortedUsers = users.sort((a,b) => a.name.length - b.name.length);
// let reversedSortdUsrs = sortedUsers.reverse();
// console.log(sortedUsers);
// console.log(':D :D :D :D :D :D :D :D XD :D :D :D :D :D :D :D');
// console.log(reversedSortdUsrs);

//пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//та зберегти це в новий масив (первинний масив залишиться без змін)

let jsonClone = JSON.stringify(users)
let usersClone = JSON.parse(jsonClone)


usersClone = usersClone.map((obj, userIndex) => {
    obj.id = userIndex+1
    return obj
});


// console.log(usersClone);
// console.log(users);

// // відсортувати його за індентифікатором (оскільки вони і так посортовані, 
// // я їх посортував в зворотньому порядку)
// usersClone.sort((a,b) => b.id - a.id);
// console.log(usersClone);

let marriedArr = [];

usersClone.reduce((a, b) => {
    if (a.isMarried === true) {
        a.hasHouse = true,
        marriedArr.push(a)
    } 
    return b;
})
console.log(marriedArr);

//пробував переписати вираз вище за допомогою тернарки, але воно не зовсім правильно працює
// ось він:
// usersClone.reduce((a, b) => 
//     (a.isMarried === true) ? (a.hasHouse = true, marriedArr.push(a)) : b
// )
    
console.log(usersClone);
console.log(marriedArr);