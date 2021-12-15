import { createSlice } from "@reduxjs/toolkit";
import Company from "../Components/models/Company";

// step 3 for redux - create slices for each components 
const CompSlice = createSlice({

    name: 'company',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        companyState: new Company(),
        companyList: []


    },

    reducers: {

        getcompanyById: (state, action) => {
            console.log('CompSlice reducers getCompanyById');
            state.companyState = action.payload;
        },

        getAllCompany: (state, action) => {
            console.log('CompSlice reducers getAllCompany');
            state.companyList = action.payload;
        },

        deletecompanybyid: (state, action) => {
            console.log('CompSlice reducers deletecompanyById');
            state.companyList = action.payload;
        },
        updatecompany: (state, action) => {
            console.log('CompSlice reducers updatecompany');
            state.companyList = action.payload;
        },

        addcompany: (state, action) => {
            console.log('CompSlice reducers addcompany');
            state.companyList = action.payload;
        }
    }
       
    
});

export const { getcompanyById, getAllCompany, deletecompanybyid, updatecompany, addcompany} = CompSlice.actions;

export default CompSlice.reducer;