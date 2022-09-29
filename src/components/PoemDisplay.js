import React from "react";

const PoemDisplay = ({ Poema }) => {
  const loaded = () => {
    return ( 
      <div>
    <h1> jobs done</h1>
    <h1>{Poema.title}</h1>
    <h2>{Poema.poet}</h2>
    <h2>{Poema.content}</h2>
    <h2>{Poema.poem}</h2>
    </div>

    );
  };


  const loading = () => {
    return <h1>Dive into the classics</h1>;
  };

  return Poema ? loaded() : loading();
};

export default PoemDisplay;