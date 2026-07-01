import { CanActivateFn } from '@angular/router';

export const authorsGuard: CanActivateFn = (route, state) => {
  return true;
};
