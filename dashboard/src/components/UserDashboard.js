import axios from "axios";
import React, { useEffect, useState } from 'react';

const UserDashboard = () => {
    const [data,setData] = useState([{}]);

    useEffect(() => {
        getUser();
        console.log(data);
    }, []);

    const getUser = async() => {
        await axios.get('http://localhost:4000/posts').then(res => setData(res.data));
        
    };

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
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(user => {
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}
export default UserDashboard