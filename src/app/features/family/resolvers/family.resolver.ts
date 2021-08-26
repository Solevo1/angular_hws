import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Family } from '../models';
import { FamilyService } from '../services/family.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyResolver implements Resolve<Family | undefined> {
  public constructor(
    private readonly familyService: FamilyService,
  ) {}
  public resolve(route: ActivatedRouteSnapshot): Observable<Family | undefined> {
    return (this.familyService.getFamily$(Number(route.params.id)));
  }
}
