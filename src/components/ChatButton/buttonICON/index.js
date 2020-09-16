import React from 'react';
import uniqid from 'uniqid';
import style from "./style.less";

class ButtonICON extends React.Component {
	render() {
		console.log(this.props);
		const store = this.props;
		return (
			<button
				id={uniqid()}
				className={style.chatButton}
				data-type={store.buttonType}
				onClick={store.onClick}
			>B</button>
		);
	}
}

export default ButtonICON;
