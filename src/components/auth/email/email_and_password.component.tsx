import * as React from 'react';
import { Form } from 'react-bootstrap';

interface IEmailAndPasswordComponentProps {
    emailRef: React.Ref<any>
    passwordRef: React.Ref<any>
}

const EmailAndPasswordComponent: React.FunctionComponent<IEmailAndPasswordComponentProps> = (props) => {
    return <Form.Group >
        <Form.Group controlId="email" >
            <Form.Control
                required
                type='text'
                placeholder="Email"
                ref={props.emailRef}
            />
        </Form.Group>
        <Form.Group  >
            <Form.Control
                required
                id='enterPassword'
                type='password'
                placeholder="Password"
                ref={props.passwordRef}
            />
        </Form.Group>
    </Form.Group>;
};

export default EmailAndPasswordComponent;
