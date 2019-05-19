import React, { Component } from "react";
import {
    Divider,
    Header,
    Segment,
    Icon,
    Menu,
    Dropdown,
    Image,
    Input,
    Label,
    List
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import faker from "faker";


import UpdatePlanModal from './UpdatePlanModal';

export default class cardPlan extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashPlan">
                <Segment color="red">
                    <Header as="h3">Plans</Header>
                    <Divider section />
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon
                                name="book"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">Fii code</List.Header>
                                <Label color="green">
                                    Members:
                                    <Label.Detail>30</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label >
                                <UpdatePlanModal></UpdatePlanModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}

                        <List.Item>
                            <List.Icon
                                name="book"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">Fii code</List.Header>
                                <Label color="green">
                                    Members:
                                    <Label.Detail>30</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label>
                                <UpdatePlanModal></UpdatePlanModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}

                        <List.Item>
                            <List.Icon
                                name="book"
                                size="large"
                                verticalAlign="middle"
                            />
                            <List.Content>
                                <List.Header as="a">Fii code</List.Header>
                                <Label color="green">
                                    Members:
                                    <Label.Detail>30</Label.Detail>
                                </Label>
                                <Label color="green">In progres</Label>
                                <Label color="red">
                                    Due Date
                                    <Label.Detail>25.02.2012</Label.Detail>
                                </Label>
                                <Label>
                                <UpdatePlanModal></UpdatePlanModal>
                                </Label>
                            </List.Content>
                        </List.Item>{" "}
                    </List>
                </Segment>
            </div>
        );
    }
}
