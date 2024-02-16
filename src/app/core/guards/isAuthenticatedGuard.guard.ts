import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const isAuthenticatedGuardGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('tokenTienda')

  if( !token ) return false;
  return true;
};
