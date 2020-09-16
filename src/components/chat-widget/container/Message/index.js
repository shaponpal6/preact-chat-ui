import style from "./style.less";

export default (props) => {
	return <div className={style.messageContent}>{props.avaterAlt}</div>;
};
