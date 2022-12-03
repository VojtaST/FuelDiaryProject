export class UserRegistration {
  userName:string;
  userPassword:string;
  userEmail:string;
  userFirstName:string;
  userSurname:string;

  constructor(userName: string, userPassword: string, userEmail: string, userFirstName: string, userSurname: string) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userFirstName = userFirstName;
    this.userSurname = userSurname;
  }
}
