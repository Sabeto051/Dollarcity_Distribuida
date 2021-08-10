import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/modules/core/services/cognito/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cognito: CognitoService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      // this.authService
      //   .login(value.email, value.password)
      //   .then(() => {
      //     this.router.navigate(['/admin']);
      //   })
      //   .catch(() => {
      //     alert('El Usuario no es válido :(');
      //   });
      this.cognito.signIn(value.username, value.password).then(() => {
        this.router.navigate(['']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
