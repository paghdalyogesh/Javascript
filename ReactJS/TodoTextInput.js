import React, {Component} from 'react'

class TodoTextInput extends Component {

    render() {        
        return (
            <input 
            	placeholder="What todo?"
            	className="new-todo" />
        )
    }
}

export default TodoTextInput