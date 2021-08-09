import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {}

  async getAuthenticatedUser(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('Talogeao');
      return true;
    } catch {
      console.log('NoTalogeao');
      return false;
    }
  }
}
