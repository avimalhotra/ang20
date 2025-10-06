import { CanMatchFn } from '@angular/router';

export const authGuard: CanMatchFn = (route, state) => {
  
  return true;  

  // if(location.protocol==="https:"){ return true }
  // return false;

};
