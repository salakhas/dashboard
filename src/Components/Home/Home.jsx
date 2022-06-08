
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../Home/Home.css"

export const Home = () => {

    const [data,setData] = useState([]);
    const [arr,setArr] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3004/students')
        .then((res)=>{
            setData(res.data);
            setArr(res.data);
            console.log('res.data:', res.data);
        })
    },[])
    const term = Array.from(new Set(arr.map(item => item.term)));
    const currentYear = Array.from(new Set(arr.map(item => item.currentYear)));
    console.log('term:', term)
    console.log('currentYear:', currentYear)
    console.log('data:', data)


    const handleChange1=(e)=>{
        console.log('e.target.value:', e.target.value)
        axios.get(`http://localhost:3004/students?term=${e.target.value}`)
        .then((res)=>{
            console.log('res.data:', res.data);
            setData(res.data);
            console.log('data:>>>', data)
        })
    }
    const handleChange2=(e)=>{
        axios.get(`http://localhost:3004/students?currentYear=${e.target.value}`)
        .then((res)=>{
            console.log('res.data:', res.data);
            setData(res.data);
            console.log('data:>>><<...', data)
        })
    }
    return (
        <div><br/><br/>
            <div className='filters'>
            <TextField id="outlined-basic" label="Search by name" variant="outlined" onChange={(e)=>{
                    axios.get(`http://localhost:3004/students?name=${e.target.value}`)
                    .then((res)=>{
                        setData(res.data);
                    })
                }}/>
            <TextField id="outlined-basic" label="Search by roll number" variant="outlined" onChange={(e)=>{
                    axios.get(`http://localhost:3004/students?rollNumber=${e.target.value}`)
                    .then((res)=>{
                        setData(res.data);
                    })
                }}/>
            <TextField id="outlined-basic" label="Search by contact number" variant="outlined" onChange={(e)=>{
                    axios.get(`http://localhost:3004/students?contactNumber=${e.target.value}`)
                    .then((res)=>{
                        setData(res.data);
                    })
                }}/>    
            <div style={{display:"flex"}}>
            <div style={{marginTop:"15px",marginLeft:"5px"}}>
            <InputLabel id="demo-simple-select-label">Term</InputLabel>
            </div>
            <div style={{marginLeft:"5px"}}>
                <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Term"
            onChange={handleChange1}
            >
            {term.map((el)=>{
                return <MenuItem value={el}>{el}</MenuItem>
            })}
            </Select>
            </div>
            </div>
                <div style={{display:"flex"}}>
                <div style={{marginTop:"15px",marginLeft:"5px"}}>
                <InputLabel id="demo-simple-select-label" >Current Year</InputLabel>
                </div>
                <div style={{marginLeft:"5px"}}>
                    <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={''}
                label="Current Year"
                onChange={handleChange2}
                >
                {currentYear.map((el)=>{
                    return <MenuItem value={el}>{el}</MenuItem>
                })}
                </Select>
                </div>
                </div>
            </div><br/><br/>
            <div className='tableWidth'>
                <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Name </TableCell>
                        <TableCell>Roll No.</TableCell>
                        <TableCell>Contact Number</TableCell>
                        <TableCell>Term</TableCell>
                        <TableCell>Current year</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell>
                            {row.id}
                        </TableCell>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell>{row.rollNumber}</TableCell>
                        <TableCell>{row.contactNumber}</TableCell>
                        <TableCell>{row.term}</TableCell>
                        <TableCell>{row.currentYear}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    )
}