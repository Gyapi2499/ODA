import { User } from '../user.class';

export class Course{
   name : string;
   description: string;
   createUser:User
   id: number;
   maxNumber: number;
   location:string;
   date: string;
   image: string;
   teachers: User[];
   applicants:User[];
   deadLine:string;
}