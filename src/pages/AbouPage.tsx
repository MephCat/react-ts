// @ts-ignore
import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage:  React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>
                Информация
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni odit temporibus voluptatibus! Aperiam debitis dolor facere ipsam ipsum itaque maiores, necessitatibus pariatur perspiciatis placeat porro sequi sunt unde veniam!
            </p>
            <button onClick={() => history.push('/')}>
                На главнуб
            </button>
        </>
    );
}
