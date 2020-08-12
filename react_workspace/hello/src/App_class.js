// 클래스 형식

import React, { Component } from 'react'; //{}안에 있는 것은 default 되어있지 않다

// import Component를 하지 않았을 경우, React.Component
class App extends Component {
    render() {
        const name = "song";
        return (
            <div>
                <h1>안녕안녕 {name}</h1>
            </div>
        );
    }
}

export default App;