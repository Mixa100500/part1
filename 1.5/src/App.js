const Header = (props) => {
  const name = props.course.name;

  return (
    <h1>
      {name}
    </h1>
  )
}

const Content = (props) => {
  const parts = props.course.parts;
  const result = parts.map(
      (part, index) => <Part  key = {index} part = {part.name} exercise = {part.exercises}/>
    );

  return (
    <div>
      {result}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part + ": " + props.exercise}
    </p>
  )
}

const Total = (props) => {
  const parts = props.course.parts;
  const exercises = parts.map(part => part.exercises);

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

  const part1 = {
    name: 'Fundamentals of React',
    exercises:10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3];

  const course = {
    name: 'Half Stack application development',
    parts
  }

  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App