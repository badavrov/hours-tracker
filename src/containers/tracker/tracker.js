import React from 'react';
import Day from '../../components/tracker/date';

export default class Tracker extends React.Component {
    render() {
        return (
            <div className="container">
                <Day />
            </div>
        )
    }
}