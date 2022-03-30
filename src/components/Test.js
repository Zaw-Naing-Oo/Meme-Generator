import { useState, useEffect } from "react";

export default function Test(props) {
  // const [count, setCount] = useState(1);
  // const [starWardata, setStarWarDatat] = useState({});

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 


  // useEffect( () => {
  //   console.log("gg");
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //   .then( res => res.json())
  //   .then ( data => setStarWarDatat(data))
  // },[count])

  useEffect( () => {

    function watch() {
      setWindowWidth(window.innerWidth)
    }
         
      window.addEventListener('resize',watch)
      return  function() {
        window.removeEventListener('resize',watch)
      }
      
     },[] )



    return(
      <div>
       <h1>Window Width {windowWidth}</h1>
        {/* <h1>{count}</h1> */}
        {/* <button onClick={ () => setCount(prev => prev + 1)}>Add</button> */}
        {/* <pre>{JSON.stringify(starWardata, null, 2)}</pre> */}
      </div>
    )
}


// const [formData, setFormData] = useState(
  // {
  //     firstName : "", lastName : "", email : "", comment : "", isFriendly : true, employment : "", favColor: ""
  // }
  // );


  // const handleChange = (event) => {
  //   const {name , value , type , checked} = event.target
  //    setFormData( previous => {
  //      return {
  //        ...previous,
  //        [name] : type === "checkbox" ? checked : value,
  //      }
  //    } );
     
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData)
  // }



{/* <form onSubmit={handleSubmit}>
       <input 
          type="text"
          placeholder='firstName'
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
         />
         <input 
          type="text"
          placeholder='lastName'
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
         />
         <input 
          type="email"
          placeholder='Your Email'
          onChange={handleChange}
          name="email"
          value={formData.email}
         />
         <textarea
         name="comment"
         value={formData.comment}
         onChange={handleChange}
         />
         <input 
         type="checkbox"
         id="checkbox"
         checked={formData.isFriendly}
         onChange={handleChange}
         name="isFriendly"
         />
         <label forhtml="checkbox">GG</label>

         <fieldset style={{ marginTop:'30px' }}>
           <legend>Choose One</legend>
           
           <input
           id="full-time"
           type="radio" 
           value="fullTime"
           name="employment"
           checked={formData.employment == "fullTime" }
           onChange={handleChange}
           />
           <label forhtml="full-time">Full Time</label>

           <input
           
           id="part-time"
           type="radio" 
           name="employment"
           value="partTime"
           onChange={handleChange}
           checked={formData.employment == "partTime" }
           />
           <label forhtml="part-time">Part Time</label>

           <input
           id="remote"
           type="radio"
           name="employment"
           value="remote"
           checked={formData.employment == "remote" }
           onChange={handleChange}
            />
           <label forhtml="remote">Remote</label>

         </fieldset>


         <select 
         id='favColor'
         name='favColor'
         value={formData.favColor}
         onChange={handleChange}
         >
           <option value="">Choose one</option>
           <option value="red">Red</option>
           <option value="blue">Blue</option>
           <option value="white">White</option>
           <option value="yellow">Yellow</option>
           <option value="grey">Grey</option>
         </select>
          <button>Submit</button>

     </form> */}