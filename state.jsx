var LikeButton = React.createClass({
    // 定义组件的初始状态，初始 liked 为 false
    getInitialState: function() {
        return {liked: false};
    },
    // 通过 setState 修改组件状态
    // setState 过后会 React 会调用 render 方法重渲染
    myHandleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    // 通过 this.state 获取当前状态
    render: function() {
        var text = this.state.liked ? 'like' : 'havn\'t liked';
        return (
            <p onClick={this.myHandleClick}>
                you {text} this. Click to toggle.
            </p>
        );
    }
});

ReactDOM.render(
        <LikeButton />,
        document.getElementById('example')
);


var Switch = React.createClass({
    // 定义组件的初始状态，初始为关
    getInitialState: function() {
        return {
            open: false
        }
    },
    // 通过 this.state 获取当前状态
    render: function() {
        console.log('render switch component');
        var open = this.state.open;
        return  <label className="switch"> 
                    <input type="checkbox" checked={open} onClick={this.toggleSwitch}/> 
                </label>
    },
    // 通过 setState 修改组件状态
    // setState 过后会 React 会调用 render 方法重渲染
    toggleSwitch: function() {
        var open = this.state.open;
        this.setState({
            open: !open
        });
    }
})

ReactDOM.render(
    <Switch />,
    document.getElementById('example')
);

