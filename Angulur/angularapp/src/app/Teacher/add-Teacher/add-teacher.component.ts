import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-Teacher',
  templateUrl: './add-Teacher.component.html',
  styleUrls: ['./add-Teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() Tec: any;
  TeacherId: any;
  Name: any;
  Address: any;
  tel: any;



  ngOnInit(): void {
    this.TeacherId = this.Tec.TeacherId;
    this.Name = this.Tec.Name;
    this.Address = this.Tec.Address;
    this.tel = this.Tec.tel;
  }

  addTeacher() {
var val = {TeacherId:this.TeacherId,
            Name:this.Name,
          Address:this.Address,
        tel:this.tel};
         this.service.AddTec(val).subscribe(res=>{
          alert(res.toString());
         })
  }

  EditTeacher() {
    var val = {TeacherId:this.TeacherId,
               Name:this.Name,
               Address:this.Address,
               tel:this.tel};
   this.service.EditTec(val).subscribe(res=>{
    alert(res.toString());
   })
  }

}
