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
      bankAccountBalance: ['', [Validators.required, Validators.min(0)]],
      financialGoal: ['', [Validators.required, Validators.min(0)]],
      age: ['', [Validators.required, Validators.min(18)]],
      profession: ['', Validators.required],
      otherDetails: ['']
    });
    
  }
  

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log("Form Submitted!", form.value);

    // You can now access the form values like this:
    const bankAccountBalance = form.value.bankAccountBalance;
    const financialGoal = form.value.financialGoal;
    const age = form.value.age;
    const profession = form.value.profession;
    const otherDetails = form.value.otherDetails;
    const collegeAttendance = form.value.collegeAttendance;

    // Do something with these values, such as sending them to a server
    console.log("Bank Account Balance:", bankAccountBalance);
    console.log("Financial Goal:", financialGoal);
    console.log("Age:", age);
    console.log("Profession:", profession);
    console.log("Other Details:", otherDetails);
    console.log("College Attendance:", collegeAttendance);
  }

}
