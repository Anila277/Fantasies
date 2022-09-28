
import React from "react";

const PoemDisplay = ({ poem }) => {
  const loaded = () => {
    return (
      <>
        <h1>{poem.title}</h1>
        <h2>{poem.poet}</h2>
        <h2>{poem.poem}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Poem to Display</h1>;
  };

  return poem ? loaded() : loading();
};

export default PoemDisplay;