import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewFriend = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
      axios.get("https://friendsapi-re5a.onrender.com/view").then((response)=>{
        changeData(response.data)
        console.log(response.data)
      }).catch ((error)=>{
        alert.apply(error.message)
      })
    }

    useEffect(
      ()=>{fetchdata()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> #</th>
                                        <th scope="col"> NAME</th>
                                        <th scope="col">FRIEND NAME</th>
                                        <th scope="col">FRIEND NICK NAME</th>
                                        <th scope="col">DESCRIBE YOUR FRIEND</th>
                                        
                                        
                                        
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value. DescribeYourFriend}</td>
                                            
                                            
                                        </tr>

                                    </tbody>
                                }
                            )}

                         </table>

                     </div>
                 </div>
             </div>

     </div>
    )
}

export default ViewFriend