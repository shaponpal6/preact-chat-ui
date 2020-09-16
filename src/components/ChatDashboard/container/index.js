import React from 'react';
import MessageContainer from "./MessageContainer";
import style from "./style.less";

export default class ChatContainer extends React.Component {

	render() {
		const todos = this.props.store;
		return (
			<div className={style.messageContainer}>
				<ul className={style.messages}>
					{todos.map((todo) => (
						<MessageContainer key={todo.id} todo={todo} onRemove={this.props.removeToDo} />
					))}
				</ul>
			</div>
		);
	}
}
