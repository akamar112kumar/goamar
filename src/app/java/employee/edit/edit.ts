import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Javaapi } from '../../../services/javaapi';


@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements OnInit {
  
 fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  userService = inject(Javaapi);
  router = inject(Router);

  userId!: number;

  editForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    salary: ['', Validators.required]
  });

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.userId).subscribe(user => {
      this.editForm.patchValue(user);  // ✅ Pre‑fill form
    });
  }

  update() {
    if (this.editForm.invalid) return;

    this.userService.updateUser(this.userId, this.editForm.value).subscribe(() => {
      alert('User Updated Successfully');
      this.router.navigate(['/']);
    });
  }


}
