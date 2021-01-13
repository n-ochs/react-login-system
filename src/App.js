import React from 'react';
import LoginForm from './components/AuthForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        nochs: {
          password: 'supersecret',
        }
      }
    };
  };

  render() {
    return (
      <div className="App">
        { /* Auth Form */ }
        <LoginForm />
      </div>
    );
  };

  _checkCredentials = (username, password) => {
    //Find a user inside app state, check password if found
    console.log('checking username and password');
    const userObject = this.state.credentials[username];

    if (userObject && (userObject.password === password)) {
      return {
        valid: true,
        message: "Logged in"
      };
    } else {
      return {
        valid: false,
        message: "Invalid username or password"
      };
    };
  };
};

export default App;
