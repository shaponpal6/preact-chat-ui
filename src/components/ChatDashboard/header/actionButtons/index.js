import React from 'react';
import uniqid from 'uniqid';
import SignInOut from "./signInOut";
import ButtonComponent from "../../../CommonContainer/ButtonComponent";
import MenuIcon from "../../../../images/menu.svg";
import style from "./style.less";

export default class ActionButtons extends React.Component {
	render() {
		return (
			<div className={style.actionContainer}>
				{/* <button className={style.actionBUtton}>...</button> */}
				<ButtonComponent key={uniqid()} className={style.actionBUtton}  onClick={this.props.onMenuToggle}  imageSrc={MenuIcon}/>
				<div className={style.actionsList}>
					{this.props.isLogedIn ? (
						<SignInOut key={uniqid()} text="Log Out" onClick={this.props.onLogedOut} />
					) : (
						<SignInOut key={uniqid()} text="Log In" onClick={this.props.onLogedIn} />
					)}
				</div>
			</div>
		);
	}
}
