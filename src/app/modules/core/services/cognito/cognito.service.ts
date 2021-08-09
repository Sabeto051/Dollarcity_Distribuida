import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-2:342db6ba-3d18-4dff-8ffa-2315ff0cf318',
    region: 'us-east-2',
    userPoolId: 'us-east-2_M39Idxzru',
    userPoolWebClientId: '49qntc23sv31ckdunjpujhplue',
  },
});
Auth.configure({
  Auth: {
    identityPoolId: 'us-east-2:342db6ba-3d18-4dff-8ffa-2315ff0cf318',
    region: 'us-east-2',
    userPoolId: 'us-east-2_M39Idxzru',
    userPoolWebClientId: '49qntc23sv31ckdunjpujhplue',
  },
});

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {}

  async getAuthenticatedUser(): Promise<boolean> {
    console.log(Auth.currentAuthenticatedUser());
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
