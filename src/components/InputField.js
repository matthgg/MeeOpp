import React, { Component } from 'react';
import '../assets/stylesheets/inputField.scss';

class InputField extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: this.props.input
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return(
            <div className="formContainer">
                <div className="row">
                    <div className="col">
                        <label htmlFor="input" className="col-form-label">Search</label>
                    </div>

                    <div className="col-6">
                        <input type="text" className="form-control" name="input" id="input" value={this.state.input} onChange={this.handleChange}/>
                    </div>

                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.emit(this.state.input)}>Enter</button>
                    </div>
                </div>
                
            </div>
        )   
    }

}

export default InputField