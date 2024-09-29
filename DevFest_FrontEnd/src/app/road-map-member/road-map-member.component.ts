import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-road-map-member',
  templateUrl: './road-map-member.component.html',
  styleUrl: './road-map-member.component.css'
})
export class RoadMapMemberComponent implements OnInit{
  financialForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.financialForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      gmail: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      // cardNumber: ['', Validators.required],
      // cardExpirationDate: ['', Validators.required],
      // cardCVC: ['', Validators.required]
    });
    
  }
  

  ngOnInit(): void {}

  onSubmit() {


    if (this.financialForm.valid) {
      console.log("Form Submitted!", this.financialForm.value);

      // Access the form values
      const { 
        username, 
        password, 
        gmail, 
        firstName, 
        lastName, 
        age, 
        phoneNumber, 
        address, 
        cardNumber, 
        cardExpirationDate, 
        cardCVC 
      } = this.financialForm.value;

      // Log the values
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Gmail:", gmail);
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Age:", age);
      console.log("Phone Number:", phoneNumber);
      console.log("Address:", address);
      console.log("Card Number:", cardNumber);
      console.log("Card Expiration Date:", cardExpirationDate);
      console.log("Card CVC:", cardCVC);

      // Optionally, navigate to another route
      // this.router.navigate(['/roadmap']);
    } else {
      console.log("Form is invalid");
    }
  }

}
