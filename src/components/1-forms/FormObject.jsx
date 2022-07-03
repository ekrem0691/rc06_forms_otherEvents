
import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });



  const handleFormValues = (e) => {


    setFormValues({...formValues, [e.target.id]: e.target.value })
  }


  

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const {username, email, password} = formValues;
    alert(`username:${formValues.username}
    email:${formValues.email}
    password:${formValues.password}
    `);
    
  };

  return (
    <div>
      <form style={{ margin: "5rem" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username <span className="text-danger">:{formValues.username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">:{formValues.email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
