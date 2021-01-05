import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import TextStepContainer from "./TextStepContainer";
import Bubble from "./Bubble";

function TextStep({ step, route, updateStepRendered }) {
  const [text, setText] = useState(step.triggerRoute ? "..." : step.text);

  if (step.triggerRoute === true) {
    updateStepRendered({ ...step, triggerRoute: false });

    setTimeout(() => {
      setText("Still waiting for response ...");
    }, 500);

    setTimeout(() => {
      setText("sorry");
    }, 1500);

    route(step).then((updateStep) => {
      console.log(updateStep);
      setText(updateStep.text);
    });
  }

  return (
    <TextStepContainer user={step.user}>
      <ImageContainer></ImageContainer>

      <Bubble>{text}</Bubble>
    </TextStepContainer>
  );
}

export default TextStep;
