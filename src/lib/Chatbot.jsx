import React, { useState } from "react";
import {
  ChatContainer,
  Content,
  FloatButton,
  Footer,
  Header,
  HeaderIcon,
  HeaderTitle,
  Input,
  SubmitButton,
  TextStep,
} from "./components";
import { useChatRoute, defaultRoute } from "./route";
import { CloseIcon, SubmitIcon } from "./icons";

function Chatbot(props) {
  const {
    headerTitleText,
    headerComponent,
    hideHeader,
    floating,
    floatingStyle,
    width,
    height,
    initOpened,
    routeProviders,
  } = props;

  // ===== APPEARANCE CONTROL =====

  // toggle chat open / close
  const [opened, setOpened] = useState(initOpened);

  // ===== CONVERSATION RENDER CONTROL =====

  // hold chat steps
  const [stepsRendered, setStepsRendered] = useState([]);

  function addStepRendered(step) {
    setStepsRendered((prevStepsRendered) => [
      ...prevStepsRendered,
      { id: prevStepsRendered.length, ...step },
    ]);
  }

  function updateStepRendered(step) {
    setStepsRendered((prevStepsRendered) =>
      prevStepsRendered.map((prevStep) =>
        step.id === prevStep.id ? step : prevStep
      )
    );
  }

  function handleRenderSteps() {
    for (const step of stepsRendered) {
      if (step.triggerStep === true) {
        updateStepRendered({ ...step, triggerStep: false });
        addStepRendered({ text: step.text, triggerRoute: true });
      }
    }

    return stepsRendered.map((step) => (
      <TextStep
        key={step.id}
        step={step}
        route={route}
        updateStepRendered={updateStepRendered}
      />
    ));
  }

  // ===== CHAT ROUTES CONTROL =====

  const route = useChatRoute(routeProviders);
  const [inputVal, setInputVal] = useState("");

  /**submit input contents and reset it empty */
  async function handleInputSubmit() {
    if (inputVal.length > 0) {
      // add user step
      addStepRendered({ user: true, text: inputVal, triggerStep: true });
      setInputVal("");

      // add bot step placeholder and wait for update
      // const botStepPlaceholder = addStepRendered({ text: "..." });
      // const routeBotStep = await route(userStep);
      // const botStep = { ...botStepPlaceholder, ...routeBotStep };
      // updateStepRendered(botStep);
    }
  }

  /**Enter key can also submit */
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleInputSubmit();
    }
  }

  // ===== CONDITIONAL COMPONENTS =====

  // default header
  const header = headerComponent || (
    <Header>
      <HeaderTitle>{headerTitleText}</HeaderTitle>
      {floating && (
        <HeaderIcon onClick={() => setOpened(false)}>
          <CloseIcon />
        </HeaderIcon>
      )}
    </Header>
  );

  // default floating button
  const floatButton = (
    <FloatButton onClick={() => setOpened(true)}>TRY</FloatButton>
  );

  return (
    <div>
      {floating && floatButton}

      <ChatContainer
        floating={floating}
        floatingStyle={floatingStyle}
        opened={opened}
        width={width}
        height={height}
      >
        {!hideHeader && header}

        <Content floating={floating} height={height}>
          {handleRenderSteps()}
        </Content>

        <Footer>
          <Input
            floating={floating}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyPress={handleEnter}
            value={inputVal}
            hasButton={true}
          />
          <SubmitButton onClick={handleInputSubmit}>
            <SubmitIcon />
          </SubmitButton>
        </Footer>
      </ChatContainer>
    </div>
  );
}

Chatbot.defaultProps = {
  headerTitleText: "Example Chatbot",
  initOpened: false,

  // container style
  floating: true,
  floatingStyle: {},
  hideHeader: false,
  headerComponent: undefined,

  // size
  width: "350px",
  height: "520px",

  routeProviders: defaultRoute,
};

export default Chatbot;
export {};
