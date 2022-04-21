import React from 'react';

const AddUser = () => {



      const fromsubmit = (event) =>{
            event.preventDefault()
            const name = event.target.name.value
            const email = event.target.email.value
            const user = { name , email}
            // send ta to server (post)

            fetch('http://localhost:5000/user' , {
                  method: 'POST',
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
      return (
            <div>
                 <h1>Please Add user Home</h1>
                 <form onSubmit={fromsubmit}>
                       <input type="text" name="name" placeholder='type name' id="" /> <br />
                       <input type="email" name="email" placeholder='type name' id="" />
                       <br />
                       <input type="submit" value="Submit" />
                       
                 </form>
            </div>
      );
};

export default AddUser;