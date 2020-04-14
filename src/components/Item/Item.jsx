import React from 'react';
import mod from './Item.module.css';
import TodoList from "./TodoList/TodoList";
import AddNewItemForm from "./TodoListHeader/AddNewItemForm";

class Item extends React.Component {

    state = {
        newTodoListId: 0
    };

    addNewTodolist = (title) => {
        this.props.addTodolist(title);
    };

    render() {

        let todolists = this.props.todolists.map(t => {
            return <TodoList key={t.id} id={t.id} title={t.title} tasks={t.tasks}/>
        });

        return (
            <div className={mod.item}>
                <div className={mod.itemHeader}>
                    <AddNewItemForm addNewTitle={this.addNewTodolist}/>
                    {this.props.isAuth
                        ? <div>{this.props.login}
                            <div onClick={this.props.logout} className={mod.logout}>logout</div>
                        </div>
                        : <div>Login</div>}
                </div>
                <div className={mod.App}>
                    {todolists}
                </div>
            </div>
        );
    }
}

export default Item;
