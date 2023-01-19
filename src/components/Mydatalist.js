import React, { Fragment, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Mymove } from './Layouts';


function Mydatalist() {
const [sv,sf]=useState([]);

const mydata =()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res.data);
            sf(res.data);
        });


}

const {id} = useParams();


  return (
    <Fragment>
        <h1>list of data</h1>
        <button type='button' onClick={Mymove}>alert</button>
    <button type='button' onClick={mydata}>fatch data from api</button>

    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">userid</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sv.map((e)=>{
                        return(
                        <tr key={e.id}>
                            <th scope="row">{e.id}</th>
                            <td>{e.userId}</td>
                            <td>{e.title}</td>
                            <td>{e.body}</td>
                            <td><button className='btn btn-primary btn-sm'>Action</button>
                                <Link to={`${e.id}`} className='btn btn-primary'>{e.id}</Link>
                            </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
                </table>
            </div>
        </div>
    </div>

    </Fragment>
  )
}

export default Mydatalist