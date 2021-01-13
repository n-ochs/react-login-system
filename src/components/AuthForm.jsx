import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        //initial state goes here
        this.state = {
            username: '',
            password: ''
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
                </form>
            </div>
        );
    };

    _submitForm = () => {

    };

    _updateField = (field, value) => {
        this.setState({
            [field]: value //'username' and 'password' gets passed down here as field
        }, () => {
            console.log(`${field} is now ${value}`)
        })
    };

};

export default LoginForm