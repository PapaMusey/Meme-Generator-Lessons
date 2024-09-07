import logo from './logo.svg';
import './App.css';
import Jokes from './Jokes.js';
import jokesData from './jokesData.js'

function App() {
  // console.log(jokesData) // just to confirm if you have truly imported jokesData
    const jokeElements = jokesData.map(joke => {
      return <Jokes setup={joke.setup} punchline={joke.punchline}/>
    })

  return (
    <div>
      {jokeElements}
    </div>
  
);
}


export default App;
