import React from 'react';
import style from "./style.less";

export default (props) => {
	return (
		<div
			className={props.className ? props.className : style.defaultButton}
			onClick={props.onClick}
		>
			<img src={props.imageSrc} />
		</div>
	); 
};
