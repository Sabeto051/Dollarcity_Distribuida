import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/modules/core/services/cognito/cognito.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private congito: CognitoService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      // this.authService.createUser(value.email, value.password).then(() => {
      //   this.router.navigate(['/auth/login']);
      // });
      this.congito
        .signUp(value.username, value.email, value.password)
        .then(() => {
          this.router.navigate(['/auth/register/', value.username]);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
