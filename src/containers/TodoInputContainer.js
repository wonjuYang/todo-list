import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//액션 함수들을 한꺼번에불러옵니다.
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';


class TodoInputContainer extends Component {

    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value} = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }

    render() {
        const { value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}


/* 이번에는 mapStateToProps와 mapDispatchToProps 함수에 대한 레퍼런스를
따로 만들지 않고, 그 내부에 바로 정의해 주었습니다. */

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);

