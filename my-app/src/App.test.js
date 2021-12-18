import { render, screen } from '@testing-library/react';
//import Hello from './components/Hello';
import DeleteCompany from './Components/controller/DeleteCompany';
import GetAllCompany from './Components/controller/GetAllCompany';
import AddCompany from './Components/controller/AddCompany';
import GetCompanyById from './Components/controller/GetCompanyById';
//import SpringBootData from './components/SpringBootData';
import { Provider } from 'react-redux';
import store from './redux/store';
import UpdateCompany from './Components/controller/UpdateCompany';
//import GetCompanyById from './Components/controller/GetCompanyById';


// import { render, screen } from '@testing-library/react';
// import App from './App';
// // import { Provider } from 'react-redux';
// // import AddCompany from './Components/controller/AddCompany';

// test('renders learn react link', () => {
//   render(<App/>);
   
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});

test('render Data  Delete company by id', () => {
  render(
    <Provider store={store} >
      <DeleteCompany />
    </Provider>)
  const linkElement = screen.getByText('Delete company by id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Add New Company', () => {
  
  render(
    <Provider store={store} >
      {/* <EmpData /> */}
      <AddCompany/>
    </Provider>)
  const linkElement = screen.getByText('Add New Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from List of all Company', () => {
   
  render(
    <Provider store={store} >
      {/* <EmpData /> */}
       <GetAllCompany/>
    </Provider>)
  const linkElement = screen.getByText('List of all Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from   Get Company By Id', () => {
   
  render(
    <Provider store={store} >
       <GetCompanyById/>
    </Provider>)
  const linkElement = screen.getByText('Get Company By Id');
  expect(linkElement).toBeInTheDocument();
});
 
test('render Data from Update New Company', () => {
   
  render(
    <Provider store={store} >
       <UpdateCompany/>
    </Provider>)
  const linkElement = screen.getByText('Update New Company');
  expect(linkElement).toBeInTheDocument();
});
 