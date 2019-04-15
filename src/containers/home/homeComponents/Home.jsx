import React, { Component } from "react";
import moment from "moment";
import { DatetimePickerTrigger } from "rc-datetime-picker";
import OlMapFunction from "../../../map/OlMap";
import { Search, Select, Icon, Transition } from "semantic-ui-react";

//services
import firebaseProvider from "../../../config/FireConfig";

//components
import EventItem from "../reusableComponents/eventItem";

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestionForLocation: "",
            eventListVisible: true,
            createEventVisible: false,
            moment: moment(),
            activeIndex: -1
        };
    }

    componentDidMount = () => {
        const appMap = new OlMapFunction({
            projectionCode: "EPSG:3857",
            divId: "mapContainer",
            zoom: 3,
            center: [0, 4813697]
        });
        this.appMap = appMap;
        this.initializeEventList();
    };

    initializeEventList = () => {
        firebaseProvider
            .database()
            .ref("events")
            .on("value", () => {
                this.props.onGetEventList();
            });
    };

    //animation logic between create event and events list
    onClickCreateEvent = () => {
        this.setState({
            eventListVisible: false
        });
    };

    onCompleteCreateEvent = () => {
        this.setState({
            createEventVisible: true
        });
    };

    onClickBackToEventList = () => {
        this.setState(
            {
                createEventVisible: false,
                suggestionForLocation: ""
            },
            () => {
                this.props.onResetFormState();
            }
        );
    };

    onCompleteBackToEventList = () => {
        this.setState({
            eventListVisible: true
        });
    };

    handleLocationInput = (ev, data) => {
        this.setState({ suggestionForLocation: data.value }, () => {
            if (data.value !== "") {
                this.props.onGetLocationOptions(data.value);
            }
        });
    };

    handleUpdateFormState = (ev, data) => {
        this.props.onUpdateFormState(data.name, data.result);
    };

    handleInputChange = ev => {
        // Update form elements
        const propPath = ev.target.name;
        const payload = ev.target.value;
        this.props.onUpdateFormState(propPath, payload);
    };

    removeSelectedLocation = () => {
        this.setState(
            {
                suggestionForLocation: ""
            },
            () => {
                this.props.onRemoveSelectedLocation();
            }
        );
    };

    handleDateChange = moment => {
        this.setState(
            {
                moment
            },
            () => {
                const payload = {
                    day: moment.format("DD"),
                    month: moment.format("MMM").toUpperCase(),
                    entireDate: moment.format("LLLL")
                };
                this.props.onUpdateFormState("date", payload);
            }
        );
    };

    handleCategoryChange = (ev, data) => {
        this.props.onUpdateFormState(data.name, data.value);
    };

    checkIfCanSave = () => {
        const {
            title,
            organizer,
            description,
            location,
            date,
            category,
            joined
        } = this.props.home.formState;
        return (
            title !== "" &&
            organizer !== "" &&
            description !== "" &&
            location.title !== "" &&
            date !== "" &&
            category !== "" &&
            joined !==""
        );
    };

    handleSaveEvent = () => {
        this.props.onSaveEvent(this.props.home.formState);
        this.onClickBackToEventList();
    };

    onClickEvent = (event, index) => {
        const { location } = event;
        this.setState({
            activeIndex: index
        });
        document.getElementById("marker").dataset.tooltip = event.title;
        this.appMap.addMarker(
            location.longitude,
            location.latitude,
            document.getElementById("marker")
        );
        this.appMap.centerMap(location.longitude, location.latitude);
    };

    render() {
        const {
            isFetching,
            isFetchingSearch,
            locationOptions,
            categoryOptions,
            formState,
            eventList
        } = this.props.home;
        const shortcuts = {
            Today: moment(),
            Tomorrow: moment().add(1, "days")
        };
        return (
            <div className="home__container">
                <div id="mapContainer" className="home__container-map">
                    <div style={{ display: "none" }}>
                        <div
                            id="marker"
                            className="ui icon"
                            data-position="top center"
                        >
                            <i className="map pin orange icon big" />
                        </div>
                    </div>
                </div>
                <div className="home__container-details">
                    <div className="home__container-actions">
                        <div className="home__container-title">
                            Promote your event
                        </div>
                        <div className="home__container-buttons">
                            <button
                                className={`ui labeled icon orange ${
                                    this.state.createEventVisible
                                        ? "disabled"
                                        : ""
                                } button`}
                                onClick={this.onClickCreateEvent}
                            >
                                <i className="plus icon" />
                                Create event
                            </button>
                        </div>
                    </div>
                    <Transition
                        visible={this.state.eventListVisible}
                        animation="fade right"
                        duration={200}
                        onComplete={
                            this.state.eventListVisible
                                ? null
                                : this.onCompleteCreateEvent
                        }
                    >
                        <div className="home__container-dashboard">
                            {!isFetching
                                ? eventList.map((item, index) => (
                                      <EventItem
                                          key={index}
                                          event={item}
                                          className={
                                              this.state.activeIndex === index
                                                  ? "active"
                                                  : ""
                                          }
                                          onClickEvent={() =>
                                              this.onClickEvent(item, index)
                                          }
                                      />
                                  ))
                                : ""}
                        </div>
                    </Transition>
                    <Transition
                        visible={this.state.createEventVisible}
                        animation="fade left"
                        duration={500}
                        onComplete={
                            this.state.createEventVisible
                                ? null
                                : this.onCompleteBackToEventList
                        }
                        //add default user to list ? :/
                        //idk the id of creator ? 

                    >
                        <div className="home__container-dashboard">
                            <div className="location-label">
                                <Icon name="asterisk" color="red" size="tiny" />
                                <p>Add a location:</p>
                            </div>
                            <Search
                                fluid
                                name="location"
                                placeholder="Search ..."
                                loading={isFetchingSearch}
                                onResultSelect={(ev, data) =>
                                    this.handleUpdateFormState(ev, data)
                                }
                                onSearchChange={(ev, data) =>
                                    this.handleLocationInput(ev, data)
                                }
                                results={locationOptions}
                                value={this.state.suggestionForLocation}
                                className="location-field"
                            />
                            {formState.location.title !== "" ? (
                                <div className="selected-location">
                                    <div className="ui image label large">
                                        <Icon
                                            name="map marker alternate"
                                            color="orange"
                                        />
                                        {formState.location.title}
                                        <i
                                            className="delete icon"
                                            onClick={
                                                this.removeSelectedLocation
                                            }
                                        />
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="event_info">
                                <div className="event_info-title">
                                    <div className="event-name-label">
                                        <Icon
                                            name="asterisk"
                                            color="red"
                                            size="tiny"
                                        />
                                        <p>Event name:</p>
                                    </div>
                                    <div className="ui input">
                                        <input
                                            type="text"
                                            name="title"
                                            value={formState.title}
                                            placeholder="E.g. Party of the Year"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="event_info-organizer">
                                    <div className="event-organizer-label">
                                        <Icon
                                            name="asterisk"
                                            color="red"
                                            size="tiny"
                                        />
                                        <p>Organised by:</p>
                                    </div>
                                    <div className="ui input">
                                        <input
                                            type="text"
                                            name="organizer"
                                            value={formState.organizer}
                                            placeholder="E.g. The Event Organiser"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="event_date">
                                <div className="date-label">
                                    <Icon
                                        name="asterisk"
                                        color="red"
                                        size="tiny"
                                    />
                                    <p>Starts at:</p>
                                </div>
                                <DatetimePickerTrigger
                                    shortcuts={shortcuts}
                                    moment={this.state.moment}
                                    closeOnSelectDay={true}
                                    onChange={this.handleDateChange}
                                >
                                    <div className="ui action input">
                                        <input
                                            type="text"
                                            name="date"
                                            value={this.state.moment.format(
                                                "lll"
                                            )}
                                            readOnly
                                        />
                                        <button className="ui icon button">
                                            <i className="search icon" />
                                        </button>
                                    </div>
                                </DatetimePickerTrigger>
                            </div>
                            <div className="description-label">
                                <Icon name="asterisk" color="red" size="tiny" />
                                <p>Description:</p>
                            </div>
                            <div className="ui form">
                                <div className="field">
                                    <textarea
                                        rows="3"
                                        name="description"
                                        value={formState.description}
                                        onChange={this.handleInputChange}
                                        className="description-field"
                                    />
                                </div>
                            </div>
                            <div className="category-label">
                                <Icon name="asterisk" color="red" size="tiny" />
                                <p>Category:</p>
                            </div>

                            <Select
                                name="category"
                                className="category-select"
                                placeholder="Choose a category for your event"
                                options={categoryOptions}
                                onChange={(ev, data) =>
                                    this.handleCategoryChange(ev, data)
                                }
                            />

                            <div className="event-actions">
                                <div className="ui buttons">
                                    <button
                                        className="ui button"
                                        onClick={this.onClickBackToEventList}
                                    >
                                        Cancel
                                    </button>
                                    <div className="or" />
                                    <button
                                        className={`ui positive button ${
                                            this.checkIfCanSave()
                                                ? ""
                                                : "disabled"
                                        }`}
                                        onClick={this.handleSaveEvent}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div
                        className={`ui ${
                            isFetching ? "active" : "disabled"
                        } inverted dimmer`}
                    >
                        <div className="ui medium loader" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;
