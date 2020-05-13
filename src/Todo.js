import React from "react";

class Sohail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : " ",
      todo : []
    }
  }

  onsubmits = (e) =>{

    e.preventDefault();

    let todo = this.state.todo;
    let input = this.state.name;
    todo.push(input)

    this.setState({

        todo : todo,
        name : " "

    })
      
  }  

  handle = (event) => {
    // console.log(event.target.value)

    this.setState({
      name : event.target.value
    })
      
    }
  
    delete = (event) => {
      let id = event.target.id;
      // console.log(id)

      var item = this.state.todo;
      item.splice(id,1);
      this.setState({
        todo: item,
        name : " "
      })
    }


  render(){
                  // Another Method 

              // let itemlist = this.state.todo.map((e,i)=>
              // <li  key={i}>{e} <span onClick={this.delete}id={i}>X</span></li>
              // )

    return(

      <React.Fragment>
        <h1>To-Do List!</h1>
        <form onSubmit={this.onsubmits}>
        <input type="text" placeholder="What to do" value={this.state.name} onChange={this.handle} />
        <br />
        <button className="btn">Press</button>
        </form>

        <br />
        
   <div>

           {
             this.state.todo.map((e,i) =>{
               return(
               <li className="text" key={i}>{e} <span onClick={this.delete}id={i}>x</span></li>
               )
             }

             )
           }

  </div>
  
      </React.Fragment>
    )
  }
}
export default Sohail;