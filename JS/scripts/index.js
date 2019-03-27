console.log("whatup bitches")


function transl33t(originalString) {
    const leetDictionary = {
        A: "4",
        E: "3",
        G: "6",
        I: "1",
        O: "0",
        S: "5",
        T: "7",
    };
    let result = '';

    //loop through each letter in originalString
    for (let i = 0; i < originalString.length; i++) {
        //if it's in the dictionary, put its value in 'result'
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter])
        if (leetDictionary[theLetter]) {
            result += leetDictionary[theLetter];
        }
        //if not, just copy the existing letter into 'result'
        else {
            result += theLetter;
        }
    };
    return result;
};

// console.log(transl33t("hello kitty"));

const addressBook = {
    DigitalCrafts: {
        phone: '404-123-1234',
        address: '23 yoyoyo st',
        city: 'tha atl'
    }, "Big Bird": {
        phone: '867-5309',
        address: 'sesame st',
        city: 'pbs'
    }
};
//write a fxn that prints contact information for each entry
function printContact(book) {
    // console.log(addressBook);
    //grab all the keys
    const allTheKeys = Object.keys(book);
    //using each key, loook up the entry
    allTheKeys.forEach();
};
//a second that accepts address book and key name and prints only that piece of contact info, i.e. printAll(addressBook, city)
function printOne(stringKey) {
    // function printOne(block, entry) {
    // console.log(block[entry]);
    //look up stringKey in book
    book[stringKey]
};

function printBoth(book) {
    const allTheKeys = Object.keys(book);
    allTheKeys.forEach(function (stringKey) {
        let entry = book[stringKey]
        console.log(stringKey, entry)
    })
}

function printItem(book, item) {
    const allTheKeys = Object.keys(book);
    allTheKeys.forEach(function (stringKey) {
        let entry = book[stringKey]
        // console.log(book[stringKey][item]);
        console.log(entry[item]);
    })
}
