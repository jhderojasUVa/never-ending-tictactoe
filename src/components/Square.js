import React from 'react';

export const Square = (props) => {
    const { value, onClick, user } = props;
        return (
            <button className="square" onClick={ () => onClick({ value: user }) }>
                { value }
            </button>
        );
};