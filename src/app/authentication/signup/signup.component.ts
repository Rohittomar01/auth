import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpObj: { emailId: string; name: string; password: string } = {
    emailId: '',
    name: '',
    password: '',
  };

  constructor(private router: Router) {
    this.loadSignUpData(); 
  }

  signUp() {
    if (this.signUpObj.emailId && this.signUpObj.name && this.signUpObj.password) {
      localStorage.setItem('combinedAccountData', JSON.stringify(this.signUpObj));
      this.router.navigate(['createAccount']);
    } else {
      console.log('Please fill in all required fields.');
    }
  }

  loadSignUpData() {
    const storedData = localStorage.getItem('combinedAccountData');
    if (storedData) {
      this.signUpObj = JSON.parse(storedData);
      console.log('Loaded Signup Data:', this.signUpObj);
    } else {
      console.log('No saved signup data found.');
    }
  }
}
