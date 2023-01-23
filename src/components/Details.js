import React, { Fragment} from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { json } from 'react-router-dom';

function Details() {

const {register,handleSubmit}=useForm();
const mysubmit = (data) => 
{
  console.log(data);
  localStorage.setItem("myformdata",JSON.stringify(data));
}

  return (
    <Fragment>
    <h1>Details</h1>
    <form className='p-5' onSubmit={handleSubmit(mysubmit)}>
    <div className='container'>
      <div className='row border shadow bg-light'>
        <div className='col-6'>
          <label class="form-label">username</label>
          <input type="text" class="form-control" {...register("username",{ required: true, maxLength: 20 })} />
        </div>
        <div className='col-6'>
          <label class="form-label">email</label>
          <input type="email" class="form-control" {...register("emailid")} />
        </div>
        <div className='col-6'>
          <label class="form-label">phone</label>
          <input type="text" class="form-control" {...register("phoneno")}/>
        </div>
        <div className='col-6'>
          <label class="form-label">Date</label>
          <input type="date" class="form-control" {...register("mydate")}/>
        </div>
        <div className='col-12 text-center mt-4 p-2'>
          <input type="submit" className='btn btn-primary' value="submit" />
        </div>
      </div>
    </div>
    </form>

    </Fragment>
  )
}

export default Details