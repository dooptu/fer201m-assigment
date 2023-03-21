import React, { useState } from "react";
import { url_api } from "../../../API/api";
import PopUpEditUser from './Popup/PopUpEditUser';
import { toast } from "react-toastify";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const URL_RESIDENT = url_api+"/security/updateCustomer_Resident?idUser=";


function PaginationUser(props) {
    const role = props.role;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = props.pageSize || 10; // default to 10 if not provided
    const totalPages = Math.ceil(props.data.length / pageSize);
    const [idUser, setIdUser] = useState('');
    const [role1, seTableRowole1] = useState(role) 

    console.log(role1)

    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);
    const togglePopupCreateRes = () => {
        setShowPopupCreateRes(!showPopupCreateRes);
    };


    const set = (item) => {
        setIdUser(item)
    }

    const handleClick = (event, page) => {
        event.prevenTableCellefault();
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? "active" : null}>
                    <a href="#" onClick={(e) => handleClick(e, i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };

    const handleChangeStatus = (id) =>{
        if (role === 'C') {
        console.log(url_api + '/security/BanOrUnBanCustomer/' + id)
            fetch(url_api + '/security/BanOrUnBanCustomer/' + id, {
                method: 'PUT',
                header: {
                    "Access-ConTableRowol-Allow-Origin": url_api + 'BanOrUnBanCustomer/' + id ,
                    "Accept": "*/*",
                    "Content-Type": "application/text",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-ConTableRowol": "no-cache",
                },
                
            }).then((res) => {
                
                console.log(res);
                
                toast.success('Register successfully.');
                
            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        }
    }

    const renderListItems = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return props.data.slice(start, end).map((item, index) => (
            
            <TableRow key={start + index}>
                <TableCell>{start + index + 1}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.dateofbirth}</TableCell>
                <TableCell>{item.gender ? "Male" : "Female"}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell style={{ color: item.status_Account === false ? '#118408' : '#E23F31', fontWeight: 'bold' }}>
                    <a style={{texTableCellecoration:'underline', cursor:'pointer'}} onClick={() => {handleChangeStatus(item.id)}}>

                        {item.status_Account === false ? 'Active' :  'Banned' }
                    </a>
                </TableCell>
                <TableCell>
                    <form onSubmit={''}>
                        <button onClick={() => { togglePopupCreateRes(); set(item.id) }} style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>

                    </form>
                </TableCell>
                <PopUpEditUser idUser={idUser} handleClose={togglePopupCreateRes} show={showPopupCreateRes} role='User' url={URL_RESIDENT}></PopUpEditUser>
                <>{console.log(item.status_Account)}</>
            </TableRow>

        ));
    };

    return (
        <>
            <tbody>{renderListItems()}</tbody>
            <TableRow className="pagination" style={{ float: 'right' }}>{renderPageNumbers()}</TableRow>

        </>
    );
}

export default PaginationUser;
