import React, { useState } from 'react';

import { LoginComponent } from '../../components';
import { SignUp } from '../../components/';

const Login = () => {
    const [hasAccount, setHasAccount] = useState(false);

    return (
        <>
            {hasAccount ? (
                <LoginComponent props={hasAccount} />
            ) : (
                <SignUp props={hasAccount} />
            )}
        </>
    );
};

export default Login;
