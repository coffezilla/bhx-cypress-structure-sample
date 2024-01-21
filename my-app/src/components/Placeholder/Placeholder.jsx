import { useState } from "react";

const Placeholder = ({ title = "placeholder..." }) => {
  return (
    <div>
      <h2 data-testid="title-placeholder">{title}</h2>
    </div>
  );
};

export default Placeholder;
