/**
 * 确认窗口-移动端
 */
import React, { Component } from 'react';
import DialogTouch from '../DialogTouch/index';
import './index.scss';
class ConfirmDialog extends Component {
    constructor (props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        // 所有使用close函数的地方，都需要先判断一下，父元素是否传有close，如果传递了的话，需要使用父元素的
        this.initClose = this.props.handleClose || this.close;
        this.state = {
            hide: true,
            title: '',
            content: '',
            btnText: '',
            handleSure: this.close,
        };
    }

  render () {
      const {hide, title, content, handleSure, btnText } = this.state;
      if(hide){
          return null;
      }
      return (
          <DialogTouch
              title={title}
              btnText={btnText}
              handleSure={handleSure}
              handleClose={this.initClose}
          >{content}</DialogTouch>
      );
  }

    open(config){
        // 如果配置中传递了关闭的方法则需要先调用关闭方法，在调用元素关闭
        const {handleSure} = config;
        if(handleSure){
            config.handleSure = ()=>{
                handleSure();
                this.initClose();
            }
        }
        this.setState({
            ...config,
            hide: false
        })
    };

    close(){
        this.setState({
            hide: true
        })
    }
}
export default ConfirmDialog;