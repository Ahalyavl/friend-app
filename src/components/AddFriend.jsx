import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddFriend = () => {
    const [data,setData] = useState(
        
        {
          name: "",
           friendName: "",
           friendNickName:"",
           DescribeYourFriend:""
           }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
  return (
    <div>
        <Navbar/>
        <h1><center>Friend App</center></h1>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">friend Name</label>
                        <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">friend Nick Name</label>
                        <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Describe Your Friend</label>
                        <textarea className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <button className="btn btn-success"onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default AddFriend