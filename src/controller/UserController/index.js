import { BASE_URL } from '../../constants/API';

export class UserController {
  static userLogin(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("email", details?.email);
        formdata.append("password", details?.password);
        formdata.append("device_token_id", details?.deviceId);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/auth/login", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static signUp(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        var formdata = new FormData();
        formdata.append("step", details?.step);
        formdata.append("mobile", details?.mobile);
        formdata.append("otp", details?.otp);
        formdata.append("email", details?.email);
        formdata.append("password", details?.password);
        formdata.append("confirm_password", details?.password);
        formdata.append("device_token_id", details?.deviceId);
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/auth/signup?asx", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static resetOTP(email) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("email", email);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/auth/resendOTP", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static resetPassword(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("step", details?.step);
        formdata.append("email", details?.email);
        formdata.append("otp", details?.otp);
        formdata.append("password", details?.password);
        formdata.append("confirm_password", details?.confirmPassword);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/auth/resetPassword", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static forgotPassword(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("email", email);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/auth/forgotPassword", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static logout() {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/logout", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
  static changePassword(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 12|NLJPEwZ7u48gsQo96qAiLr1eN0tJmOZnVzBFLEkB");

        var formdata = new FormData();
        formdata.append("current_password", details?.currentPassword);
        formdata.append("password", details?.password);
        formdata.append("confirm_password", details?.confirmPassword);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/updatePassword", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }
}
