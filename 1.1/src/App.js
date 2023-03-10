const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  const parts =  props.parts;
  const content = parts.map((step, part) => {
    return (
      <p key={step}>
       {step + ': ' + props.exercises[part]}
      </p>
    )
  });

  return (
    <>
    {content}
    </>
  )
}

const Total = (props) => {
  const exercises = props.exercises;
  const sum = exercises.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} exercises={exercises}/>
      <Total exercises = {exercises}/>
    </div>
  )
}

export default App