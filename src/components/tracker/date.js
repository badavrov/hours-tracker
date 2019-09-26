import React from 'react';
import { Tabs, Row, Col } from 'antd';
import CardItem from './card/card';
import TrackerContext from './TrackerContext';
import Summery from './summery';

const { TabPane } = Tabs;

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: [
                {
                    day: 'monday',
                    holiday: false,
                    type: 'weekday',
                },
                {
                    day: 'tuesday',
                    holiday: false,
                    type: 'weekday',
                },
                {
                    day: 'wednesday',
                    holiday: false,
                    type: 'weekday',
                },
                {
                    day: 'thursday',
                    holiday: false,
                    type: 'weekday',
                },
                {
                    day: 'friday',
                    holiday: false,
                    type: 'weekday',
                },
                {
                    day: 'saturday',
                    holiday: false,
                    type: 'weekend',
                },
                {
                    day: 'sunday',
                    holiday: false,
                    type: 'weekend',
                }
            ]
        };
    }

    render() {
        const { week } = this.state;
        return (
            <div>
                <Tabs defaultActiveKey="1" >
                    {week.map(i => (
                        <TabPane tab={`${i.day.toUpperCase()}`} key={i.day}>
                            <TrackerContext.Provider value={i}>
                                <Row>
                                    <Col span={12}>
                                        <CardItem />
                                    </Col>
                                    <Col span={12}>
                                        <Summery />
                                    </Col>
                                </Row>
                            </TrackerContext.Provider>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}