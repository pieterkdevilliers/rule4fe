import React from 'react';
import LoginButton from './LogIn';
import Logout from './LogOut';
import AOLButton from './AOLButton';

const header = () => {
  return (
      <div className="button-container">
        <div>
          <LoginButton />
        </div>
        <div>
          <Logout />
        </div>
        <div>
          <AOLButton />
        </div>
      </div>
  );
};

export default header;
