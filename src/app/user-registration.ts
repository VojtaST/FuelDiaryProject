export class UserRegistration {
  userName:string;
  userPassword:string;
  userEmail:string;
  userFirstName:string;
  userLastName:string;

  constructor(userName: string, userPassword: string, userEmail: string, userFirstName: string, userLastName: string) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
  }
}
