console.log("whatup bitches");
// students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];
// function getStudentNames(students) {

//     answer = students.map(student => {
//         return student.name
//     });
//     return answer
// };
// getStudentNames(students);

//printNumbers
// let list = []
// function printNumbers(start, end) {

//     while (start < end) {
//         list.push(start);
//         start += 1;
//     }
//     console.log(list)
// }
// printNumbers(1, 10);

//printSquare: Write a function printSquare which is given a size and prints a square of that size using asterisks.
function printSquare(x, y) {
    let countX = 1;
    let countY = 1;
    let row = ""
    while (countX <= x) {
        while (countY <= y) {
            row += "*"
            countY += 1;
        }
        console.log(row)
        countX += 1;
    }
}
printSquare(5, 7);