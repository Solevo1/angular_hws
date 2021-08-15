import { Directive, Input, OnDestroy, OnInit, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Permission, PermissionService } from '../services/permission.service';

@Directive({
  selector: '[lab-js-permission]'
})
export class PermissionDirective implements OnInit, OnDestroy {
  private readonly subs = new Subscription();
  @Input('lab-js-permission') public allowedPermissions: Permission[] = [];
  public constructor(
    private readonly permissionService: PermissionService,
    @Optional() private readonly viewContainer?: ViewContainerRef,
    @Optional() private readonly templateRef?: TemplateRef<any>,
  ) {}

  public ngOnInit() {
    this.subs.add(
      this.permissionService.getCurrentPermissions$()
        .subscribe((permissions:Permission[]) => {
          if (this.hasPermission(permissions)) {
            this.renderView();
          } else {
            this.clearView();
          }
        })
    );
  }

  public hasPermission(userPermissions: Permission[]): boolean {
    if(this.allowedPermissions.some(allowedPermission=>userPermissions.includes(allowedPermission))) {
      return true;
    }
    return false;
  }

  private renderView() {
    if (this.viewContainer && this.templateRef) {
      this.clearView();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private clearView() {
    if (this.viewContainer) {
      this.viewContainer.clear();
    }
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
