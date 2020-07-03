// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//Kata 0:

const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

//Kata 1:

const isActiveUser = users.filter(user => user.isActive === true)

printKata(1, isActiveUser)

//Kata 2: 

const userEmail = users.map(user => user.email)

printKata(2, userEmail)

//Kata 3:

const userCompany = users.some(user => user.company === "OVATION")

printKata(3, userCompany)

//Kata 4: 

const userOver38 = users.find(user => user.age > 38)

printKata(4, userOver38)

//Kata 5:

const activeUserOver38 = users
    .filter(user => user.age > 38)
    .find(user => user.isActive === true)

printKata(5, activeUserOver38)

//Kata 6:

const userBalance = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)

printKata(6, userBalance)

//Kata 7:

const fugiatUsersAge = users
    .filter(user => user.tags.includes("fugiat"))
    .map(user => user.age)

printKata(7, fugiatUsersAge)