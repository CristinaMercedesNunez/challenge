import { count } from 'console';
import readline from 'readline'; // https://nodejs.org/api/readline.html



const students = [{
    age: 32,
    examScores: [7,8,5],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 28,
    examScores: [4,3,3],
    gender: 'male',
    name: 'quim'
  }, 
  {
    age: 37, 
    examScores:[10,8,9],
    gender: 'female',
    name: 'cris'
  },
  {
    age: 29,
    examScores: [6,6,8],
    gender: 'female',
    name: 'silvia'
  }]
  

  const availableStudents = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','quim','cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia','cris'];
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','quim'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia','cris'];
  const availableGenders = ['male', 'female'];

  function printRequirements(){
    for (const key of object.keys(toPrintRequirements)){
        console.table(key + " : " + toPrintRequirements[key])

    }
  }

  const toPrintRequirements = {
    1: 'Mostrar en formato de tabla todos los alumnos.',
    2: 'Mostrar por consola la cantidad de alumnos que hay en clase.',
    3: 'Mostrar por consola todos los nombres de los alumnos,',
    4: 'Eliminar el último alumno de la clase.',
    5: 'Eliminar un alumno aleatoriamente de la clase.',
    6: 'Mostrar por consola todos los datos de los alumnos que son chicas',
    7: 'Mostrar por consola el número de chicos y chicas que hay en la clase',
    8: 'Mostrar true o false por consola si todos los alumnos de la clase son chicas',
    9: 'Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años',
    10: 'Añadir un alumno nuevo',
    11: 'Mostrar por consola el nombre de la persona más joven de la clase',
    12: 'Mostrar por consola la edad media de todos los alumnos de la clase',
    13: 'Mostrar por consola la edad media de las chicas de la clase',
    14: 'Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(núm entre 0 y 10)',
    15: 'Ordenar el array de alumnos alfabéticamente según su nombre'
  }




  const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// con la siguiente función podemos hacer una pregunta al usuario por consola. si el usuario mete un número, se resuelve con un número la promesa. 
// si el usuario introduce una letra, la promesa se rechaza.

function SelectQuestion() {
const promise = new Promise((resolve, reject) => {
    rl.question('introduce número: ', (num) => {
        rl.pause)(); 
        if (isNaN(num)) {
            reject('eeeenk')

         } else {
            resolve(num)
         }
        
        })


return promise
}

async function fetchSelectedQuestion(){
 try{
    const question = await SelectQuestion()
    switch (question){
        case '1':
            console.table(); // Apartado 1
            break;
        case '2':
            console.log(); //Apartado 2
            break;
        case '3':
            students.find();
            break;
        case '4':
            console.log(students.pop());
            break;
        case '5':
            deleteRandomStudent();
            break;
        case '6':
            IsAGirl();
            break;
        case '7':
            TotalGender();
            break;
        case '8':
            allGirlsBoolean();
            break;
        case '9':
            EarlyTwenties();
            break;
        case 10:
            NewRandomStudent();
            break;
        case 11:
            YoungestStudent();
            break;
        case 12:
            averageAge();
            break;
        case 13:
            averageAgeWoman();
            break;
        case 14:
            RandomScore();
            break;
        case 15:
            AlphabeticallyOrdered();
            break;
    }
 }

    catch (error) {
        console.log(error)


    }
}

fetchSelectedQuestion()




// 1. mostrar tabla con datos de estudiantes por pantalla
  console.table(students)

//2. Mostrar número de estudiantes por pantalla
  console.log(students.length)

//3.Mostrar nombres de estudiantes por pantalla
  students.find(object => {
    console.log(object.name)
  })

//4. Eliminar el último elemento de la lista
    console.log(students.pop())
 
  
//5. Eliminar un elemento aleatorio de la lista
   
function deleteRandomStudent(){
        students.splice(Math.floor(math.random() * students.length),1);
        console.log(students)
    }

//6. Mostrar por consola todos los alumnos que son chicas
     
    function IsAGirl() {
        const girls = students.filter(student => student.gender ==='female');
        console.log(girls)
     }

//7. Mostrar por consola el número de chicos y chicas que hay en la clase

    function TotalGender(){

    const totalMale = students.filter(student => student.gender === 'male');
    const totalFemale = students.filter(student => student.gender === 'female');
    console.log ('Total male: ', totalMale.length, 'Total female: ', totalFemale.length);

}

//8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.

    function allGirlsBoolean() {
        console.log(students.every(gender => gender === 'female'))
    }


//9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años

    function EarlyTwenties() {
        const totalEarlyTwenties = students.filter(student => student.age >= 20 && student.age <=25)
        console.log(totalEarlyTwenties)
    }
    
//10. Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria (20-50), género aleatorio, listado de calificaciones vacío.

    function NewRandomStudent() {
        const chooseGender = availableGenders [Math.floor(Math.random() * availableGenders.length)];
        let chooseName = null;
        if (chooseGender === 'male') {
            chooseName = availableMaleNames [Math.floor(Math.random() * availableMaleNames.length)];

        } else {
            chooseName = availableFemaleNames [Math.floor(Math.random() * availableFemaleNames.length)];
        }

        const min = 20
        const max = 50
        
        let chooseAge = [Math.floor(Math.random() * (max - min))];
        students.push({
            age: chooseAge,
            examScores: [],
            Gender: chooseGender,
            name:selecName
        })

        }


    //11.Mostrar por consola el nombre de la persona más joven de la clase.

        function YoungestStudent(){
            const youngest = students.reduce(
                ((accumulator, currentAge) => accumulator.age + currentAge.age)
             )

            console.log('The youngest student is ', youngest.name)
        }

  //12.Mostrar por consola la edad media de todos los alumnos de la clase.

        function averageAge(){
            const average = students.reduce((a, b)=> a + b.age, 0) / students.length
             console.log(Math.round(average))

        }

 //13.Mostrar por consola la edad media de las chicas de la clase.
        function averageAgeWoman(){
            const totalWomen = students.filter(student => student.gender === 'female');
            const average = totalWomen.reduce((a,b) => a + b.age, 0) / totalWomen.length;
            console.log(Math.round(average))
        }
        
//14.Añadir nueva nota a los alumnos. Por cada alumno de la clase tendremos que calcular una nota de forma aleatoria.

        function RandomScore(){
            const min = 0
            const max = 10
            students.forEach(function(student) {
                let score = Math.floor(Math.random()* (max - min) + min)
                student.examScores.push([score])
                console.log(student)

                })
            }

//15.Ordenar alfabéticamete el array de alumnos según el nombre
            function AlphabeticallyOrdered(){
                console.log (students.sort((a, b) => a.name.localeCompare(b.name)))
            }