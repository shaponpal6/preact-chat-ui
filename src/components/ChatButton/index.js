import React from "React";
import uniqid from "uniqid";
import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

export default (props) => {
  const store = props.store;
  console.log(props);
  return (
    <div className={style.chatButton}>
      <ButtonICON
        key={uniqid()}
        buttonType={store.buttonName}
        onHover={store.onChatButtonHover}
        onClick={store.onChatButtonClick}
      />
    </div>
  );
};

// export default ChatButton;
