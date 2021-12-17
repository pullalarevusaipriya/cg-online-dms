import { useDispatch, useSelector  } from "react-redux";
import { useState } from "react";
import { getAllCompanyService,getCompanyByIdService,insertCompanyService} from "../services/CompService";
import axios from "axios";
import Company from "../models/Company";


import { getcompanyById,getAllCompany, deletecompanyById, addcompany, updatecompany } from "../../redux/CompSlice";

const DeleteCompany = () => {

    const [companyId, setCompanyId] = useState('');
    const dispatch = useDispatch();
    // const companyDataFromStore = useSelector((state) => state.company.companyState);
    // const companyList = useSelector((state) => state.company.companyList);

    // const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    // const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());
    // const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    // const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());
    const [deleteCompany, setDeleteCompany] = useState('');
    // const companyDelete = useSelector((state) => state.company.companyDelete);
    
    const handleDeleteCompany = (ev) => {

        console.log('handleDeleteCompany');

        setDeleteCompany(ev.target.value);
 }

 const submitDeleteCompany = (evt) => {

    evt.preventDefault();

    console.log('deleteCompanyDetails');

    axios.delete(`http://localhost:8082//company/delete/${deleteCompany}`) //delete/${companyid}

        .then((response) => {

            alert(`Company details deleted successfully.`);

            //  dispatch(deletecompanyById(response.data));     
        })

        .catch(() => {

           alert(`Company not found.`);

        });
} 

return (
    <div>
        <h1 className="display-4 text-primary mt-3 mb-3" >Company Component</h1>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete company by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteCompany}>
                    <input className="form-control mt-3" type="number" id="deleteCompany" name="deleteCompany" value={deleteCompany} onChange={handleDeleteCompany} placeholder="Enter Company Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Company" />
                </form>
                 
            </div>

        </div>
    );
}

 
export default DeleteCompany;