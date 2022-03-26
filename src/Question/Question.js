import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      <div>
        <h1>How react work?</h1>
        <p>
          React use virtual dome and only update the copies of portion what we
          have change. To change real dom is very exoensive but to do same thing
          in virtual dom is very easy and efficient. React use something called
          JSX that is not plain javascript not html it is called syntatic sugar.
          Jsx make very easy to write nested code.
        </p>
        <p>
          A react application is make multiple component and each one is
          responsible for rendering small, reusable pice of html code. A
          component also maintain sometimes state. Unlike browser dom to create
          react element is plain javascript object are cheap to create.
        </p>
      </div>
      <div>
        <h1>Props vs state</h1>
        <p>
          To pass the information from one component to another component use
          props. Props is immutable means it is read only and we can not change.
        </p>
        <p>
          On the otherhand state passed data with in the component only. State
          is mutable means we can change the state. State can only use in react
          functionl component and state is both read and write.
        </p>
      </div>
      <div>
        <h1>How use state work?</h1>
        <p>
          The state object is store the property value that belongs to the
          component. when state changes the component is re-renders. State is
          very similar to props unlike props can not change but state can be
          change. When react come to render component it will first check the
          state has changed.
        </p>
      </div>
    </div>
  );
};

export default Question;
