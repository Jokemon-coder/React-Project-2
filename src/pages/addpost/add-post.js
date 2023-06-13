import React, { useEffect, useState } from "react";
import "./add-post.css";
import Add from '../../components/Add/Add';
import { auth } from "../../firebase/firebaseconfig";

function AddPost() {
  
    const [user, setUser] = useState();

    //useEffect setting the userNullOrNot state based on Firebase login. If the user is logged in, render the page
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if(user)
        {
          setUser(user);
        }
      })
    })
    if(user !== null)
    {
    return (
        <React.Fragment>
          <div id="AddPost">
            <section id="MainPost">
              <Add user={user}/>
            </section>
          </div>
        </React.Fragment>
    );
    }
}

export default AddPost;