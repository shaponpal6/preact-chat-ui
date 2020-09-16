import React from 'react';
import style from "./style.less";
import imageDefault from "../../../images/avater.png";

export default (props) => {
	return (
		<img
			className={props.className ? props.className : style.imageDefaultStyle}
			src={props.imageSrc ? props.imageSrc : imageDefault}
			alt={props.imageAlt ? props.imageAlt : ""}
		/>
	);
};
