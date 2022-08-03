import React,{useEffect,useState} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {LinkContainer} from 'react-router-bootstrap'
const Header = ({show,setShow,uname,setName}) => {
  const style={cursor:"pointer"};
  const [user, setUser] = useState("");
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))){
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);
  const handleLogout =()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setShow(true);
    setName("");
  }
  
  return (
    <>
    <div className="d-flex navbar justify-content-between flex-row shadow-sm">
        <div className='d-flex flex-row ms-3'>
        <LinkContainer to="/" style={style}>
        <StoreIcon/>
        </LinkContainer>
        <LinkContainer style={style} to="/">
        <h5 className='ms-2 mt-1'>E - Shop</h5>
        </LinkContainer>
        </div>
        <div className="d-flex flex-row">
        <LinkContainer style={style} to="/men"><h6 className='d-block m-2'>Men</h6></LinkContainer>
        <LinkContainer style={style} to="/women"><h6 className='d-block m-2'>Women</h6></LinkContainer>
        <LinkContainer style={style} to="/kids"><h6 className='d-block m-2'>Kids</h6></LinkContainer>
        </div>
        <div className='d-flex flex-row'>
        <LinkContainer style={style} to="/search"><span className='d-block m-2'><SearchIcon/></span></LinkContainer>
        <LinkContainer style={style} to="/cart"><span className='d-block m-2'><ShoppingCartOutlinedIcon/></span></LinkContainer>
        {!show?<><span className='mt-2'>{uname}</span><span style={style} className='m-2' onClick={handleLogout}>{<LogoutIcon/>}</span></>:<LinkContainer style={style} to="/account"><span className='d-block m-2'><PersonOutlineIcon/></span></LinkContainer>}
        
        <div className='nav-link'></div>
        <div className='nav-link'></div>
        </div>
    </div>
    </>
  )
}

export default Header