import React from 'react'

function SignIn({getAuthCredentials,authCredentials}) {
    return (
        <>

            <form className='mt-4' id='myForm' autoComplete='off'>

                <input className="loginInp" onChange={getAuthCredentials} type="text" name='username' placeholder="Phone number, username, or email" required />
                
                <input className="loginInp" onChange={getAuthCredentials} type="password" name='password' placeholder="Password" required />

                <button type='submit' onSubmit={authCredentials} onClick={authCredentials} className="loginBtn" >Log In</button>
            
            </form> 
            
        </>
    )
}

export default SignIn
