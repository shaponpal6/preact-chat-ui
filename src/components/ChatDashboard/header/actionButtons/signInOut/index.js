import React from 'react';
import uniqid from 'uniqid';
import style from './style.less';

export default class SignInOut extends React.Component {
	render() {
		return (
			<button key={uniqid()} onClick={this.props.onClick} className={style.actionBUtton}>
				{this.props.text} 
			</button>
		);
	}
}

