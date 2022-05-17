//class & inerfaces
//OBJECT is a blue print of class
class Student {
  //id: number;
  //name: string;

  constructor(public id: number, private name: string) {}

  myMethod(): void {
    console.log("my Id is .." + this.id + " my Name is.." + this.name);
  }

  getName(): string {
    return this.name;
  }

  setName(name:string){
    this.name = name;
  }
}

let student = new Student(10, "John");
let student1 = new Student(1,'John21');
console.log(student.id);
student.setName('Mary');
student.getName();
student.myMethod();


student1.getName();
/*student.id=20;
student.name='xyz'
student.temp();*/
