import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SchoolIcon from '@mui/icons-material/School';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PieChartIcon from '@mui/icons-material/PieChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    return (
        <div style={{display:"flex",color:"white",backgroundColor:"grey"}}>
            <div  style={{display:"flex"}} >
                <MenuBookIcon style={{marginTop:"25px",marginLeft:"20px",marginRight:"20px"}}/>
                <h2>Class Dashboard</h2>
            </div>
            <div style={{marginLeft:"20%"}}>
                <Tabs aria-label="icon label tabs example">
                    <Link to="/" style={{textDecoration:"none"}}><Tab icon={<SchoolIcon />} style={{color:"white"}} label="Classes" /></Link>
                    <Link to="/events" style={{textDecoration:"none"}}><Tab icon={<EventSeatIcon />} style={{color:"white"}} label="Events" /></Link>
                    <Link to="/pieChart" style={{textDecoration:"none"}}><Tab icon={<PieChartIcon />} style={{color:"white"}} label="Pie Chart" /></Link>
                </Tabs>
            </div>
        </div>
    )
}