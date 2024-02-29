import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  get NameCheck() {
    return this.name.length >= 3;
  }
  age: number = 0;
  get AgeCheck() {
    return this.age >= 10 && this.age <= 17;
  }
  phone: string = '';
  get PhoneCheck() {
    return (
      this.phone.length == 11 &&
      (this.phone.startsWith('010') ||
        this.phone.startsWith('012') ||
        this.phone.startsWith('015'))
    );
  }
  loc: string[] = ['Cairo', 'alex', 'gize'];
  address: string = '';
  get AddressCheck() {
    return this.address.length != 0;
  }
  studentList: Student[] = [];
  c: number = 0;
  add() {
    if (
      this.NameCheck &&
      this.AddressCheck &&
      this.AgeCheck &&
      this.PhoneCheck
    ) {
      this.studentList.push(
        new Student(this.c++, this.name, this.address, this.age, this.phone)
      );
    } else {
      alert('Must input all inputs');
    }
  }

  remove(id: number) {
    this.studentList = this.studentList.filter((s) => s.id != id);
  }
}

class Student {
  id: number = -1;
  name: string = '';
  address: string = '';
  age: number = 0;
  phone: string = '';
  constructor(
    id: number,
    name: string,
    address: string,
    age: number,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.age = age;
    this.phone = phone;
  }
}
