import React from 'react';
import style from "./style.less";

class GeneralIntro extends React.Component {
	render() {
		console.log(this.props);
		const store = this.props;
		return (
			<div className={style.generalIntro}>
				<h2>Chat general Intro</h2>
				<button
					className={style.chatIntroButton}
					onClick={store.onClick}
				>
					General Chat Button
				</button>
			</div>
		);
	}
}

export default GeneralIntro;
