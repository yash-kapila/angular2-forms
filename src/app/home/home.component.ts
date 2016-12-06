import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages: Array<string>;
  employee: Employee;
  hasPrimaryLanguageError: boolean;
  hasPaymentTypeError: boolean;

  constructor() { 
    this.languages = ['English', 'Spanish', 'Other'];
    this.employee = new Employee();
    this.employee.primaryLanguage = 'default';
    this.hasPaymentTypeError = false;
  }

  ngOnInit() { }

  validatePrimaryLanguage(value): void{
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }

  submitForm(form: NgForm){
    this.validatePrimaryLanguage(this.employee.primaryLanguage);

    this.hasPaymentTypeError = (form.value.paymentType === undefined)? true: false;
    
    if(this.hasPrimaryLanguageError || this.hasPaymentTypeError)
      return;
    else{
      // form is valid. Submit it
      if(this.employee.isFullTime === undefined)
        this.employee.isFullTime = false;
      
      console.log("This is a valid form.");
      console.log(this.employee);
    }
  }
}