class ToDoItem extends React.Component {

    render(){
        const wordsList = this.props.items.map((word, index) => {
        return (<div className="box" value={index}>
                <p>{word[0]}</p>
                <p>{moment(word[1]).format("DD MMM YYYY, h:mm:ss a")}</p>
                <button value= {index} onClick={() => {this.props.delete(event)}}>Delete this</button>
            </div>);
      });
        return(<div>{wordsList}</div>)
    }

}

class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : [],
      class: "",
      warning: ""
    }
    this.delete = this.delete.bind(this);
  }

  delete(event){
    this.state.list.splice(event.target.value,1);
    let newState = {
        list: this.state.list
    };
    this.setState(newState);
    console.log("end of delete function", this.state.list);
  }

  addItem(){
    console.log("inside add item:", this.state);
    if(this.state.word.length >= 1 && this.state.word.length < 200){
        this.state.list.push([this.state.word, new Date()]);
        this.setState({word: "", warning: "", class:""});
    }else{
        this.setState({class: "warning"});
        this.setState({warning: "Input must be at least 1 character and not more than 200 characters"})
    }
  }

  changeHandler(){
    this.setState({word:event.target.value});
  }

  render() {
      return (
        <div className="list">
          <input onChange={()=>{this.changeHandler()}} value={this.state.word} className={this.state.class}/>
          <p>{this.state.warning}</p>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <div>
            <ToDoItem items={this.state.list} delete={this.delete}/>
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