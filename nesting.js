/*
  Once you complete a problem, refresh ./nesting.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var employees = [
  {
    "firstName": "Von",
    "lastName": "Budibent",
    "email": "vbudibent0@163.com",
    "department": "Sales"
  },
  {
    "firstName": "Catherina",
    "lastName": "Swalowe",
    "email": "cswalowe1@example.com",
    "department": "Engineering"
  },
  {
    "firstName": "Theo",
    "lastName": "Trill",
    "email": "ttrill2@sina.com.cn",
    "department": "Services"
  },
  {
    "firstName": "Elsy",
    "lastName": "McCrorie",
    "email": "emccrorie3@netscape.com",
    "department": "Legal"
  },
  {
    "firstName": "Lorie",
    "lastName": "Handsheart",
    "email": "lhandsheart4@fotki.com",
    "department": "Research and Development"
  }
];
// Do not edit the code above.

/*
  Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
    1. If employee's first name is Theo, remove that employee because he just got fired.
    2. If the employee's first name is Lorie, change her department to 'HR'.
    3. Return the updated employee array.
*/

// let employeeUpdater = () => {
//   for (let i = 0; i < employees.length; i++) {
//     if(employees[i].firstName = 'Theo') {
//       delete employees[i]  //.firstname
//     } 
//     else if (employees[i].firstName = 'Lorie') {
//       employees[i].department = 'HR'
//       }
//     }
//     return employees;
//   }

const  employeeUpdater = ( ) => {
  for (let i = 0; i < employees.length; i++) {
    if(employees[i].firstName === 'Theo') {
      delete employees[i].firstName
    } else if(employees[i].firstName === 'Lorie') {
      employees[i].department = 'HR'
      }
    }
    return employees;
  }
   employeeUpdater( )

////////// PROBLEM 2 //////////

// Do not edit the code below.
var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
// Do not edit the code above.

/*
  The array above represents IDs tied to reported workplace accidents. 
  An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
    1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
    2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
    3. Return the updated array.
*/

const removeDuplicates = (arr) => {
  for(let i=0;i<arr.length; i++){
    //console.log(`For Loop 1 (i): ${i}`)
    for(let j=arr.length -1;j>i; j--){
      //console.log(`For Loop 2 (j): ${j}`)
      if(arr[i] === arr[j]){
        arr.splice(j,1)
      }
    }
  }
    return arr
}

removeDuplicates(workplaceAccidents)
//return[(...new Set(arr))]

////////// PROBLEM 3 //////////

// Do not edit the code below.
var cat = {
  name: 'Fluffy',
  catFriends: [
    {
      name: 'Grumpy',
      activities: ['be grumpy', 'eat food']
    }, 
    {
      name: 'Lazy Bones',
      activities: ['sleep', 'pre-sleep naps']
    }
  ]
}
// Do not edit the code above.

/*
  Fluffy has two friends, Grumpy and Lazy Bones. 
    1. Assign the value of Grumpy's 2nd activity to the grumpyActivity variable below.
    2. Assign fluffy2ndFriend the name of Fluffy's 2nd friend.
*/
var grumpyActivity = cat.catFriends[0].activities[1];
var fluffy2ndFriend = cat.catFriends[1].name

// var catStuff = [ ]
//  for(var prop in cat) {
//    catStuff.push( prop )
//  }

// catStuff[grumpyActivity,fluffy2msFriend]



////////// PROBLEM 4 //////////

// Do not edit the code below.
var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true
    }
  ]
}
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array.
    3. Change atFaultForAccident from true to false.
*/

//(condition) ? (what to do if true) : (what to do if false)
// const recordCleaner = () => {
//   myCar.accidents.forEach(e => {
//     return e[i].atFaultForAccident = false 
//   })
// }

let recordCleaner = () => {
  for( i = 0; i < myCar.accidents.length; i++){
    myCar.accidents[i].atFaultForAccident = false
    }
  }

  //for(i= 0; i < myCar.length;i++) {
    //if(myCar[i].atFaultForAccident[i] === true) {
//       if(element = true) {
//       return myCar[i].atFaultForAccident[i] === false
//     }
//   }
// }

////////// PROBLEM 5 //////////

// Do not edit the code below.
var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
// Do not edit the code above.

/*
  Above is an array of arrays. Use two for loops.
    1. Write a function called 'looper'. 
    2. 'looper' should loop over the arrays.
    3.  If the number is odd, replace it with 'odd'.
        If the number is even, replace it with 'even'.
    4. Return the modified numsArr.
*/

  const looper = () => {
    numsArr.forEach(e => e.forEach((f,i) => {
      if(f % 2 === 0){e[i] = 'even'}
      else{e[i] = 'odd'}
    }))
    return numsArr
  }
  //array.forEach(function(val,i,arr) {
//})
//Array.forEach() = goes through each item in an array one by one and passes them into a function we give it. ForEach does not return a value and we cannot ask for a result. So if we want to update the original arr, we need to use it.


  // const looper = ( ) => {
//   numsArr.forEach(forEach(e => {
//     if(e % 2 === 0){
//       e = 'even'
//     } else if (e % 2 == 1){
//       e = 'odd'
//     }
//     return numsArr
//   }))}
// for(let i=0; i< numsArr.length; i++) {
//    for(let j=0; i<numsArr.length; j++){
//    if(numsArr[i]) % 2 = 0 : even
//    }
//   }