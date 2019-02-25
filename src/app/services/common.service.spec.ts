import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ShowStatusPipe } from '../pipes/show-status.pipe';

describe('CommonService', () => {
  let commonService = CommonService;
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      LoginComponent,
      DashboardComponent,
      ShowStatusPipe
    ],
    imports: [
      Ng4LoadingSpinnerModule,
      ToastrModule.forRoot(),
      AppRoutingModule,
      FormsModule
    ]
  }));

  it('should be created', () => {
    const service: CommonService = TestBed.get(commonService);
    expect(service).toBeTruthy();
  });
});
