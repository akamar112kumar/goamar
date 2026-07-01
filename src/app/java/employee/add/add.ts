import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Javaapi } from '../../../services/javaapi';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule,CommonModule,Header],
  templateUrl: './add.html',
  styleUrls: ['./add.scss'],
  })
export class Add implements OnInit{

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private javaapi: Javaapi) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      salary: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    
if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

 this.javaapi.javaapidata(this.registerForm.value).subscribe({
    next: (res) => {
      alert("✅ User registered successfully!");
      this.registerForm.reset();
    },
    error: (err) => {
      console.error("Error:", err);
      alert("❌ Failed to register user");
    }
  });


  
    
  
  }
  

}
