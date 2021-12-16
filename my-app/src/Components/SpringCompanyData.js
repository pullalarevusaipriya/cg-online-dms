import axios from "axios";
import { useEffect, useState } from "react";
import Company from "./models/Company";

const SpringCompanyData = () => {

    // state - for the component 
    const [company, setCompany] = useState(new Company());
    const [newCompanyObj, setNewCompanyObj] = useState(new Company());
    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());
    const [companyList, setCompanyList] = useState([]);

    const handleCompany = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        });
    }

    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value
        });
    }

    const submitGetAllCompany= () => {
        axios.get(`http://localhost:8082/company/all`)
         
         
            .then((response) => {
                setCompanyList(response.data);
                console.log(response.data);
                console.log(companyList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    const submitGetCompanyById = (evt) => {
        console.log(company.companyId);
        axios.get(`http://localhost:8082/company/get/${company.companyId}`)
            .then((response) => {
                setCompany(response.data);
            })
            .catch(() => {
                setCompany({});
                alert("Company not found.");
            });
        // evt.preventDefault();
    }

    const submitAddCompany = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/company/add`, newCompanyObj)
            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ companyName: '', companyId: '', email: '' , mobileNumber: '',address: '' , password: ''})
            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }
    const DeleteCompanyById= (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/company/delete/{companyid}`, newCompanyObj)
            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company deleted successfully.');
                setNewCompanyObj({ companyName: '', companyId: '', email: '' , mobileNumber: '',address: '' , password: ''})
            })
            .catch(() => {
                alert("Company could not be deleted.");
            });
    }
     
     


    return (
        <div className="container">
            <p className="display-4 text-primary mt-3">Spring Company Data</p>
            <p>Search Company By Id</p>
            <input type="number" id="companyId" name="companyId" value={company.companyId} onChange={handleCompany} placeholder="Enter companyId to search" />
            <input type="submit" name="Find Company" onClick={submitGetCompanyById} />
            <p className="text-primary">{company.companyId} {company.companyName} {company.address} {company.mobileNumber} {company.email}</p>
            <p>----------------</p>
            <div>
                <p>Add New Company</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewCompanyDiv">
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={newCompanyObj.CompanyName}
                        onChange={handleAddCompany}
                        placeholder="Enter Company Name" />
                        <br/>
                        <br/>
                    <input
                    
                        type="number"
                        id="companyId"
                        name="companyId"
                        value={newCompanyObj.companyId}
                        onChange={handleAddCompany}
                        placeholder="Enter CompanyId" />
                        <br/>
                        <br/>
                    


                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={newCompanyObj.address}
                        onChange={handleAddCompany}
                        placeholder="Enter Company address" />
                        <br/>
                        <br/>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={newCompanyObj.email}
                        onChange={handleAddCompany}
                        placeholder="Enter Company email" /> 
                        <br/>
                        <br/>

                    <input
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newCompanyObj.mobileNumber}
                        onChange={handleAddCompany}
                        placeholder="Enter Company mobileNumber" /> 
                        <br/>
                        <br/>

                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={newCompanyObj.password}
                        onChange={handleAddCompany}
                        placeholder="Enter Company password" />  
                        <br/>
                        <br/>
                    <input
                        type="submit"
                        // type="button"
                        value="Add Company"
                        onClick={submitAddCompany}
                    />
                </div>
                {/* </form> */}
                <p>New Company Data: {displayCompanyObj.companyId} {displayCompanyObj.companyName} {displayCompanyObj.address} {displayCompanyObj.email} {displayCompanyObj.mobileNumber} {displayCompanyObj.password}</p>
            </div>
            <p>----------------</p>

            <p>Delete Company By Id</p>
            <input type="number" id="companyId" name="companyId" value={company.companyId} onChange={handleCompany} placeholder="Enter companyId to delete" />
            <input type="submit" name="Find Company" onClick={DeleteCompanyById} />
            <p className="text-primary">{company.companyId} {company.companyName} {company.address} {company.mobileNumber} {company.email}</p>
            <p>----------------</p>

            
             
                    
                      

            <div>
                <div>
                    <p>Get All Company</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Company"
                        onClick={submitGetAllCompany}
                    />
                </div>
                <div className="col-4">
                    <div className="border border-light">
                    </div>
                </div>
                <p>----------------</p>
            </div>
            {/* Google Material UI Table  */}
            <div className="container">
                <div class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">companyid</th>
                                    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">companyName</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">mobileNumber</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">password</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">email</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">address</th>
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {companyList.map((company, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{company.companyId}</td>
                                            <td className="mdc-data-table__cell">{company.companyName}</td>
                                            <td className="mdc-data-table__cell">{company.address}</td>
                                             <td className="mdc-data-table__cell">{company.email}</td>
                                             <td className="mdc-data-table__cell">{company.mobileNumber}</td>
                                             <td className="mdc-data-table__cell">{company.password}</td></tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpringCompanyData;