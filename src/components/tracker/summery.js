import React from 'react';
import { DatePicker, Divider } from 'antd';

const { WeekPicker } = DatePicker;


export default class Summery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        };
    }


    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('myData'));
        this.setState({ rows: data });
    }

    RenderRows = () => {
        const { rows } = this.state;
        let data = rows;
        if (!data) {
            data = []
        }
        console.log(data)
        const mapData = data.map((row) => {
            if (row.day.type === 'weekday') return (
                <div key={row.id}>
                    <span>Day <b>{row.day.day}</b>, </span>
                    <span>spent <b>{row.hours}</b>hrs </span>
                    <p> Comments: {row.comments}</p>
                </div>
            )
            return (
                <div key={row.id}>
                    <span>Day <b>{row.day.day}</b> is <b>{row.day.type}</b>, </span>
                    <span>spent <b>{row.hours}</b>hrs </span><br />
                    <i>Note: Weekends we pay 150% hr</i>
                    <p> Comments: {row.comments}</p>
                </div>
            )
        });
        return (
            <div>{mapData}</div>
        );
    }

    render() {
        const { rows } = this.state;
        var sumHrs = 0;
        if (rows) {
            rows.map((row) => {
                sumHrs = sumHrs + row.hours
            });
        }

        return (
            <div className="summery-container">
                <h3>This week summery</h3>
                <span>Spent hours: <b>{sumHrs}</b>hrs</span>
                <Divider />
                <this.RenderRows />
            </div>
        )
    }
}