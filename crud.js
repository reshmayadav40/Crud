
const arr =[];

function addStudent(student){
    arr.push(student);
    console.table(arr);
    
}

function updateStudent(id,name, age,currentclass,rollnum){
    for(i = 0; i < arr.length; i++){
        if(arr[i].id === id){
            arr[i].name = name;
            arr[i].age = age;
            arr[i].currentclass = currentclass;
            arr[i].rollnum = rollnum;
            
        }
    }
    console.table(arr);
    
}
function remove(id){
    for(i = 0; i < arr.length; i++){
        if(arr[i].id === id){
            arr.splice(i, 1);
            break;
        }
    }
    console.table(arr);
    
}

let input = require ('readline-sync');

while(true){
    console.log('Welcome to the my project');
    console.log('1 for add student');
    console.log('2 for update student');
    console.log('3 for delete student');

    let choice = input.question('Enter your choice-1/2/3- ');
    if (choice === '1'){
        let student = {};
        student.id = input.question('Enter id- ')
         student.name = input.question('Enter student name- ');
         student.age = input.question('Enter student age- ');
         student.currentclass = input.question('Enter student class- ');
         student.rollnum = input.question('Enter student rollnum- ');

         addStudent(student);

    }else if(choice === '2'){
        const id = input.question('update id- ')
        const name = input.question('Update student name- ');
        const age = input.question('Update student age- ');
        const currentclass = input.question('Update student class- ');
        const rollnum = input.question('Update student roll nummber- ');
        updateStudent(id,name,age,currentclass,rollnum);

    }else if(choice === '3'){
        const name = input.question('Enter the id of the student for delete- ');
        remove(name)
    }else{
        console.log('invalid choice');
        
    }
    let continueChoice = input.question('Do you want to continue (Yes/No)- ');
    if (continueChoice.toLocaleLowerCase()!== 'yes'){
         break;
    }
    
}