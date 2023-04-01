import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  UserRegistrationForm: FormGroup;
  constructor() {
    this.UserRegistrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  OnSubmit() {
    if(this.UserRegistrationForm.valid && this.UserRegistrationForm.value.password) {
      console.log('Signup data: ', this.UserRegistrationForm.value);
    } else {
      console.log('Acces denied');
      
    }
  }
}
