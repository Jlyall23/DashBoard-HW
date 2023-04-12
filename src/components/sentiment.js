

import React from "react";
function SentimentAnalysis(props) {
    let ratingArray= [
        { type:'Positive ratings:' , number: '960'},
        { type:'Neutral ratings' , number: '122'},
        { type:'Negative ratings' , number: '321'}
    ];
    return (
      <div id='SentimentAnalysis'>
Sentiment Analysis
<span id='Array'>
{ ratingArray.map((item)=>(
    <div id='array'>
        <p>{item.type}</p>
        <p>{item.number}</p>
    </div>
)) 
}
</span>
</div>
    );
  }
  
  export default SentimentAnalysis;