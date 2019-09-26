import React from 'react';
import { Card, Form, Input, Button, InputNumber } from 'antd';
import TrackerContext from '../TrackerContext';
import './card.css';

const { TextArea } = Input;


export default class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            hours: null,
            comments: '',
        };
    }

    handleInputChange = (e) => {
        if (Number.isInteger(e)) {
            this.setState(
                { hours: e }
            );
        }
        this.setState(
            { comments: e }
        );
    }


    handleSubmit = (e, props) => {
        const { hours, comments, rows, payRate } = this.state;
        let data = rows;
        let id = 0;
        if (!data) {
            data = []
        }
        if (data.length) {
            id = data.length + 1
        } else {
            id = 1
        }
        const newRow = {
            id,
            hours,
            comments,
            payRate,
            day: props
        }
        this.setState({
            rows: [...data, newRow]
        })
        data = [...data, newRow];
        localStorage.setItem('myData', JSON.stringify(data))
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('myData'));
        this.setState({ rows: data });
    }

    render() {
        return (
            <TrackerContext.Consumer>
                {props => {
                    return (
                        <div style={{ position: 'relative', padding: '50px' }} className="card-container">
                            <Card title={props.day} bordered={false}>
                                <Form onSubmit={(e) => this.handleSubmit(e, props)}>
                                    <Form.Item>
                                        <p>Add working hours</p>
                                        <InputNumber min={0} max={8} onChange={(e) => this.handleInputChange(e)} />
                                    </Form.Item>
                                    <Form.Item>
                                        <p>Add comment</p>
                                        <TextArea placeholder="Add working comments" onChange={(e) => this.handleInputChange(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="dashed" htmlType="submit" >Save time</Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>
                    )
                }}
            </TrackerContext.Consumer>
        )
    }
}