import React from 'react';
import StudentContext from './StudentContext';

export default class DeleteStudent extends React.Component{
    state={
        id:""
    }
    static contextType = StudentContext
    updateFormField=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // deleteStudent = ()=>{
    //     this.context.DeleteStudent(this.state.id)
    // }
    render (){
        return (
            <React.Fragment>
                <input type="text" name="id" value={this.state.id} onChange={this.updateFormField}/>
                {/* <input type="submit" onClick={this.delete} */}
                <button onClick={()=>{this.context.deleteStudent(this.state.id)}}>Delete</button>
            </React.Fragment>
        )
    }
}