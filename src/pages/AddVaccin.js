import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './components/Animation/Virus.svg';

toast.configure()

function AddVaccin() {
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
        return <Redirect to="/login" />
    }
    function back() {
        history.push("/Home")
    }
    return (
        <><div className="continer">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="btn btn-outline-secondary" onClick={back}>Back</button>
                    <div className="d-flex">
                        <button type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div><div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">State</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"></input>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">District</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" ></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name of the center</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <button type="button" class="btn btn-primary">Submit</button></>

    )
}

export default AddVaccin;