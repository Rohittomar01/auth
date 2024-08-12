import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  errorMessage = '';
  username: string | null = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
    console.log("name", this.username);
  }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    const storedData = localStorage.getItem('combinedAccountData');
    if (storedData) {
      const storedUser = JSON.parse(storedData);

      if (this.f['email'].value !== storedUser.emailId) {
        this.errorMessage = 'Incorrect email. Please try again.';
        this.f['email'].setErrors({ incorrect: true });
      } else if (this.f['password'].value !== storedUser.password) {
        this.errorMessage = 'Incorrect password. Please try again.';
        this.f['password'].setErrors({ incorrect: true });
      } else {
        this.errorMessage = '';
        this.router.navigate(['done']);
      }
    } else {
      this.errorMessage = 'No account data found. Please sign up first.';
    }
  }
}
