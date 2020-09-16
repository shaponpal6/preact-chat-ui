import React from "react";
import uniqid from "uniqid";
import ActionButtons from "./actionButtons";
import OperatorsList from "./OperatorsList";
import ButtonComponent from "../../CommonContainer/ButtonComponent";
import CloseIcon from "../../../images/close.svg";
import style from "./style.less";

export default class Header extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <header className={style.header}>
        <OperatorsList
          key={uniqid()}
          operators={store.operators}
          chatText={store.chatText}
          onLogedOut={store.onLogedOut}
        />

        <ActionButtons
          key={uniqid()}
          isLogedIn={store.isLogedIn}
          onLogedIn={store.onLogedIn}
          onLogedOut={store.onLogedOut}
          onMenuToggle={store.onMenuToggle}
        />

        <ButtonComponent
          key={uniqid()}
          imageSrc={CloseIcon}
          className={null}
          onClick={store.onCloseWidget}
        />
      </header>
    );
  }
}
