import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {

        //레퍼런스를 만든 것, 이렇게 하면 props를 사용할 때마다 this.props.onToggle처럼 매번 앞부분에 붙이는 this.props 생략 가능
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                    }
                }>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;