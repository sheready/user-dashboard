import axios from "axios";
import React, { useEffect, useState } from 'react';

const UserDashboard = ({data, setData}) => {


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
                                    <button className="btn btn-info">Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>

                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}
export default UserDashboard