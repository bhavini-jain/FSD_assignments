const students = [{
        rollno: 1,
        name: "Rahul"
    },
    {
        rollno: 2,
        name: "Harsh"
    },
    {
        rollno: 1,
        name: "Jai"
    },
    {
        rollno: 1,
        name: "Reena"
    },
    {
        rollno: 1,
        name: "Tina"
    }
]

function getItem() {
    console.log("Students");
    setTimeout(() => {
        let displayStudents = ""
        students.forEach(students) => {
            console.log(students.name)
        }
    }, 1000)
}



function createItem(newItem) {

    console.log("Item Created");
    return new Promise {
        (resolve, reject) => {
            setTimeout(() => {


                students.push(newItem)
                let flag = true;
                if (flag) {
                    resolve();
                } else
                    reject("Rejected");
            }, 2000)
        }
    }
}