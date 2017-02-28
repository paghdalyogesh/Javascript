import React, {Component} from 'react'
import TodoItem from './TodoItem';
import Footer from './Footer';

class MainSection extends Component {

    render() {        
        return (
            <section className="main">
            	<ul className="todo-list">
            		<TodoItem />
            		<TodoItem />
            	</ul>
            	<Footer />
            </section>
        )
    }
}

export default MainSection