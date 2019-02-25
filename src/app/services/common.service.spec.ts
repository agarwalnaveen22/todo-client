import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

describe('CommonService', () => {
  let commonService = CommonService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      Ng4LoadingSpinnerModule
    ]
  }));

  it('should be created', () => {
    const service: CommonService = TestBed.get(commonService);
    expect(service).toBeTruthy();
  });
});
