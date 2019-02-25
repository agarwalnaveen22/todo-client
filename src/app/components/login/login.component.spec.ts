import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowStatusPipe } from 'src/app/pipes/show-status.pipe';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        DashboardComponent,
        ShowStatusPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        Ng4LoadingSpinnerModule,
        ToastrModule.forRoot(),
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
