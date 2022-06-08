
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

export const Home = () => {
    //http://localhost:3004/students

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3004/students')
        .then((res)=>{
            setData(res.data);
            console.log('res.data:', res.data);
        })
    })

    console.log('data:', data)

    return (
        <div><br/><br/>
            <div style={{display:"flex",padding:15}}>
            <TextField id="outlined-basic" label="Search..." variant="outlined" />
            </div><br/><br/>
            <div>
                <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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