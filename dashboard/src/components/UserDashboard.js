import React from 'react';

const UserDashboard = ({data, updateData, handleDelete, setUpdateData}) => {


    return (
        <div>
            <br></br>  <br></br>
            <h1>User Dashboard</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">Full names</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => (
                            <tr>
                                <th scope="row">{user.name}</th>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.zipcode}</td>
                                <td style={{display:"flex",justifyContent:"space-between"}}>
                                    <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setUpdateData({
                                        name:user.name,
                                        email:user.email,
                                        mobile:user.mobile,
                                        zipcode:user.zipcode,
                                        password:user.password,
                                        
                                        })}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                    <div className="mb-3">
                        <label htmlFor="form" className="form-label">Full names</label>
                            <input type="text" className="form-control"  value={updateData.name} onChange={(e) => setUpdateData({...updateData, name:e.target.value})}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control"  value={updateData.email} onChange={(e) => setUpdateData({...updateData, email:e.target.value})}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Mobile number</label>
                            <input type="text" className="form-control"  value={updateData.mobile} onChange={(e) => setUpdateData({...updateData, mobile:e.target.value})}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Zip Code</label>
                            <input type="text" className="form-control"  value={updateData.zipcode} onChange={(e) => setUpdateData({...updateData, zipcode:e.target.value})}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"  value={updateData.password} onChange={(e) => setUpdateData({...updateData, password:e.target.value})}></input>
                        </div>
                        <button type="submit" className="btn btn-dark" onClick={handleUpdate}>Edit User</button>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDashboard