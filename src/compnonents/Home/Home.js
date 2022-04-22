import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
      // server theke data show ui 
      const [user, setUser] = useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
      },[])
      console.log(user);

      // ui theke delect korar jonno 
      const delectdata = (id) =>{
            // delect korar jonno alret massage 
            const prosed  = window.confirm('are you sure delect ?')
            if(prosed){
                  console.log(id);
                  const url = `http://localhost:5000/user/${id}`
                  console.log(url); 

                  fetch(url, {
                        method: 'DELETE'
                    })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount > 0 ){
                              const remaing = user.filter(use => use._id !== id)
                              setUser(remaing)
                        }
                       
                        console.log(data);
                  })

            }
            

      }
      return (
            <div>
                  <h2>Total user data {user.length}</h2>
                  {
                        user.map(use => <li
                        key={use._id}
                        
                        >{use.name} :: {use.email} 
                        <Link to={`/update/${use._id}`}><button>Update</button></Link>
                        <button onClick={() => delectdata(use._id)}>x</button>
                        </li>)
                  }
            </div>
      );
};

export default Home;