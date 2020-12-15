import React , {Component} from 'react';
import classes from './App.module.css';
import home from '../src/icons/home.png';
import elec from './icons/elec.webp';
import account from './icons/account.png';
import setting from './icons/setting.jpg';
import dancer1 from './icons/dancer1.jpg';
import dancer2 from './icons/dancer2.jpg';
import dancer3 from './icons/dancer3.jpg';
import dancer4 from './icons/dancer4.jpg';
import music1 from './icons/music1.jpg';
import music2 from './icons/music2.jpg';
import music3 from './icons/music3.jpg';
import music4 from './icons/music4.jpg';
class App extends Component {
  
  state = {
    login:false,
    signup:false,
    loggedIn:false,
    elec:false,
    account:false
  };

  signupHandler = () => {
    this.setState({signup:true,login:false})
  }

  loginHandler = () => {
    this.setState({signup:false,login:true})
  }

  loginChecker = () => {
    this.setState({loggedIn:true,signup:false,login:false})
  }

  elecHandler = () => {
    this.setState({loggedIn:true,signup:false,login:false,elec:true,account:false})
  }
  accountHandler = () => {
    this.setState({loggedIn:true,signup:false,login:false,elec:false,account:true})
  } 

  render(){

    let btnClass=classes.button;
    let lbtnClass=classes.button;
    let sbtnClass=classes.button;
    const style={
      right:'10px',
    };
    const elecstyle ={
      height : '30px',
      top: '12px',
      left: '275px'
    }
    const setstyle ={
      height : '40px',
      top: '15px',
      left: '340px'
    }
    const accstyle = {
        height : '25px',
        top: '10px',
        left: '300px'
      }
    

    let content = null;
    let header = null;
    let page = null;
  if(this.state.signup){
    content = (
      <div>
          <form>
            <div>
            <input type = "text"  required/><label className={classes.creds}>Name</label><br></br>
            <input type = "Email"  required /><label className={classes.creds}>Email id</label><br></br>
            <input type = "password"  required /><label className={classes.creds}>Password</label><br></br>
            </div><br></br>
            <div>
            <button type="submit" className={classes.Next}>Next</button>
            </div>

          </form>
      </div>

    )
    sbtnClass=classes.Click;
    lbtnClass=btnClass;

  }
  if (this.state.login){
    content= (
      <div>
          <form>
            <div>
            <input type = "Email"  required /><label className={classes.creds}>Email id</label><br></br>
            <input type = "password"  required /><label className={classes.creds}>Password</label><br></br>
            </div><br></br>
            <div>
            <button type="submit" onClick={this.loginChecker} className={classes.Next}>Next</button>
            </div>

          </form>
      </div>
    )
    lbtnClass=classes.Click;
    sbtnClass=btnClass;
  }
  if(this.state.loggedIn ){
    header=(
      <div className={classes.header}>
        <label className={classes.Protal}>PROTAL</label>
        <input type="text" placeholder="Search" className={classes.search}/>
        <img src={home} className={classes.icon} />
        <img src={elec} className={classes.icon} style={elecstyle} onClick={this.elecHandler} />
        <img src={account} className={classes.icon} style={accstyle} onClick = {this.accountHandler} />
        <img src={setting} className={classes.icon} style={setstyle} />

      </div>
    )
    page= null;
  }
  if (this.state.loggedIn && this.state.elec){
    header=(
      <div className={classes.header}>
        <label className={classes.Protal}>PROTAL</label>
        <input type="text" placeholder="Search" className={classes.search}/>
        <img src={home} className={classes.icon} />
        <img src={elec} className={classes.icon} style={elecstyle} onClick={this.elecHandler} />
        <img src={account} className={classes.icon} style={accstyle} onClick = {this.accountHandler} />
        <img src={setting} className={classes.icon} style={setstyle} />

      </div>
    )
    page = (
      <div>
        <div className={classes.home}>
          <p>Dance</p>
          <p><img src = {dancer1} className={classes.image} />
          <img src = {dancer2} className={classes.image} /
          >< img src ={dancer3} className={classes.image} />
          < img src= {dancer4} className={classes.image}/></p>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className={classes.home}>
          <p>Music</p>
          <p><img src ={music1} className={classes.image} />
          <img src ={music2} className={classes.image} />
          <img src ={music3} className={classes.image} />
          <img src ={music4} className={classes.image} />
          </p>
        </div>
      </div>
    )
  };
  if (this.state.loggedIn === false){
    header=null;
    page = (
      <div className={classes.App}>
     <br></br><br></br><br></br><br></br><br></br>
     <div className={classes.Main_div}>
       <a>Pro</a>ducing <a>Tal</a>ents<br></br>
     </div>
     <div className={classes.container1} >
     Join the new talent community
     </div>
     <br></br>
     <div>
       <button className={lbtnClass} onClick={this.loginHandler}>Login</button>
       <button className={sbtnClass} style={style} onClick={this.signupHandler}>Sign Up</button>
     </div><br></br><br></br>
     {content}
     

   </div> 

    )
  }
  return (
      <div>
      {header}<br></br><br></br>
      {page}
    
   </div>
    
    );  
  }
}

export default App;
