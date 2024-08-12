import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  createAccountObj: any = {
    organizationName: '',
    organizationId: '',
    birthDate: '',
    city: '',
    pincode: '',
  };

  constructor(private router: Router) {}

  createAccount(form: any) {
    if (form.valid) {
      const existingData = localStorage.getItem('combinedAccountData');
      let combinedData = {};

      if (existingData) {
        combinedData = { ...JSON.parse(existingData), ...this.createAccountObj };
      } else {
        combinedData = { ...this.createAccountObj };
      }
      localStorage.setItem('combinedAccountData', JSON.stringify(combinedData));
      this.router.navigate(['done'], { queryParams: { pagename: 'signUp' } });
    } else {
      // Handle invalid form case if needed
    }
  }

  goBack() {
    this.router.navigate(['signup']);
  }
}
