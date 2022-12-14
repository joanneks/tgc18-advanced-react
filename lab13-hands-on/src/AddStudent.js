import React from 'react';
import StudentContext from './StudentContext';

export default class AddStudent extends React.Component{
    state={
        id:"",
        year_of_study:"",
        gender:"Female",
        graduated:"Yes"
    }
    static contextType = StudentContext;
    updateFormField=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addStudent = () => {
        // this.context.addStudent(this.state.id,this.state.year_of_study,this.state.gender,this.state.graduated)
        
        // alternatively, can pass parameters as object because there is too many parameters to pass
        let newStudent = {
            id:this.state.id,
            year_of_study:this.state.year_of_study,
            gender:this.state.gender,
            graduated:this.state.graduated
        }
        this.context.addStudent(newStudent)
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <label>Student Number:</label>
                    <input type="text" 
                        name="id" 
                        value={this.state.id} 
                        onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Year of Study:</label>
                    <input type="text" 
                        name="year_of_study" 
                        value={this.state.year_of_study} 
                        onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender"
                        value={this.state.gender} 
                        onChange={this.updateFormField}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                <div>
                    <label>Graduated:</label>
                    <label>Yes</label>
                    <input type="radio" 
                        name="graduated" 
                        value="Yes"
                        onChange={this.updateFormField}
                        checked={this.state.graduated==="Yes"?true:false}
                        />
                        <label>No</label>
                        <input type="radio" 
                            name="graduated" 
                            value="No" 
                            onChange={this.updateFormField}
                            checked={this.state.graduated==="No"?true:false}
                            />
                </div>
                <input type="submit" onClick={this.addStudent}/>

            </React.Fragment>
        )
    }

}