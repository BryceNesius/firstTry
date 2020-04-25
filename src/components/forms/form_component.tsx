import * as React from 'react';
import { Form } from 'react-bootstrap';


export interface IFormComponentProps {
    handleSubmit(e): any
    children: any

}

export interface IFormComponentState {
    validated: boolean
}

export default class FormComponent extends React.Component<IFormComponentProps, IFormComponentState> {
    props: any
    constructor(props: IFormComponentProps) {
        super(props);
        this.props = props;
        this.state = {
            validated: false
        }
    }

    public render() {
        return (
            <Form noValidate className='fill-vertical' id='formComponent' validated={this.state.validated}

                onSubmit={e => {

                    e.preventDefault();
                    if (validate(e, this)) {
                        this.props.handleSubmit(e, this);
                    }
                }}>
                {this.props.children}
            </Form>
        );
    }


}

const validate = (event, _this) => {
    const form = event.currentTarget;
    const _valid = form.checkValidity();
    if (!_valid) {
        event.preventDefault();
        event.stopPropagation();
    }

    _this.setState({ validated: true });
    return _valid;
}
