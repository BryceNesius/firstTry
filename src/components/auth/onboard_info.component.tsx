import * as React from 'react';
import { Form } from 'react-bootstrap';
import { VerticalPadding } from '../../padding.component';

interface IOnboardInfoComponentProps {
  firstNameRef: React.Ref<any>
  lastNameRef: React.Ref<any>
}

const OnboardInfoComponent: React.FunctionComponent<IOnboardInfoComponentProps> = (props) => {
  return <Form.Group controlId="formName">
    <Form.Label>What's your name?</Form.Label>
    <Form.Control
      required
      type='text'
      placeholder="First name"
      ref={props.firstNameRef} />
    <VerticalPadding padding='2vh' />
    <Form.Control
      required
      type='text'
      placeholder="Last name"
      ref={props.lastNameRef} />
  </Form.Group>;
};

export default OnboardInfoComponent;
