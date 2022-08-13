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
    
    const handleFormSubmit = (e) => {
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
        })
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1 id='header'>Add User Form</h1>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full names</label>
                        <input type="name" class="form-control" id="exampleInputEmail1" value={formData.name} onChange={(e) => setformData({...formData, name:e.target.value})}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" value={formData.email} onChange={(e) => setformData({...formData, email:e.target.value})}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile number</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={formData.mobile} onChange={(e) => setformData({...formData, mobile:e.target.value})}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Zip Code</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={formData.zipcode} onChange={(e) => setformData({...formData, zipcode:e.target.value})}></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={formData.password} onChange={(e) => setformData({...formData, password:e.target.value})}></input>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg" onClick={handleFormSubmit}>Add User</button>
                </form>
            </div>
    </div>

    )
}
export default AddUser