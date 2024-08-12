import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-signin',
  standalone: true,
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class SignupSigninComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    console.log("data", localStorage.getItem('combinedAccountData'));

    const storedData = localStorage.getItem('combinedAccountData');
    if (storedData) {
      const storedUser = JSON.parse(storedData);

      // Check if the entered email matches the stored data
      if (this.f['email'].value !== storedUser.emailId) {
        this.errorMessage = 'Incorrect email. Please try again.';
        this.f['email'].setErrors({ incorrect: true });
      } else {
        this.errorMessage = '';
        this.router.navigate(['singin'], { queryParams: { username: storedUser.name } });
      }
    } else {
      this.errorMessage = 'No account data found. Please sign up first.';
    }
  }
}
