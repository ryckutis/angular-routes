import { CanActivateFn } from '@angular/router';

export const filterAccessToAccountGuard: CanActivateFn = (route, state) => {
  const id = route.params['id'];

  if (id && id == '1') {
    return false;
  }
  return true;
};
