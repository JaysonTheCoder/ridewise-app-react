import React from 'react'
import '../css/Login.css'
import logo from '../assets/img/logo.png'
import '../css/components/Input.css'
import HomeScreen from './HomeScreen'
import mockData from '../mockData.json'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

function Login() {
    const [ loading, setLoading ] = React.useState(true)
    const [ userLoggedIn, setUserLoggedIn ] = React.useState(false)
    const RegisterForm = () => {
      return(
        <div>
          register
        </div>

      )
    }

    function loginWithUsernameAndPassword(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginForm = () => {
      const [ username, setUsername ] = React.useState('')
      const [ password, setPassword ] = React.useState('')
      const [ borderColorForusername, setBorderColorForusername ] = React.useState('#000')
      const [ borderColorForpassword, setBorderColorForPassword ] = React.useState('#000')
      
      async function handleSubmit(e) {
        e.preventDefault()
        // try{
        //   const validate = mockData.find((user)=> user.username == username && user.password == password)
        //   if( !validate ) {
        //     console.log('Error login please check password or username and try again!')
        //     setDataAuthenticated(false)
        //   }else if( validate ){
        //     console.log('Login succes!')
        //     setDataAuthenticated(true)
        //   }
        // }catch(err) {
        //   console.log(err);
        // }
        if(username && password) {
          try{
            await loginWithUsernameAndPassword(username, password);
            await setUserLoggedIn(true)
          }catch(err) {
            throw err
          }finally{
            setLoading(false);
          }
        }
        
    }
    
      function handleFocus(e) {
        if(e.target.name == 'username') {
          setBorderColorForusername( "#7A84F1" )
        }else if(e.target.name == 'password') {
          setBorderColorForPassword( "#7A84F1" )
        }
      }
      function handleBlur(e) {
        if(e.target.value == '' && e.target.name == 'username') {
          setBorderColorForusername('#000')
        }else if( e.target.value == '' && e.target.name == 'password') {
          setBorderColorForPassword('#000')
        }
      }

    
      return(
        <div className='main-container'>
          <img src={ logo } className='myLogo' alt="logo" />
          <form onSubmit={ handleSubmit } method='post' action="">
            <div style={{
              borderColor: borderColorForusername
            }} className="input-div">
              <input onChange={(e)=>setUsername(()=> e.target.value)} name="username" onBlur={ handleBlur } onFocus={ handleFocus } type="text" required/>
              <span>Enter your username</span>
            </div>
            <div style={{
              borderColor: borderColorForpassword
            }} className="input-div">
              <input name="password" onChange={(e)=>setPassword(()=> e.target.value)} onBlur={ handleBlur } onFocus={ handleFocus } type="password" required/>
              <span>Enter your password</span>
            </div>
            <div className="opt">
              <button onClick={ ()=> setScreenContent(()=> <RegisterForm />)}>Register another account?</button>
            </div>
            <button type='submit'>login</button>
          </form>
        </div>
      )
    }
    
    const [ ScreenContent, setScreenContent ] = React.useState(<LoginForm />)
  return (
    <React.Fragment>
      {!userLoggedIn ? <HomeScreen/>:<HomeScreen />}
    </React.Fragment>
  )
}

export default Login
