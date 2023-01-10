import { useState } from "react";

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const calcPositive = (marks) => {
  const assessments = marks.slice();
  const averageSum = assessments.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue, 0
  );
  
  const posotiveArray = assessments.filter(a => a === 1);
  const positive = (posotiveArray.length / marks.length * 100).toFixed(2) + '%';
  const average = (averageSum / marks.length).toFixed(2);

  return {positive, average}
}

const StatisticksTr = (props) => {

  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
};

const Statisticks = ({good, neutral, bad, marks}) => {
  let elements;

  if (marks.length === 0) {
    elements = <p>No feedback given</p>;
  } else {
    const {positive, average} = calcPositive(marks);
    elements = (
      <div className="statisticks">
        <h2>
          statistics
        </h2>
        <table>
          <StatisticksTr text="good" value={good}/>
          <StatisticksTr text="neutral" value={neutral}/>
          <StatisticksTr text="bad" value={bad}/>
          <StatisticksTr text="all" value={marks.length}/>
          <StatisticksTr text="average" value={average}/>
          <StatisticksTr text="positive" value={positive}/>
        </table>
      </div>
      );
  }
  return elements
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [marks, setMarks] = useState([]);

  const handleClick = (fun, arg, mark) => () => {
    fun(arg + 1);
    setMarks(marks.concat(mark))
  }

  return (
    <div>
      <h2>
        give feedback
      </h2>
      <div className="evaluation">
        <Button 
          handleClick={handleClick(setGood, good, 1)} 
          text="good" 
        />
        <Button 
          handleClick={handleClick(setNeutral, neutral, 0)} 
          text="neutral"
        />
        <Button 
          handleClick={handleClick(setBad, bad, -1)} 
          text="bad"
        />
      </div>
      <Statisticks 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        marks={marks} 
      />
    </div>
  )
}

export default App