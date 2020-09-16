import React from "React";
import uniqid from "uniqid";
import ImageComponent from "../../../CommonContainer/ImageComponent";
import style from "./style.less";

export default class OperatorsList extends React.Component {
  render() {
    const props = this.props;
    let list = props.operators.map((operator) => (
      <div key={uniqid()} className={style.avaterImage}>
        <ImageComponent
          key={uniqid()}
          className={null}
          imageSrc={operator.avater}
          imageAlt={operator.name}
        />
      </div>
    ));

    let names = props.operators.map((operator) => operator.name + ", ");

    return (
      <div className={style.headerLeft}>
        <div className={style.operatorsList}>{list}</div>
        <div className={style.operatorsNameList}>
          <p className={style.chatText}>{props.chatText}</p>
          <p>{names}</p>
        </div>
      </div>
    );
  }
}
