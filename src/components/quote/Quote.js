import React,{useState, useEffect} from 'react';
import { getQuote } from '../../modules/QuoteManager';
import { QuoteCard } from './QuoteCard';

export const QuoteList = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({});
    const getQuotes = () => {
        return getQuote().then(quotesFromAPI => {
            setQuotes(quotesFromAPI)
    });
};

useEffect(() => {
    getQuotes();
}, []);

const handleClick = () => {
    setQuote(quotes[Math.floor(Math.random()*quotes.length)])
    
}

return (
<>
    <div className="quote-container">
        {quotes.length > 0 ? 
      <QuoteCard quote={quote} /> : <p>loading quote...</p>
        }
    </div> 
    <button onClick={handleClick}>Get Quote</button> 
    
 </>  
) 
};