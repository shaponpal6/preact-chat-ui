import React from 'react';
import GeneralIntro from "./GeneralIntro";
import style from "./style.less";

class ChatIntroContainer extends React.Component {
	render() {
		console.log(this.props)
		const store = this.props.store;
		return (
			<div className={style.ChatIntroContainer}>
				<GeneralIntro
					type={store.chatIntroType}
					onClick={store.onChatButtonClick}
				/>
			</div>
		);
	}
}

export default ChatIntroContainer;
