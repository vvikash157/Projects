let List=(props)=>{
        return(

            <div className="ul-part">
                        {props.Tasks.map((el,index)=>{

                            return (
                             <div className="list-div" key={index}>
                                 {el}{"     "}
                                 <button 
                                 onClick={()=>{
                                     props.deleteTasks(el)
                                
                              }}
                             >
                             Delete
                             </button>   
                             </div>
                            );
                        })}
            </div>

        )
    

}
export default List;