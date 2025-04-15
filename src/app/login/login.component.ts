import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  standalone: false,
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, submit: SubmitEvent) {
    console.log(loginForm.value, loginForm.valid, submit);
  }

  onEmailChange(newEmailValue: string) {
    console.log(`Current email value is: ${newEmailValue}`);
  }
}
