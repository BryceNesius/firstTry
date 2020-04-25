import * as React from 'react';
import FormComponent from '../components/forms/form_component';
import EmailAndPasswordComponent from '../components/auth/email/email_and_password.component';
import SubmitButtonComponent from '../components/forms/submit_button.component';

export interface ILoginScreenProps {
}

export interface ILoginScreenState {
}

export default class LoginScreen extends React.Component<ILoginScreenProps, ILoginScreenState> {

  private emailRef = React.createRef<any>();
  private passwordRef = React.createRef<any>();

  constructor(props: ILoginScreenProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <FormComponent>
        <EmailAndPasswordComponent emailRef={this.emailRef} passwordRef={this.passwordRef}></EmailAndPasswordComponent>
        <SubmitButtonComponent></SubmitButtonComponent>
      </FormComponent>
    );
  }
}
