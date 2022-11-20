import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id = '';
  Document = '';
  DocumentType = '';
  FirstName = '';
  LastName = '';
  state = '';

  students: any = [];

  student: any;


  constructor(private listService: ListService) {
    this.listService.obtainStudents().subscribe(x=>{
      this.students = x
      console.log(this.students);
    })
   }

  ngOnInit(): void {


  }

  addStudent() {
this.listService.addStudent(this.student).subscribe(x=>{
  console.log(this.students);
})
  }


}
