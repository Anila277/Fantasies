import React from "react";

const Form = (Poema) => {
  const [formData, setFormData] = React.useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Poema.Poemasearch(formData.searchterm);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
        hidden
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Get Poem" />
      </form>
    </div>
  );
};

export default Form;