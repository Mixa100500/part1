import { useState } from "react";

function randomInteger(max) {
  let rand = Math.random() * (max + 1);
  return Math.floor(rand);
}

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Better = (props) => {

  return(
    <>
      <h2>Anecdote with most votes </h2>
      <div>
        {props.anecdot}
      </div>
      <div>
        has {props.vote} votes
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  function addVotes(votes, index, f, oldMax) {
    const copy = [...votes];
    copy[index] += 1;
    checkMore(copy[index], oldMax);
    f(copy);
  }

  function checkMore(a, b) {
    if (a <= b) return;
    let c = a;
    setMaxGrade(c);
  }

  const array = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(array);
  const [selected, setSelected] = useState(0);
  const [maxGrade, setMaxGrade] = useState(0);

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        <div>{anecdotes[selected]}</div>
        <div>has {votes[selected]} votes</div>
      </div>
      <Button 
        handleClick={() => addVotes(votes, selected, setVotes, maxGrade)} 
        text="vote" />
      <Button 
        handleClick={() => setSelected(randomInteger(anecdotes.length - 1))} 
        text="next anecdote" />
      <Better 
        anecdot={anecdotes[votes.indexOf(maxGrade)]}
        vote={maxGrade}
        />
    </>
  );
}

export default App