import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { from } from 'rxjs';
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-east-2:342db6ba-3d18-4dff-8ffa-2315ff0cf318',
//     region: 'us-east-2',
//     userPoolId: 'us-east-2_M39Idxzru',
//     userPoolWebClientId: '49qntc23sv31ckdunjpujhplue',
//   },
// });
Auth.configure({
  Auth: {
    identityPoolId: 'us-east-2:342db6ba-3d18-4dff-8ffa-2315ff0cf318',
    region: 'us-east-2',
    userPoolId: 'us-east-2_M39Idxzru',
    userPoolWebClientId: '49qntc23sv31ckdunjpujhplue',
    identityPoolRegion: 'us-east-2',
  },
});

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {}

  async signUp(username: string, email: string, password: string) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // phone_number, // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async confirmSignUp(username: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async signIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async getAuthenticatedUser(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      // console.log('Talogeao');
      return true;
    } catch {
      // console.log('NoTalogeao');
      return false;
    }
  }
}
