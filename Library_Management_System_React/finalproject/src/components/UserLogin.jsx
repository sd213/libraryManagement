import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function UserLogin() {
  let email = useRef();
  let pass = useRef();
  let nav = useNavigate();
  
  let [data,setData] = useState({});
  useEffect(()=>{


    fetch('http://localhost:8080/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
      },
      body: JSON.stringify({
        "email": "alice.smith@example.com",
        "password": "password123"
    }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/user',
    //   data: {
    //     "email": "alice.smith@example.com",
    //     "password": "password123"
    // },
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Connection': 'keep-alive'
    //   }
    // })
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    
  },[]);
    // try {
    //     const response = await axios({
    //       method: 'get',
    //       url: 'http://localhost:8080/users',
    //       data: {
    //         email: "alice.smith@example.com",
    //         password: "password123"
    //       }
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
  // })


  let login = (e) => {
    e.preventDefault();
    if (
      email.current.value === "user@gmail.com" &&
      pass.current.value === "098"
    ) {
      nav("/userportal");
    } else {
      alert("Entered Incorrect Credentials");
    }
  };
  return (
    // <div>UserLogin</div>
    
    <div>
      <form action="" onSubmit={login}>
        <div className="fieldtext">
          <label htmlFor="">Email : </label>
          <input type="text" placeholder="Enter Email" ref={email} />
        </div>
        {/* <br/><br/> */}
        <div className="fieldtext">
          <label>Password : </label>
          <input type="text" placeholder="Enter Password" ref={pass} />
        </div>
        <button>login</button>
      </form>
    </div>
  );
}

export default UserLogin