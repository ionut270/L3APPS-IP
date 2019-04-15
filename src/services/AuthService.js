import firebaseProvider from "../config/FireConfig";

export default class AuthService {
  //registration service
  onSignUpUser = (firstName, lastName, signUpEmail, signUpPassword) => {
    return new Promise((resolve, reject) => {
      const auth = firebaseProvider.auth();
      const promise = auth.createUserWithEmailAndPassword(
        signUpEmail,
        signUpPassword
      );
      promise.then(
        rsp => {
          //register this account in database
          const { user } = rsp;
          let userId = user.uid;

          this.createNewAccount({
            userId,
            firstName,
            lastName,
            signUpEmail
          }).then(() => {
            const message = "Your account it was successfully registered";
            resolve({ message: message });
          });
        },
        err => {
          console.log(err);
          const error = "Something went wrong...";
          reject({ message: error });
        }
      );
    });
  };

  createNewAccount = payload => {
    const defaults = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.signUpEmail
    };
    return firebaseProvider
      .database()
      .ref("users")
      .child(payload.userId)
      .update({ ...defaults });
  };

  //login service
  onSignInUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const auth = firebaseProvider.auth();
      const promise = auth.signInWithEmailAndPassword(email, password);
      promise.then(
        rsp => {
          const { user } = rsp;
          let userId = user.uid;
          this.getUserInfo(userId).then(rsp => {
            const response = rsp.val();
            response["userId"] = userId;
            resolve(response);
          });
        },
        err => {
          console.log(err);
          const error = "Email or password is wrong!";
          reject({ message: error });
        }
      );
    });
  };

  checkIfLoggedIn = () => {
    return new Promise((resolve, reject) => {
      const auth = firebaseProvider.auth();
      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser != null) {
          this.getUserInfo(firebaseUser.uid)
            .then(rsp => {
              localStorage.setItem("userId", firebaseUser.uid);
              localStorage.setItem("firstName", rsp.val().firstName);
              localStorage.setItem("lastName", rsp.val().lastName);
            })
            .then(() => {
              resolve(true);
            });
        } else {
          resolve(false);
        }
      });
    });
  };

  getUserInfo = id => {
    return firebaseProvider
      .database()
      .ref("users")
      .child(id)
      .once("value", snapshot => {
        return snapshot;
      });
  };

  logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    const auth = firebaseProvider.auth();
    return auth.signOut();
  };
}
