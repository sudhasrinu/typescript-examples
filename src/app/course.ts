interface Course {
  course: string;
  listCourses(): Set<string>;
}

class Address {
  myAddress() {
    return "1617 trembley park dr";
  }
}

class Institute extends Address implements Course {
  //courses:Set<string>;
  course: string='';
  listCourses(): Set<string> {
    let courses = new Set<string>();
    courses.add("Java");
    courses.add("Angular");
    courses.add("SAP");
    return courses;
  }
}

let sudhaInstitute = new Institute();
sudhaInstitute.myAddress();
console.log(sudhaInstitute.listCourses());

type Person1 = {
  firstName: String;
  lastName: String;
  address(): String;
};

let obj10: Person1 = {
  firstName: "xyz",
  lastName: "abc",
  address() {
    return "some address";
  },
};

console.log(obj10.address());
console.log(obj10.firstName + " " + obj10.lastName);

interface Person2 {
  firstName: string;
  lastName: string;
  address(): string;
}

let obj2: Person2;
obj2 = {
  firstName: "john",
  lastName: "xyz",
  address() {
    return "some address";
  },
};

console.log(obj2.firstName +' '+obj2.lastName);
console.log(obj2.address());