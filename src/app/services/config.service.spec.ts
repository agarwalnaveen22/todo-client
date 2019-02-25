import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ShowStatusPipe } from '../pipes/show-status.pipe';

describe('ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      LoginComponent,
      DashboardComponent,
      ShowStatusPipe
    ],
    imports: [
      HttpClientModule,
      Ng4LoadingSpinnerModule,
      ToastrModule.forRoot(),
      AppRoutingModule,
      FormsModule
    ]
  }));

  it('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
