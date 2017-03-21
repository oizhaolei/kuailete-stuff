import React from 'react';

import Nav from '../components/nav.js';

const User =  ({ children}) => (
    <div>
    <Nav />
    {children}
    </div>
);
export default User;
