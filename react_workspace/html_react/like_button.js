'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    // <button onClick="this,setState({like: true})"
    /**
     * <button onClick="onClickHandler()">Like</button>
     * onClickHandler(){this.setState({like:true})}
     */
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
// react 기본 컨셉 - 페이지를 이동하지 않고 바뀌는 부분만 렌더링
ReactDOM.render(e(LikeButton), domContainer);