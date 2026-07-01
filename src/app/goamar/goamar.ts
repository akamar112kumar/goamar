import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Api } from '../services/api'
import { Homecomponent } from './component/homecomponent/homecomponent';
import { Main } from '../layout/main/main';

@Component({
  selector: 'app-goamar',
  imports: [ReactiveFormsModule, RouterLink,RouterOutlet],
  templateUrl: './goamar.html',
  styleUrl: './goamar.scss',
})
export class Goamar {

  constructor(private api: Api, private router: Router) { }

  protected logins: any[] = [];
  users: any[] = [];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[A-Z]).+/), Validators.minLength(3),Validators.maxLength(8)]),
    ageAccepted: new FormControl(false)
  });


  ngOnInit() {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.api.login_learn().subscribe(
        (response) => {
          const formUser = (this.loginForm.value.username || '').toString().trim().toLowerCase();

          // response may be an object or an array of user objects
          let matched = false;

          if (Array.isArray(response)) {
            matched = response.some((u: any) => {
              return (u && u.username || '').toString().trim().toLowerCase() === formUser;
            });
          } else if (response && typeof response === 'object') {
            matched = ((response.username || '').toString().trim().toLowerCase() === formUser);
          }

          if (matched) {
            // store token/guid if present in response, otherwise generate demo values
            const token = (response && (response.token || response.accessToken)) || 'local-demo-token';
            const guid = (response && (response.guid || response.id)) || this.generateGuid();
            try {
              localStorage.setItem('token', token);
              localStorage.setItem('guid', guid.toString());
            } catch (e) {
              console.warn('Could not access localStorage', e);
            }

            alert('Login successful!');

            // respect returnUrl query param if present (set by guard)
            const currentQuery = this.router.parseUrl(this.router.url).queryParams || {};
            const returnUrl = currentQuery['returnUrl'] || '/layout';
            this.router.navigateByUrl(returnUrl);
          } else {
            alert('Login failed.');
          }
        },
        (error) => {
          console.error('login_learn error', error);
          alert('Login failed: server error.');
        }
      );
    }
  }
  updateForm() {
    this.api.login_learn().subscribe((data) => {
      this.users = data;
    })

  }

  signup() {
    
    this.router.navigate(['/register']);
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
   onhome() {
    this.router.navigate(['/gaommar/home']);
    // navigation or action logic here
  }
}

