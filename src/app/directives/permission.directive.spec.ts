import { Permission, PermissionService } from '../services/permission.service';
import { PermissionDirective } from './permission.directive';

describe('PermissionDirective', () => {
  it('should create an instance', () => {
    const directive = new PermissionDirective(new PermissionService());
    expect(directive).toBeTruthy();
  });

  describe('hasPermission', () => {
    it('should return true if user has allowed permission', () => {
      const userPermissions = [Permission.ADMIN];
      const directive = new PermissionDirective(new PermissionService());

      directive.allowedPermissions = [Permission.ADMIN];
      const hasPermission = directive.hasPermission(userPermissions);

      expect(hasPermission).toBe(true);
    });

    it('should return true if user has at least one allowed permission', () => {
      const userPermissions = [Permission.ADMIN];
      const directive = new PermissionDirective(new PermissionService());

      directive.allowedPermissions = [Permission.ADMIN, Permission.USER];
      const hasPermission = directive.hasPermission(userPermissions);

      expect(hasPermission).toBe(true);
    });

    it('should return true if user has at least one of allowed permissions', () => {
      const userPermissions = [Permission.ADMIN, Permission.USER];
      const directive = new PermissionDirective(new PermissionService());

      directive.allowedPermissions = [Permission.ADMIN];
      const hasPermission = directive.hasPermission(userPermissions);

      expect(hasPermission).toBe(true);
    });

    it('should return false if user has no allowed permissions', () => {
      const userPermissions = [Permission.USER];
      const directive = new PermissionDirective(new PermissionService());

      directive.allowedPermissions = [Permission.ADMIN];
      const hasPermission = directive.hasPermission(userPermissions);

      expect(hasPermission).toBe(false);
    });
  });
});
