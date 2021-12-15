import {getCompanyByIdService, getAllCompanyService,addcompanyService, updatecompanyService,  deletecompanyByIdService} from "./services/CompService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getcompanyById, getAllCompany,addcompany,updatecompany,deletecompanybyid } from '../redux/CompSlice';

const CompanyData = () => {

    const [companyId, setCompanyId] = useState('');
    const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);

    const handleCompany = (e) => {
        console.log('handleCompany');
        setCompanyId(e.target.value);
    }

    const submitGetCompanyById = (evt) => {
        evt.preventDefault();
        console.log('submitGetCompanyById');
        getCompanyByIdService(companyId)
            .then((response) => { 
                dispatch(getcompanyById(response.data)) })
            .catch(() => {
                alert(`Company with ${companyId} not found.`);
            });
        console.log(Object.keys(companyList));
        setCompanyId('');
    }

    const submitGetAllCompany = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyService()
            .then((response) => {
                dispatch(getAllCompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddCompany = (evt) => {
        evt.preventDefault();
        console.log('submitAddCompany');
        addcompanyService()
            .then((response) => {
                dispatch(addcompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitUpdateCompany = (evt) => {
        evt.preventDefault();
        console.log('submitUpdateCompany');
        updatecompanyService()
            .then((response) => {
                dispatch(updatecompany(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitDeleteCompany = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteCompany');
        deletecompanyByIdService()
        
            .then((response) => {
                dispatch(deletecompanybyid(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    

     return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Company Component</h1>
            {/* <p>Fetch data from backend, store it in redux store and get it to component</p> */}
            

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Company by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetCompanyById}>
                    <input className="form-control mt-3" type="number" id="companyId" name="companyId" value={companyId} onChange={handleCompany} placeholder="Enter companyId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Company" />
                </form>
                <p>Data from store: {companyDataFromStore.companyId}  </p>
                </div>
                
                 

             

            
            

            <div>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all Company</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Company" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>CompanyId</th>
                                <th>companyName</th>
                                <th>email</th>
                                <th>password</th>
                                <th>mobileNumber</th>
                                <th>address</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td>  <td>{company.companyName}</td> <td>{company.email}</td><td>{company.password}</td><td>{company.mobileNumber}</td><td>{company.address}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );

}

export default CompanyData;