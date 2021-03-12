import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService:AuthserviceService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    console.log('hi')
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  loginProcess() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(result => {
        if (result.success) {
          console.log(result);
          alert(result);
        }
        else {
          alert(result.message)
        } 
      }
      );
   }
 }
}
