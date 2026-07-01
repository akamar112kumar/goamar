import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl } from '@angular/forms';
import { Api } from '../../services/api';


@Component({
  selector: 'app-reactiveform-register',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform-register.html',
  styleUrl: './reactiveform-register.scss',
})
export class ReactiveformRegister {
users: any[] = [];
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private api: Api) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log('Registration Data:', this.registerForm.value);
    
  }
}
