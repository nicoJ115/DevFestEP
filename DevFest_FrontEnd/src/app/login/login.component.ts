import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  financialForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.financialForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ngOnInit(): void { }

  onSubmit() {


    if (this.financialForm.valid) {
      console.log("Form Submitted!", this.financialForm.value);

      // Access the form values
      const {
        username,
        password,
      } = this.financialForm.value;

      // Log the values
      console.log("Username:", username);
      console.log("Password:", password);

    } else {
      console.log("Form is invalid");
    }
  }
}