// @ts-ignore
import React, {useRef, useState} from 'react'

interface TodoFormsProps {
    onAdd(title:string): void
}

// @ts-ignore
export const TodoForm: React.FC<TodoFormsProps> = (props) => {
    const [title, setTitle] = useState<string>('')
    const ref  = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
        ref.current!.value = ''
    }
    const keyPressEnter = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value)
        }
    };
    return (
        <div className={'input-field mt2'}>
            <input onChange={changeHandler}
                   onKeyPress={keyPressEnter}
                   value={title}
                   ref={ref}
                   type="text"
                   id={'title'}
                   placeholder={'Ведите название'}/>
            <label htmlFor="{'title'}"
                   className={'active'}>
                Ведите название
            </label>
        </div>
    );
}
