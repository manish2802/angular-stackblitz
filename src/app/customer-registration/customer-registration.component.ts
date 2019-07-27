import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { CustomerRegistrationService } from '../customer-registration/customer-registration.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  //styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  custRegForm: FormGroup;

  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private customerRegistrationService: CustomerRegistrationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.custRegForm = this.formBuilder.group({
      username: ['', Validators.required],
      mailId: ['', Validators.required],
      mobileNo: ['', Validators.required]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.custRegForm.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.custRegForm.invalid) {
            return;
        }

     this.loading = true;
          
     console.log(this.custRegForm.value);
     this.customerRegistrationService.customerRegistration();

  }



}