import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CognitoService } from 'src/app/modules/core/services/cognito/cognito.service';

@Component({
  selector: 'app-vericode',
  templateUrl: './vericode.component.html',
  styleUrls: ['./vericode.component.scss'],
})
export class VericodeComponent implements OnInit {
  username: string;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cognito: CognitoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.username = params['username'];
    });
  }

  confirmSignUp(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const value = this.form.value;
      this.cognito.confirmSignUp(this.username, value.vericode).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  resendCode() {
    this.form.patchValue({
      vericode: '',
    });
    this.cognito
      .resendConfirmationCode(this.username)
      .then(() => alert('Código Reenviado'));
  }

  buildForm() {
    this.form = this.formBuilder.group({
      vericode: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
