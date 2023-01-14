import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-Teacher',
  templateUrl: './show-Teacher.component.html',
  styleUrls: ['./show-Teacher.component.css']
})
export class ShowTeacherComponent implements OnInit {

  constructor(private service: SharedService) { }

  TeacherList: any = [];
  AddorEdit: boolean = false;
  Tec: any;
  //dataItem : any;

  ngOnInit(): void {
    this.reFreshTeacherList();
  }
  addclick() {
    this.Tec = {
      TeacherId: 0,
      Name: "",
      Address: "",
      Tel: ""
    }

    this.AddorEdit = true;
  }
  editclick(dataItem: any) {
    this.Tec = dataItem
    this.AddorEdit = true;
  }

  closeclick() {
    this.AddorEdit = false;
    this.reFreshTeacherList();
  }
  reFreshTeacherList() {
    this.service.getTeacherList().subscribe(data => {
      this.TeacherList = data;
    })
  }

}
