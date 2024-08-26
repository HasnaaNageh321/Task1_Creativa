import React from "react";

function FunctionalProps({ Name, Age, University, Specialization, children }) {
  return (
    <>
      <div>
        <p>
          Hello, I am {Name}, and my age is {Age} years. I study at {University}
          , and my specialization is {Specialization}.
        </p>

        <div>{children}</div>
      </div>
    </>
  );
}

export default FunctionalProps;
