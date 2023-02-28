import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginPageDesign';
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', Validators.required);
  LoginForm: FormGroup;
  error: String;
  reset = false;
  hide = true;
  
  ngOnInit(){
    this.LoginForm = new FormGroup({
        'email' : new FormControl(null, [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
        'password': new FormControl(null, [Validators.required,Validators.minLength(6)])
    })
  }

  onSubmit(){
    console.log(this.LoginForm);
    if (!this.LoginForm.valid){
        return;
    }
    alert("Success !")
  }
}
