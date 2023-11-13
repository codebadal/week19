class Students{
    constructor (name, email){
        this.name = name;
        this.email = email;
        this.courses = [];
    }
    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}`);
    }
    showCourse(){
        console.log(`${this.name}'s enrolled courses : ${this.courses.join(", ")}`);
    }
}

class Admission {
    constructor (){
        this.students = [];
    }
    enrollStudents(student){
        this.students.push(student)
        console.log(`${student.name} has been enrolled.`);
    }
    assignCourse(student, course){
        if (student instanceof Students && student.email && course) {
            student.enroll(course)
        } else {
            console.log("invaild");
        }
    }
    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}

const admissionOffice = new Admission()

const student1 = new Students("mithun", "mithu@pw.com")
const student2 = new Students("subh", "subh@pw.com")

admissionOffice.enrollStudents(student1) //mithun has been enrolled.
admissionOffice.enrollStudents(student2) //subh has been enrolled.

admissionOffice.assignCourse(student1,"web development") //mithun has enrolled in web development
admissionOffice.assignCourse(student2,"data science") //subh has enrolled in data science

student1.showCourse() //mithun's enrolled courses : web development
student2.showCourse() //subh's enrolled courses : data science

admissionOffice.showEnrolledStudents() //Enrolled students:

// - mithun (mithu@pw.com)
// - subh (subh@pw.com)