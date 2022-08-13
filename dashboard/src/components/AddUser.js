import axios from 'axios';
import React, {useState} from 'react';
import './AddUser.css';

const AddUser = () => {
    const [formData, setformData] = useState({
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
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
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
                    <button type="submit" className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
            </div>
    </div>

    )
}
export default AddUser