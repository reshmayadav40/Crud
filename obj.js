

let input = require('readline-sync');
const arr = [];

function readStudent(student){
    arr.push(student)
}

while(true){

    let continueChoise = input.question('do you want to continue 1 -');

   
    if(continueChoise === '1'){
     student = {};
        student.name = input.question('enter your name- ');
        readStudent(student);
        console.log(student);
    }else{
        console.log('invalid choice');
        
        
    }
    
    

}
