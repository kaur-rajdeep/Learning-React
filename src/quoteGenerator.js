import React,{useState} from "react";
import './index.css';

const quotes=["“All that we are is the result of what we have thought.”",
            "“The most courageous act is still to think for yourself. Aloud.”",
            "“The greatest wealth is to live content with little.”",
            "“You will never 'find' time for anything. If you want time, you must make it.”",
            "“Your time is limited, so don't waste it living someone else's life.”",
            "“The best way to predict future is to create it.”",
            "“A lot of problems in the world would disappear if we talk to each other instead of about each other.”",
            "“If you want to live a happy life, tie it to a goal, not to people or objects”",
            "“Be kind whenever possible. It is always possible.”",
            "“The only way to do great work is to love what you do.”",
            "“Believe you can and you are halfway there.”"

]

function RandomQuotes(){
    const [quote,setQuote]=useState(quotes[0])
    
    function randomizeQuote(){
        const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(randomQuote)
    }

    return (<div className="rq">
        <div className="q" align="center">{quote}</div>
        <div align="center"><button onClick={randomizeQuote}>Click Here</button></div>
        
    </div>)
}

export default RandomQuotes