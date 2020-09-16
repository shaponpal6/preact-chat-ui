import React from 'React';
import uniqid from 'uniqid';
import style from "./style.less";

import Avater from "../Avater";
import DateTime from "../DateTime";
import Sender from "../Sender";
import Message from "../Message";

export default class MessageContainer extends React.Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	render({ todo }) {
		console.log(this.props);
		return (
			<li key={uniqid()}>
				<div className={style.messageWrapper}>
					<Avater key={uniqid()} avaterUrl={todo.text} avaterAlt={todo.text} />
					<div className={style.messageWrap}>
						<Sender key={uniqid()} avaterUrl={todo.text} avaterAlt={todo.text} />
						<Message key={uniqid()} avaterUrl={todo.text} avaterAlt={todo.text} />
					</div>
				</div>
				<DateTime key={uniqid()} avaterUrl={todo.text} avaterAlt={todo.text} />
				{/* <button onClick={this.remove}>×</button> */}
			</li>
		);
	}
}
