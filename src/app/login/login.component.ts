import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ChipsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loading = false;
  submitted = false;
  returnUrl?: string;
  username?: string;
  password?:string;
  error?: string;
 constructor(private authenticationService:AuthenticationService,  private route: ActivatedRoute,
             private router: Router) {
   if (this.authenticationService.currentUserValue) {
     this.router.navigate(['/dashboard']);
   }
 }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onSubmit() {
// alert(this.username)
    this.submitted = true;



    this.loading = true;
    if(this.username && this.password)
    this.authenticationService.login(this.username, this.password)
      .subscribe(
        data => {
          if(data==null){
            this.error="معلومات غير صحيحة المرجو التأكد؟"

          }else
          this.router.navigate([this.returnUrl]);

        },
        error => {

          //this.alertService.error(error);

          this.loading = false;
        });
  }
}
