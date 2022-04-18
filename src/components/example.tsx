const Example: React.FC<any> = (props) => {
  console.log(props)
  return <button onClick={props.testClick}>hi</button>
}

export default Example
