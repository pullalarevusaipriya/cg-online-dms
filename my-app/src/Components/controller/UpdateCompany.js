import { useDispatch, useSelector  } from "react-redux";
import { useState } from "react";
import { getAllCompanyService,getCompanyByIdService,insertCompanyService} from "../services/CompService";
import axios from "axios";
import Company from "../models/Company";


import { getcompanyById,getAllCompany, deletecompanyById, addcompany, updatecompany } from "../../redux/CompSlice";

const UpdateCompany = () => {

    const [companyId, setCompanyId] = useState('');
    const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);

     const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
    // const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    const [updateCompanyObj, setUpdateCompanyObj] = useState('');
    // const [deleteCompany, setDeleteCompany] = useState('');
    // const companyDelete = useSelector((state) => state.company.companyDelete);

    const handleUpdateCompany = (e) => {
        console.log(e.target.value);
        setUpdtCompanyObj({
            ...updtCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitUpdateCompany = (evt) => {
        evt.preventDefault();
        console.log('addCompany');
        axios.put(`http://localhost:8082//company/update`, updtCompanyObj)
            .then((response) => {
                setUpdateCompanyObj(response.data);
                alert('company details updated successfully.');
                setNewCompanyObj({ companyName:'', mobileNumber:'',email:'',password:'' ,address:''})
            
            })
            .catch(() => {
                alert("Company could not be found.");
            });
    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Company Component</h1>
            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Company</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewCompanyDiv">
            <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    value={updtCompanyObj.companyId}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Id" />
                    <br/><br/>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={updtCompanyObj.companyName}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Name" />
                    <br/><br/>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={updtCompanyObj.address}
                    onChange={handleUpdateCompany}
                    placeholder="Enter address" />
                    <br/><br/>
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtCompanyObj.mobileNumber}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Mobile Number" />
                    <br/><br/>
                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtCompanyObj.email}
                    onChange={handleUpdateCompany}
                    placeholder="Enter Email" />   
                    <br/><br/>
                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtCompanyObj.password}
                    onChange={handleUpdateCompany}
                    placeholder="Enter password" /> 
                    <br/><br/>  
                <input
                    type="submit"
                    // type="button"
                    value="update Company"
                    onClick={submitUpdateCompany}
                />
            </div>
        <p>Updated Company Data: {updateCompanyObj.CompanyId} {updateCompanyObj.companyName} {updateCompanyObj.address} {updateCompanyObj.mobileNumber} {updateCompanyObj.email}  {updateCompanyObj.password}</p>
        </div>
 
        </div>
    );
}

 
export default UpdateCompany;