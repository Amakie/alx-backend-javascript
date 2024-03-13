export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const firstStudent:Student = {
    firstName: 'Constance',
    lastName: 'Amatey',
    age: 17,
    location: 'Accra'
  }
  
  const secondStudent:Student = {
    firstName: 'John',
    lastName: 'Kofi',
    age: 20,
    location: 'Tema'
  }
  
  const students: Student[] = [
    firstStudent,
    secondStudent,
  ]