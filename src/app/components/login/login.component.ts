import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
    email: '',
    password: ''
  }
  constructor(
    private configService: ConfigService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit = async () => {
    try {
      let resp = await this.configService.postRequest('auth', this.user);
      if(resp){
        localStorage.setItem("accessToken", resp['accessToken']);
        localStorage.setItem("refreshToken", resp['refreshToken']);
        this.router.navigate(['/dashboard']);
      }
    } catch(err) {
      this.commonService.showError(err);
    }
  }

}
