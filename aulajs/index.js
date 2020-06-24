const classA = [
    {
        name: "Amanda",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Gertrudes",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Adriele",
        grade: 10
    },
    {
        name: "Gertrudes",
        grade: 6
    },
    {
        name: "Virgulina",
        grade: 3
    }
]

function calculateAverage(students) {
    let sum = 0
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    
    return average
}

function sendMessage(average, classX) {
    if (average > 5) {
        console.log(`${classX} average: ${average}. Congrats!`)
    } else {
        console.log(`${classX} is under 5.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false;
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`${student.name} failed!`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageFlunked(student);
    }
}

const averageA = calculateAverage(classA)
const averageB = calculateAverage(classB)

sendMessage(averageA, 'classA')
sendMessage(averageB, 'classB')

studentsFlunked(classA)
studentsFlunked(classB)