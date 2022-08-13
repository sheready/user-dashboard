import axios from 'axios';
import React, {useState, useEffect} from 'react';
import UserDashboard from './UserDashboard';
import './AddUser.css';

const AddUser = () => {

    const [data,setData] = useState([{}]);

    useEffect(() => {
        getUser();
        console.log(data);
    }, []);

    const getUser = async() => {
        await axios
            .get('http://localhost:4000/posts')
            .then((res) => setData(res.data));
        
    };

    const [formData, setformData] = useState({
        name:'',
        mobile:'',
        email:'',
        zipcode:'',
        password:'',

    })

    const [updateData, setUpdateData] = useState({
        name:'',
        mobile:'',
        email:'',
        zipcode:'',
        password:'',

    })

    const handleFormSubmit = async (e) => {
        let response = await axios.post('http://localhost:4000/posts', formData);

        if(response){
            alert('data submitted successfully');
        } else {
            alert('something went wrong');
        }

        setformData({
            name:'',
            mobile:'',
            email:'',
            zipcode:'',
            password:'',
        });
    };

        const handleDelete = async(id) => {
            await axios
                .delete('http://localhost:4000/posts/' + id)
                .then((res) => alert('delete a success'));
            getUser();
        };

      

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 id='header'>Add User Form</h1>
                </div>
                    <div className="mb-3">
                        <label htmlFor="form" className="form-label">Full names</label>
                        <input type="text" className="form-control"  value={formData.name} onChange={(e) => setformData({...formData, name:e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"  value={formData.email} onChange={(e) => setformData({...formData, email:e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile number</label>
                        <input type="text" className="form-control"  value={formData.mobile} onChange={(e) => setformData({...formData, mobile:e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Zip Code</label>
                        <input type="text" className="form-control"  value={formData.zipcode} onChange={(e) => setformData({...formData, zipcode:e.target.value})}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"  value={formData.password} onChange={(e) => setformData({...formData, password:e.target.value})}></input>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleFormSubmit}>Add User</button>
            </div>
            <UserDashboard setUpdateData={setUpdateData} updateData={updateData} data={data} setformData = {setformData} setData={setData} handleDelete={handleDelete} formData={formData} handleFormSubmit={handleFormSubmit}/>
    </div>

    )
}
export default AddUser