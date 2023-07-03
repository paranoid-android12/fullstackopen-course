const Part = (content) => {
  return(
    <div>
      <p>{content.name} {content.num}</p>
    </div>
  )
}

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
      <p>{exercise.name1} {exercise.num1}</p>
      <p>{exercise.name2} {exercise.num2}</p>
      <p>{exercise.name3} {exercise.num3}</p>
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
      <Content name1={part1} num1={exercises1}  name2={part2} num2={exercises2}  name3={part3} num3={exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App