const Header = (course) => {
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (exercise) => {
  return(
    <div>
      <p>{exercise.name} {exercise.count}</p>
    </div>
  )
}

const Total = (total) => {
  return(
    <div>
      <p>Number of exercises {total.num1 + total.num2 + total.num3}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  console.log(course)
  return (
    <div>
      <Header name={course} />
      <Content name={part1} count={exercises1} />
      <Content name={part2} count={exercises2} />
      <Content name={part3} count={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App