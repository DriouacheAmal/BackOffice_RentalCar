import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: { email: string, password: string } = { email: '', password: '' };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userLoggedIn: string | null = '';
  //form: any;

  constructor(private authorizationService: AuthorizationService, private tokenStorage: TokenStorageService, private router: Router) { }
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get f() { 
    return this.form.controls; 
  }

  ngOnInit(): void {
    
   } 
  
   onLogin() {
    if (this.form.valid) {
      const email = this.form.controls['email'].value;
      const password = this.form.controls['password'].value;
      this.authorizationService.login(this.credentials.email, this.credentials.password)
        .subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.userLoggedIn = this.tokenStorage.getEmail() || '';
            this.router.navigateByUrl('/dashboard');
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
          complete: () => console.log('Login complete')
        });
    }
  }
  
}
