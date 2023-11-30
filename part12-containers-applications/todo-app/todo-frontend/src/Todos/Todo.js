const Todo = ({ text, done, doneInfo, notDoneInfo }) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {text} 
      </span>
      {done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo