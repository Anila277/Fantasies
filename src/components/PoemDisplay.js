import React from "react";

const PoemDisplay = ({ Poema }) => {
  const loaded = () => {
    return ( 
      <div>
    <h1>{(Poema[0].title)}</h1>
    <h2>{Poema[0].poet.name}</h2>
    <h2>{Poema[0].content}</h2>
    </div>

    );
  };


  const loading = () => {
    return <h1>Dive into the classics</h1>;
  };

  return Poema[0] ? loaded() : loading();
};

export default PoemDisplay;