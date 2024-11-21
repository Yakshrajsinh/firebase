import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import db from '../Firebase'
import { get, push, ref, remove, set } from 'firebase/database'

const Create = () => {
  const { register, handleSubmit, reset } = useForm()
  const [ users, setUser ] = useState([])

  function submitData(data) {
    set(push(ref(db, 'rnw/students')), data)
    alert("data has been inserted")
    showFireBase()
    reset()
    
  }

  async function showFireBase() {
    const res = await get(ref(db, 'rnw/students'))
    console.log(res.val());
    const obj = res.val()
    var arr = []

    for (var key in obj) {
      console.log(key);
      console.log(obj[key]);
      const newUser = {
        id: key,
        ...obj[key]
      }
      console.log("new user.........");
      console.log(newUser);
      arr.push(newUser)
      
    }
    console.log('arr..........');
    console.log(arr);
    setUser(arr)

  }

  useEffect(() => {
    showFireBase()
  },[])

   async function trash(id){
    // console.log(id);
    if(confirm("do you want to delet this item?")){
      const res=ref(db,`rnw/students/${id}`)
      await remove(res)
      showFireBase()
    }
  }
  return (
    <>
      <div className='container col-lg-6 p-5 my-5 shadow'>
        <form method='post' onSubmit={handleSubmit(submitData)}>
          <div className='mt-4'>
            <input type='text' {...register('username')} className='form-control' placeholder='Username'></input>
          </div>
          <div className='mt-4'>
            <input type='text' {...register('email')} className='form-control' placeholder='Email'></input>
          </div>
          <div className='mt-4'>
            <input type='text' {...register('mobile')} className='form-control' placeholder='Mobile'></input>
          </div>
          <div className='mt-4'>
            <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
      <div className='container my-5'>
        <table className='table table-hover table-striped table-info'>
          <thead className='table-dark'>
            <tr>
              <th>S.no</th>
              <th>Username</th>
              <th>email</th>
              <th>mobile</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button onClick={()=>trash(user.id)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Create