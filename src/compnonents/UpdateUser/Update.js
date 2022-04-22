import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
      const {id} = useParams()
      const [user , setUser] = useState({})
      console.log(id);
      // kuno ekti user data load korte caile 
      useEffect(() => {
            const url = `http://localhost:5000/user/${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
      },[])



      // update korar jonno 
      const fromupdate= (event) =>{
            event.preventDefault()
            const name = event.target.name.value
            const email = event.target.email.value
            const user = { name , email}
            // send ta to server (post)
            const url = `http://localhost:5000/user/${id}`

            fetch(url , {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
                  
            })
            .then(res => res.json())
            .then(data =>{
                  console.log('success data' , data);
                  alert('user added sussecull')
                  event.target.reset()
            })

      }



       console.log(user);
      return (
            <div>
                  <h3>user Name : {user.name}</h3>
                  <form onSubmit={fromupdate}>
                       <input type="text" name="name" placeholder='type name' id="" /> <br />
                       <input type="email" name="email" placeholder='type name' id="" />
                       <br />
                       <input type="submit" value="Submit" />
                       
                 </form>
            </div>
      );
};

export default Update;