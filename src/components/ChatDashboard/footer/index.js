import React from "React";
import uniqid from "uniqid";
import style from "./style.less";
import Button from "../../CommonContainer/ButtonComponent";
import ninja from "../../../images/ninja.png";

export default class Footer extends React.Component {

  inputChangedHandler = (e)=>{
    this.props.onInputChange(e)
  }

  render() {
    const store = this.props.store;
    return (
      <div className={style.footer}>
        <Button key={uniqid()} className="" imageSrc={ninja} onClick={store.onBotStatus} />
        <Button key={uniqid()} className="" imageSrc={ninja} onClick={store.onAttachment} />
        <Button key={uniqid()} className="" imageSrc={ninja} onClick={store.onMenuExpend} />

        <form onSubmit={this.props.onInputSubmit} action="">
          <input key={uniqid()}
            value={this.props.value}
            onChange={(event)=>this.inputChangedHandler(event)}
            // onChange={this.props.onInputChange}
            placeholder={store.placeholder}
          />
        </form>
      </div>
    );
  }
}
