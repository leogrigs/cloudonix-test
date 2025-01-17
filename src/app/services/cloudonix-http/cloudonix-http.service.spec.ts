import { TestBed } from '@angular/core/testing';
import { CloudoNixHttpService } from './cloudonix-http.service';

describe('HttpService', () => {
  let service: CloudoNixHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudoNixHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
