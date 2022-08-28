/*
## Array Methods #9

#### Create Students Array

1. setup students array with 5 students
  {
  id: 1,
  name: 'peter',
  score: 80,
  favoriteSubject: 'math',
  },

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#### updatedStudents

1. add role:'student' property to each object
  using MAP method
2. assign to 'updatedStudents' variable and log

#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

#### survey

1. list favorite subjects with reduce
  {
  english: 1
  history: 1
  math: 3
  }
2. assign to survey and log

*/


// Create Students Array
const students = [
	{
		id: 1,
		name: "Dave",
		score: 33,
		favouriteSubject: "Math",
	},
	{
		id: 2,
		name: "Susan",
		score: 64,
		favouriteSubject: "Art",
	},
	{
		id: 3,
		name: "Mitch",
		score: 40,
		favouriteSubject: "Math",
	},
	{
		id: 4,
		name: "Anne",
		score: 95,
		favouriteSubject: "History",
	},
	{
		id: 5,
		name: "Mark",
		score: 73,
		favouriteSubject: "History",
	}
];

console.log(students);