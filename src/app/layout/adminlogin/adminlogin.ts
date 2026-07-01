import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlogin',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adminlogin.html',
  styleUrl: './adminlogin.scss',
})
export class Adminlogin {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      alert('Admin login successful: ' + this.loginForm.value.username);
      this.closeLogin();
    }
  }

  closeLogin() {
    this.router.navigate(['../'], { relativeTo: this.router.routerState.root });
  }
}
