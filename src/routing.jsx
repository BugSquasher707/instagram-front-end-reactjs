import React,{Fragment, useState} from 'react'
import LoginPage from './components/loginPage/loginPage'
import HomePage from './components/homePage/homePage'
import { Route,Redirect } from 'react-router-dom'

function Routing() {

    const [isLogin, setIsLogin] = useState(true)

    let changeLogin=()=>{
        if(isLogin){
            setIsLogin(false)
        }
        else{
            setIsLogin(true)
        }    
    }

    const [regData, setRegData] = useState('')

    let getNamePass = (e) => {
        setRegData({...regData, [e.target.name] : e.target.value})
    }

    let sendRegData = (e) => {
        e.preventDefault()

        if(regData){
            let data = JSON.parse(localStorage.getItem('users'))
            if(!data){
                localStorage.setItem('users', JSON.stringify([regData]))
            }
            else{
                data.push(regData)
                localStorage.setItem('users', JSON.stringify(data))
            }
            alert('Resgistration Successfully!')
            setIsLogin(true)
            document.getElementById("myForm").reset();
        }
        else{
            alert('Please Fill the Form')
        }
    }

    const [getAuthData, setGetAuthData] = useState('')

    let getAuthCredentials = (e) => {
        setGetAuthData({...getAuthData, [e.target.name]: e.target.value})
    }

    const [filterUsername, setFilterUsername] = useState('')

    let authCredentials = (e) => {
        e.preventDefault();
        setGetAuthData('')
        document.getElementById("myForm").reset();

        let data = JSON.parse(localStorage.getItem('users'))
        if(data){
            let filteredData = data.filter((item)=>{
                return (item.username === getAuthData.username && item.password === getAuthData.password)
            })

            if(filteredData.length > 0){
                setFilterUsername(filteredData)
            }
            else{
                setFilterUsername('')
                alert('Invalid Credentials')
            }
        }
        else{
            if(!getAuthData){
                alert('Please Enter Credentials')
            }
            else{
                alert('Please Register Yourself First')
            }
        }
    }

    console.log(filterUsername , 'Successfull');

    let handleLogOut = () => {
        setFilterUsername('')
    }

    return (
        <Fragment>
            
            <Route path='/' exact>

                {filterUsername.length > 0 ? <Redirect to='/homePage' /> : <LoginPage getNamePass={getNamePass} sendRegData={sendRegData} changeLogin={changeLogin} isLogin={isLogin} getAuthCredentials={getAuthCredentials} authCredentials={authCredentials}/>}            

            </Route>

            <Route path='/homePage'>

                <HomePage filterUsername={filterUsername} handleLogOut={handleLogOut} />

            </Route>

        </Fragment>
    )
}

export default Routing
