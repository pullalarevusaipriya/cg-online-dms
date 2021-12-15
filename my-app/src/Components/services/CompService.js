 
 import axios from 'axios';

 // Create services for other components in this way. 
 
 const getCompanyByIdService = (companyid) => {
     console.log(`getCompanyByIdService`);
    return axios.get(`/company/get/${companyid}`);
 }
 const getAllCompanyService = () => {
     console.log(`getCompanyByIdService`);
     return axios.get(`/company/all`);
 }
 
 const addcompanyService = (company) => {
     console.log(`getCompanyByIdService`);
     return axios.post(`/company/add`, company);
 }
 
 const updatecompanyService = (company) => {
     console.log(`getCompanyByIdService`);
     return axios.put(`/company/update`, company);
 }
 
 const deletecompanyByIdService = (companyid) => {
     console.log(`getCompanyByIdService`);
     return axios.post(`/company/delete/${companyid}`);
 }
 
//  const getCompanyByNameService = (firstName) => {
//      console.log(`getEmpByIdService`);
//      return axios.post(`/emp/getbyname/${firstName}`);
//  }
 
 //const deletecompanyByIdService = (companyid) => {
     
    export { getCompanyByIdService, getAllCompanyService, addcompanyService, updatecompanyService,  deletecompanyByIdService};
 