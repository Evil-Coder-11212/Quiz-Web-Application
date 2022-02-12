// Questions will be asked
const Questions = [{
    id: 0,
    q: " Whichg of the following is used to two create webpage?",
    a: [{ text: "C++", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "HTML", isCorrect: true },
        { text: "DIT", isCorrect: false }
    ]

},
{
    id: 1,
    q: "HTML is considered as which language?",
    a: [{ text: "Programming L", isCorrect: false, isSelected: false },
        { text: "OPP Langauge", isCorrect: false },
        { text: "H L langauge", isCorrect: false },
        { text: "Markup Language", isCorrect: true }
    ]

},
{
    id: 2,
    q: "HTML language is a set of markup",
    a: [{ text: "Attributes", isCorrect: false },
        { text: "Tags", isCorrect: true },
        { text: "Sets", isCorrect: false },
        { text: "Group", isCorrect: false }
    ]

},{
    id: 3,
    q: "HTML tags are used to 5. HTML tags are used to describe document?",
    a: [{ text: "Definition", isCorrect: false },
        { text: "Language", isCorrect: false },
        { text: "Content", isCorrect: true },
        { text: "None of these", isCorrect: false }
    ]

},{
    id: 5,
    q: "Page designed in HTML is called a?",
    a: [{ text: "Yellow Page", isCorrect: false },
        { text: "Web Page", isCorrect: true },
        { text: "Server Page", isCorrect: false },
        { text: "None of these", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementById("results");
result.innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
console.log(op1.value, op2.value, op3.value, op4.value);

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementById("evaluate");

// Evaluate method
evaluate.addEventListener("click", () => {
    if (selected == true) {
        result.innerHTML = "True";
        result.style.color = "green";
    } else {
        result.innerHTML = "False";
        result.style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementById('next');
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})
