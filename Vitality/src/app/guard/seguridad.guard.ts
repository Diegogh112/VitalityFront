<<<<<<< HEAD
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

export const segGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
    const lService=inject(LoginService)
=======
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

export const segGuard = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const lService=inject(LoginService)
>>>>>>> fb4464bdd2d10e1debf9cfb6dba310edb07e5f23
    const router=inject(Router)
    const rpta=lService.verificar();
    if(!rpta){
      router.navigate(['/login']);
      return false;
    }
    return rpta;
<<<<<<< HEAD
};
=======
};
>>>>>>> fb4464bdd2d10e1debf9cfb6dba310edb07e5f23
