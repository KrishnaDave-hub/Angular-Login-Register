import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormArray,FormControl} from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  title = 'Registration Page';
  isLinear = true;
  hide = true;
  disableSelect = new FormControl(false);
  degrees = new FormControl('',[Validators.required]);
  degreeList: string[] = ['Bca', 'Mca', 'MTech', 'BTech', '10th', '12th'];
  submittedData: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  fullname = new FormControl('', [Validators.required]);
  birthdate = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  otherDetails = new FormControl('', [Validators.required]);

  stepperOrientation: Observable<StepperOrientation>;
  constructor(private formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    ) {
      this.stepperOrientation = breakpointObserver
        .observe('(min-width: 800px)')
        .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

  submit = this.formBuilder.group({
    formArray: this.formBuilder.array([
      this.formBuilder.group({
        fullname: ['', Validators.required],
        birthDate: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
      }),
      this.formBuilder.group({
        degrees: ['', Validators.required],
        otherDetails: ['', Validators.required],
      }),
    ]),
  });

  get formArray(): FormArray {
    return this.submit.get('formArray') as FormArray;
  }
  onSubmit() {
    this.submittedData = this.submit.value;
    console.log(this.submit.value);
  }
}
