import style from "./style.less";
import ImageComponent from "../../../CommonContainer/ImageComponent";

export default (props) => {
	return <div className={style.avatarWrapper}>
		<ImageComponent/>
	</div>;
};
