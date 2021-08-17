import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { FamilyService } from '../services/family.service';

import { FamilyResolver } from './family.resolver';

describe('FamilyResolver', () => {
  let resolver: FamilyResolver;
  let service: FamilyService;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FamilyService,
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            params: {
              id: '123'
            }
          }
        },
      ]
    });
    resolver = TestBed.inject(FamilyResolver);
    service = TestBed.inject(FamilyService);
    route = TestBed.inject(ActivatedRouteSnapshot);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should call FamilyService.getFamily$ with correct parameters', () => {
      spyOn(service, 'getFamily$').and.callThrough();
      resolver.resolve(route);
      expect(service.getFamily$).toHaveBeenCalledWith(123);
    });
  })
});
