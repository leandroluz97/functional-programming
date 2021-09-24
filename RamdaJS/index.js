

const addNumber = R.add(R.__)(5)
//console.log(addNumber(5));
//console.log(R.add(30, 5));

const subtractNumber = R.subtract(R.__)(5)
const subtractNumberLast = R.subtract(20)(R.__)
// console.log(subtractNumber(10));
// console.log(subtractNumberLast(10));
// console.log(R.subtract(30, 5));


const notesList = [
    {
        title: "Buy milk and bread",
        createdAt: '2020-04-04',
        dueDate: null,
        archived: false,
    },
    {
        title: "Pick up a package at the post office",
        createdAt: '2020-04-04',
        dueDate: null,
        archived: false,
    },
    {
        title: "Take a walk with Yoda",
        createdAt: '2020-04-04',
        dueDate: null,
        archived: true,
    },
    {
        title: "Read 15 minutes",
        createdAt: '2020-03-07',
        dueDate: '2020-03-08',
        archived: false,
    },
    {
        title: "Do 30 minutes workout",
        createdAt: '2020-03-01',
        dueDate: '2020-03-04',
        archived: false,
    },
]

const sortNodeList = R.sortBy(R.prop('createdAt'))
//console.log(sortNodeList(notesList));

const propertyEqualTo = R.propEq('archived', true)
const filterNotes = R.filter(propertyEqualTo, notesList)
//console.log(filterNotes);

const twoDimention = R.splitEvery(2, [1, 2, 3, 4, 5,])
//console.log(twoDimention);

const rangeOfNumbers = R.range(50, 60);
//console.log(rangeOfNumbers);






