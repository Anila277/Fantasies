import React from "react";

const PoemDisplay = ({ poema }) => {
  const loaded = () => {
    return (
      <>
        <h1>{poema.title}</h1>
        <h2>{poema.poet}</h2>
        <h2>{poema.poem}</h2>
      </>
    );
  };


  const loading = () => {
    return <h1>Dive into the classics</h1>;
  };

  return poema ? loaded() : loading();
};

export default PoemDisplay;