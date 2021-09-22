
import React from "react";
import List from "./List";
import Input from "./Input"

    class App extends React.Component{

         state={
         Tasks:["make Coffee","house cleaning","drink water 10 times","sleep at 10 pm","good use of free time"],
         currInput : "",
        }
         deleteTasks=(singletask)=>{
             let currTasksArr=this.state.Tasks;
             let filteredArr=currTasksArr.filter((element)=>{
                 return element !==singletask;
             });
             this.setState({Tasks:filteredArr});
         }; 
         handleCurrInput=(value)=>{
             this.setState({currInput:value});
         };
         handleTasks=()=>{
              this.setState
              ({
                Tasks:[...this.state.Tasks,this.state.currInput],
                currInput:"",
              });
         }

        render=()=>{

            return (
               
               <div>
                   <Input
                    handleCurrInput={this.handleCurrInput}
                     handleTasks={this.handleTasks}
                     currInput={this.currInput}
                     />
                   <List
                    Tasks={this.state.Tasks}
                    deleteTasks={this.deleteTasks}
                    />
                 </div>
            );

        };
    };

export default App; 