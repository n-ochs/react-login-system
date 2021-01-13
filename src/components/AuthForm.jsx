import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        //initial state goes here
        this.state = {
            username: '',
            password: '',
            response: {
                message: null,
                valid: false
            }
        };
    };

    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={(event) => {
                            this._updateField('username', event.target.value);
                        }} />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={(event) => {
                            this._updateField('password', event.target.value);
                        }} />
                    </label>
                    <input type="submit" />
                    <Message {...this.state.response} />
                </form>
            </div>
        );
    };

    _submitForm = (event) => {
        event.preventDefault();
        const response = this.props.handleSubmit(this.state.username, this.state.password);
        this.setState({
            response
        }, () => {
            console.log(response);
            console.log(this.state);
        });
    };

    _updateField = (field, value) => {
        this.setState({
            [field]: value, //'username' and 'password' gets passed down here as field
            response: {
                message: '',
                valid: false
            }
        }, () => {
            console.log(`${field} is now ${value}`)
        })
    };

};

export default LoginForm

class Message extends React.Component {
    render() {
        const { message, valid } = this.props;
        //the same as
        // const message = this.props.message;
        // const valid = this.props.valid;

        if (message) {
            return (
                //show the message to the end user
                <h3 className={valid ? 'success' : 'error'}>{message}</h3>
            );
        } else {
            return null
        };
    };
};

// export default Message;