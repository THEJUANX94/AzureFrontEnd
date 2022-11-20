import { Component, OnInit } from '@angular/core';
import { SubjectService} from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  id = '';
  SubjectCode = '';
  Name = '';
  Credits = '';
  Slots = '';
  state = '';

  subjects: any = [];

  subject: any;


  constructor(private subjectService: SubjectService) {
    this.subjectService.obtainSUbject().subscribe(x=>{
      this.subjects = x
      console.log(this.subjects);
    })
  }

  ngOnInit(): void {
  }

  addSubject() {
    this.subjectService.addSSUbject(this.subject).subscribe(x=>{
      console.log(this.subjects);
    })
}
}
