import React from 'react'

function SignUp({getNamePass, sendRegData}) {
    return (
        <>

            <form className='mt-4' id='myForm' autoComplete='off'>
            
                <input className="loginInp" onChange={getNamePass} type="text" name='emailPhone' placeholder="Mobile number or Email" required />
            
                <input className="loginInp" onChange={getNamePass} type="text" name='fullName' placeholder="Full Name" required />
            
                <input className="loginInp" onChange={getNamePass} type="text" name='username' placeholder="Username" required />
            
                <input className="loginInp" onChange={getNamePass} type="password" name='password' placeholder="Password" required />
            
                <button type='submit' onSubmit={sendRegData} onClick={sendRegData} className="loginBtn" >Sign up</button>
            
            </form>

        </>
    )
}

export default SignUp
