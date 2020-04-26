import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  processing: boolean;
  submitted: boolean;
  message: string;
  messageClass: string;

  constructor(private userHttpService: AuthenticationService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.userHttpService.userHttpInfo();
    this.createForm();
    // console.log(this.returnUrl)
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.loginForm.controls['username'].disable;
    this.loginForm.controls['password'].disable;
  }

  enableForm() {
    this.loginForm.controls['username'].enable;
    this.loginForm.controls['password'].enable;
  }

  f() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.processing = true;
    this.disableForm();
    this.userHttpService.login(this.f().username.value, this.f().password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/category']);
        },
        error => {
          console.log(error);
          // this.alertService.error(error);
          this.processing = false;
          this.enableForm();
        }
      );
  }

}
