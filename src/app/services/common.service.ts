import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private loadingController: Ng4LoadingSpinnerService,
    public toastr: ToastrManager,
    private router: Router
  ) { }

  presentLoading() {
    this.loadingController.show();
  }

  hideLoading() {
    this.loadingController.hide();
  }

  showSuccess(message) {
    this.toastr.successToastr(message, 'Success!');
  }

  showError(message) {
    this.toastr.errorToastr(message, 'Oops!');
  }

  logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.router.navigate(['/login']);
  }

  formatDate = (oldDate) => {
    let startDate = new Date(oldDate);
    let day = startDate.getDate();
    let month = startDate.getMonth();
    let year = startDate.getFullYear();
    let newDate = {
      year: year,
      month: (month+1),
      day: day
    };
    return newDate;
  }

}
