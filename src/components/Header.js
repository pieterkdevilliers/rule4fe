import React from 'react';
import LoginButton from './LogIn';
import Logout from './LogOut';
import AOLButton from './AOLButton';

const header = () => {
  return (
      <div class="navbar navbar-expand-lg bg-body-tertiary d-flex mb-3">
        <div class="navbar-brand">
          <h1 class="display-4">Rule4</h1>
        </div>
        <div class="d-flex justify-content-end grid gap-3">
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
      </div>
  );
};

export default header;
