import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
  ) { }

  postRequest = (url, data) => {
    return new Promise(async (resolve) => {      
      this.commonService.presentLoading();
      let headerParams = this.setToken();      
      this.http.post(this.apiUrl + url, data, {
        headers: new HttpHeaders(headerParams)
      })
        .subscribe(res => {
          this.commonService.hideLoading();
          resolve(res);
        }, (err) => {
          this.commonService.hideLoading();
          this.handleException(err);
          resolve(false);
        });
    });
  }

  getRequest = (url, data) => {
    return new Promise(async (resolve) => {
      this.commonService.presentLoading();
      let headerParams = this.setToken();
      this.http.get(this.apiUrl + url, {
        headers: new HttpHeaders(headerParams),
        params: data
      })
        .subscribe(res => {
          this.commonService.hideLoading();
          resolve(res);
        }, (err) => {
          this.commonService.hideLoading();
          this.handleException(err);
          resolve(false);
        });
    });
  }

  patchRequest = (url, data) => {
    return new Promise(async (resolve) => {      
      this.commonService.presentLoading();
      let headerParams = this.setToken();      
      this.http.patch(this.apiUrl + url, data, {
        headers: new HttpHeaders(headerParams)
      })
        .subscribe(res => {
          this.commonService.hideLoading();
          resolve(true);
        }, (err) => {
          this.commonService.hideLoading();
          this.handleException(err);
          resolve(false);
        });
    });
  }

  deleteRequest = (url, data) => {
    return new Promise(async (resolve) => {      
      this.commonService.presentLoading();
      let headerParams = this.setToken();      
      this.http.delete(this.apiUrl + url, {
        headers: new HttpHeaders(headerParams),
        params: data
      })
        .subscribe(res => {
          this.commonService.hideLoading();
          resolve(true);
        }, (err) => {
          this.commonService.hideLoading();
          this.handleException(err);
          resolve(false);
        });
    });
  }

  setToken = () => {
    try {
      let value = localStorage.getItem('accessToken');
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+value
      }
    } catch (err) {
      return {
        'Content-Type': 'application/json'
      };
    }
  }

  handleException(err) {
    if (err['status'] == 400) {
      this.commonService.showError(err['error']['error']);
    } else if(err['status']==403) {
      this.commonService.logout();
    } else {
      this.commonService.showError(err['statusText']);
    }
  }
}
