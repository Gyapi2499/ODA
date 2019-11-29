import { User } from '../user.class';

export class Course{
   title : string;
   description: string;
   id: number;
   max: number;
   actual: number;
   location:string;
   date: string;
   image: string;
   teacher: User[];
   deadLine:string;
}