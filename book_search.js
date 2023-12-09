/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    const re = new RegExp("\s*" + searchTerm + "( |\n|\\.|\t|\,)")

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    for (let n = 0; n < scannedTextObj.length; n ++) {
        for (let i = 0; i < scannedTextObj[n].Content.length; i ++) {
            if (re.test(scannedTextObj[n].Content[i].Text)) {
                result.Results.push({
                    "ISBN": scannedTextObj[n].ISBN,
                    "Page": scannedTextObj[n].Content[i].Page,
                    "Line": scannedTextObj[n].Content[i].Line
                })
            }
        }
    }
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see"

            } 
        ] 
    }
]

const CSbooks = [
    {
        "Title": "The Annotated Turing",
        "ISBN": "9780470229057",
        "Content": [
            {
                "Page": 253,
                "Line": 19,
                "Text": "What's interesting about this Machine is that it's the closest that Turing comes (not in the book, for testing purposes) -> !!!!!godel"
            },
            {
                "Page": 67,
                "Line": 7,
                "Text": "That's the famous Godel's Incompleteness Theorem. Notice that Tu"
            },
        ] 
    },
    {
        "Title": "Godel's Proof",
        "ISBN": "9780841758373",
        "Content": [
            {
                "Page": 2,
                "Line": 15,
                "Text": "Godel's paper attacked a problem in the foundations of mathematics"
            }
        ] 
    },

]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}



 
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/*test 3*/
const test3result = findSearchTermInBooks("Godel's", CSbooks)
tester(test3result,
    {
    "SearchTerm": "Godel's",
    "Results": [
        {
            "ISBN": "9780470229057",
            "Page": 67,
            "Line": 7
        },
        {
            "ISBN": "9780841758373",
            "Page": 2,
            "Line": 15
        },

    ]
}, 3)

/*test 4*/
let test4result = findSearchTermInBooks("the", CSbooks)
tester(test4result, {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780470229057",
            "Page": 253,
            "Line": 19
        },

        {
            "ISBN": "9780470229057",
            "Page": 67,
            "Line": 7
        },
        {
            "ISBN": "9780841758373",
            "Page": 2,
            "Line": 15
        },

    ]
}, 4)

/*test 5*/
let test5result = findSearchTermInBooks("US Corps", CSbooks)
tester(test5result, {
    "SearchTerm" : "US Corps",
    "Results" : []
}, 5)

/*test 6*/
let test6result = findSearchTermInBooks("Godel", CSbooks)
tester(test6result, {
    "SearchTerm": "Godel",
    "Results": []
}, 6)

/*test 7*/
let test7result = findSearchTermInBooks("The", CSbooks)
tester(test7result, {
    "SearchTerm": "The",
    "Results": []
}, 7)

/*test 8*/
let test8result = findSearchTermInBooks("godel", CSbooks)
tester(test8result, {
    "SearchTerm": "godel",
    "Results": []
}, 8)

/*testing function*/
function tester(testResult, correctResult, testnumber) {
    if (JSON.stringify(testResult) == JSON.stringify(correctResult)) {
        console.log("PASS: Test %d", testnumber)
    } else {
        console.log("FAIL: Test %d", testnumber);
        console.log("Expected:", correctResult);
        console.log("Received:", testResult);
    }
}