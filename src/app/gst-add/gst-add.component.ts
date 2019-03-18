import { BusinessService } from './../business.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.scss']
})
export class GstAddComponent implements OnInit{
  data: any = {};
  angForm: FormGroup;
  constructor(private toastr: ToastrService,private fb : FormBuilder, private businessService:BusinessService) {
    this.createForm();
   }
   
   ngOnInit() {
   }

   createForm = () => {
     this.angForm = this.fb.group({
       person_name: ['',Validators.required],
       business_name: ['',Validators.required],
       business_gst_number: ['',Validators.required]

     });
   }

   addBusiness = () => {

   // this.toastr.success('Success', 'Record updated successfully!');
     //console.log(person_name.value);

     //console.table(this.angForm);
     //console.log(this.angForm.controls.business_gst_number.value);

      this.businessService.addBusiness(this.angForm.controls.person_name.value,this.angForm.controls.business_name.value,this.angForm.controls.business_gst_number.value).subscribe(res => {
          console.table(res);
          this.toastr.success('Success', 'Record updated successfully!');
      },err => {
        this.toastr.warning('Error', 'please try again !');
        console.table(err);
      });
      this.resetForm();
    }

   resetForm = () => {
    this.angForm.reset();
   }

}
