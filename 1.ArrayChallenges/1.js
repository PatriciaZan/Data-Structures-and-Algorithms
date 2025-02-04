// Data Structure
// specific way of organizing, storing and accessing data
const students = ['Caio', 'Ana', 'Maria', 'joão', 'Alice']

// Algorithm to find specific user
// step-by-step solution for a problem
 const findUser = (allStudents, studentName) => {
     for (let i = 0; i < allStudents.length; i++) {
         if( allStudents[i] === studentName){
             //console.log(`Studant: ${studentName}`);
         }
     }
}

findUser(students, 'Caio')


