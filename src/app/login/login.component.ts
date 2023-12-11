import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "Login Page"
  email = this.formBuilder.control('', [Validators.required, Validators.email]);
  password = this.formBuilder.control('', Validators.required);
  hide = true;

  constructor(private formBuilder: FormBuilder,private router:Router) {}

  onSubmit() {
    if (this.email.valid && this.password.valid) {
      alert('Form is Submitted...');
      this.router.navigate(['/profile']);
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }
}
