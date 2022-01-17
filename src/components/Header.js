import React from 'react';
import PropTypes from 'prop-types'
import AddButton from './AddButton';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header>
            <div className='row justify-content-md-between'>
                <div className="col-md-auto">
                    <h1 style={ headingStyles }>{ title }</h1>
                </div>
                <div className="col-md-auto pt-3">
                    <AddButton onAdd={onAdd} showAdd={showAdd} />
                </div>
            </div>
        </header>
    )
}

const headingStyles = {
    color: 'black', 
    textAlign: 'left',
    padding: '10px 0'
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Header