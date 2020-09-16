import React from "react";
import uniqid from "uniqid";
import Header from "./header";
import Footer from "./footer";
import ChatContainer from "./container";
import style from "./style.less";

class ChatWidget extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <div className={style.chatWidget}>
        <Header key={uniqid()} store={store.header} />
				<ChatContainer key={uniqid()} store={store.todos} removeToDo={store.removeTodo} />
				<Footer key={uniqid()}
					store={store.footer}
					value={store.text}
					onSubmit={store.addTodos}
					onInput={store.updateText}
				/>
      </div>
    );
  }
}

export default ChatWidget;
