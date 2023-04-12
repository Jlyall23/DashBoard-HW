

import React, {useState} from "react";
function WebsiteVisitors(props) {
    const [count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1)
    }
    return (
      <div id='WebsiteVisitors'>
Website Visitors
<br/>
<button onClick={handleClick}>Click When you Visit This Page!</button>
    <p>Website Visits: {count}</p>
    </div> 
    );
  
}
  export default WebsiteVisitors;