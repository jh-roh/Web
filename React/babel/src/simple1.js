/* eslint-disable */
function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";
   
    return <button onClick={() => setLiked(!liked)}>{text}</button>;
    // return React.createElement(
    //   "button",
    //   { onClick: () => setLiked(!liked) },
    //   text
    // );
  }

  function Container() {
    const[count, setCount] = React.useState(0);
    return (
      <div>
        <LikeButton/>
      
        <div style={{marginTop: 20, color: 'red'}}>
          <span>현재 카운트: </span>
          <span style={{marginRight:10}}>{count}</span>
          <button onClick={() => setCount(count + 1)}>증가</button>
          <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
      </div>


    )
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement(LikeButton),
    //   React.createElement(
    //     "div",
    //     {style : {marginTop: 20}},
    //     React.createElement("span", null, "현재 카운트:"),
    //     React.createElement("span", {style: {marginRight:10}}, count),
    //     React.createElement(
    //         "button",
    //         {onClick: () => setCount(count+1)},
    //         "증가"
    //     ),
    //     React.createElement(
    //       "button",
    //       {onClick: () => setCount(count-1)},
    //       "감소"
    //     )
    //   )
    // );
  }



  const domContainer1 = document.getElementById('root1');
  ReactDOM.render(React.createElement(LikeButton), domContainer1);
  
  const domContainer2 = document.getElementById('root2');
  ReactDOM.render(React.createElement(LikeButton), domContainer2);

  const domContainer3 = document.getElementById('root3');
  ReactDOM.render(React.createElement(LikeButton), domContainer3);

  const domContainer4 = document.getElementById('root4');
  
  ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton)
    ),
    domContainer4
  );

  const domContainer5 = document.getElementById('root5');
  ReactDOM.render(React.createElement(Container), domContainer5)

