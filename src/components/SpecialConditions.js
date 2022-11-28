import React from "react";
import feet from "../assets/feet2.jpg";

function SpecialConditions() {
  return (
    <div>
      <img src={feet} />
      <h1>Special Conditions</h1>
      <p>
        I am qualified to treat patients with special foot care needs, such as
      </p>
      <ul className='list-disc'>
        <li>Rheumatoid arthritis </li>
        <li> Diabetes</li>
        <li> Circulatory Disorders</li>
      </ul>
    </div>
  );
}

export default SpecialConditions;
