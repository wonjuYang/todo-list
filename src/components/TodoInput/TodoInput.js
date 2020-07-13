import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


// input 과 버튼이 함꼐 있는 컴포넌트입니다.
/*
    value: input 값
    onChange: input 변경 이벤트
    onInstert: 추가 버튼 클릭 이벤트
*/

const TodoInput = ({value, onChange, onInsert}) => {

    //Enter 키가 눌리면 onInsert를 실행합니다
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }


    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
};

export default TodoInput;