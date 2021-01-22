import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handleblur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone', info.phone)

        fetch('https://doctors-portal-snk.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <main className='row container-fluid'>
            <div className="main-bg col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10">
                <h5>Add Doctor</h5>

                <form onSubmit={handleSubmit}>
                <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleblur} type="text" class="form-control" name='name' placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleblur} type="email" class="form-control" name='email' placeholder="Enter email" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input onBlur={handleblur} type="text" class="form-control" name='phone' placeholder="Name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload a Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="image" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>
    );
};

export default AddDoctor;