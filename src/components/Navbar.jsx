import styled from '@emotion/styled'
import { useState } from 'react';
import { AppBar,Toolbar,Typography,Box,
InputBase,Badge, Avatar, Menu, MenuItem} from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Mail, NotificationAdd, Notifications, Widgets } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.vars.shape.borderRadius,
  width:"40%"
  }))


const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))


const Navbar = () => {
  const  [open,setOpen]=useState(false)
  return (
    <CssVarsProvider>
    <AppBar position="sticky">
      <StyledToolbar>
      <Typography variant="h6"
        sx={{
          display:{xs:"none",sm:"block"}
        }}
      >
      LAMA DEV</Typography>
      <PetsIcon
        sx={{
          display:{xs:"block",sm:"none"}
        }}
      />
        <Search>
           <InputBase
            placeholder='search'
           />
        </Search>
      <Icons>
        <Badge badgeContent={3} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications />
        </Badge>
          <Avatar
            onClick={(e)=>setOpen(true)}
           />
      </Icons>
      {/* mobile device */}
      <UserBox>
      <Avatar
      onClick={(e)=>setOpen(true)} />
      <Typography variant='span'>Ouail</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={()=>setOpen(false)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    </CssVarsProvider>
  )
}

export default Navbar
