class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    this.state.list.push(this.state.word);
    this.setState({word: ""});
  }

  changeHandler(){
    this.setState({word:event.target.value});
  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      const wordsList = this.state.list.map((word) => {
        return <p>{word}</p>
      })

      return (
        <div className="list">
          <input onChange={()=>{this.changeHandler()}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <div>
            <h3>List of words:</h3>
            {wordsList}
          </div>
        </div>
      );
  }
}

ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById('root')
);