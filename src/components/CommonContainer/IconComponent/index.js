import style from "./style.less";
import imageDefault from "../../../images/close.svg";

export default (props) => {
	return <button className={props.imageClassName ? props.imageClassName : style.imageDefaultStyle}>{imageDefault}</button>;
};
