
import './App.css';
import Nav from './components/nav'
import Reviews from './components/reviews'
import AverageRating from './components/rating'
import SentimentAnalysis from './components/sentiment';
import WebsiteVisitors from './components/visitors';

function App() {
  return (
<div id='Main'>
    <Nav/>
    <Reviews id='Reviews'/>
    <AverageRating id='AverageRating'/>
    <SentimentAnalysis id='SentimentAnalysis'/>
    <WebsiteVisitors id='WebsiteVisitors'/>
</div>
  );
}

export default App;
