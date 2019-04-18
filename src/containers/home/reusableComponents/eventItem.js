import React from "react";
import { Button } from "semantic-ui-react";
import firebaseProvider from "../../../config/FireConfig";
export default function EventItem(props) {
  const { event } = props;
  var email = [];

  function joinEvent() {
    var joinList = event.joined;
    joinList.push(localStorage.getItem("userId"));
    console.log(joinList);
    firebaseProvider
      .database()
      .ref("events/" + event.eventId)
      .update({
        joined: joinList
      });
  }

  function userName(id) {
    firebaseProvider
      .database()
      .ref("users/" + id + "/email")
      .on("value", function(snapshot) {
        console.log(snapshot.val());
      });
  }

  function leaveEvent() {
    var joinList = event.joined;
    var found = event.joined.find(function(element) {
      return element === localStorage.getItem("userId");
    });
    if (found !== undefined) {
      var index = event.joined.indexOf(localStorage.getItem("userId"));
      joinList.splice(index, 1);
      firebaseProvider
        .database()
        .ref("events/" + event.eventId)
        .update({
          joined: joinList
        });
    }
  }

  function Join() {
    var found = event.joined.find(function(element) {
      return element === localStorage.getItem("userId");
    });
    console.log("Hi ! I found this!", found);
    if (found === undefined) {
      return (
        <Button
          className="ui labeled icon green space_in_between"
          onClick={() => {
            joinEvent();
          }}
        >
          <i className="plus icon" />
          Join{" "}
        </Button>
      );
    } else {
      return (
        <Button
          className="ui labeled icon red space_in_between"
          onClick={() => {
            leaveEvent();
          }}
        >
          <i className="minus icon" />
          Leave{" "}
        </Button>
      );
    }
  }

  function JoinList() {
    userName(localStorage.getItem("userId"));
    return (
      <div className="joined-ppl-list">
        {" "}
        {event.joined.map(events => {
          return (
            <div>
              <div className="event_item-info-joined-label">
                <i className="circle blue icon tiny" />
                <span> {userName(events)} </span>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>
    );
  }

  return (
    <div
      className={`event_item-container ${props.className}`}
      onClick={props.onClickEvent}
    >
      <div className="event_item-date-container">
        <div className="event_item-date-day"> {event.date.day} </div>{" "}
        <div className="event_item-date-month"> {event.date.month} </div>{" "}
      </div>{" "}
      <div className="event_item-info-container">
        <div className="event_item-info-title"> {event.title} </div>{" "}
        <div className="event_item-info-date">
          <i className="clock outline grey icon" /> {event.date.entireDate}{" "}
        </div>{" "}
        <div className="event_item-info-location">
          <i className="map marker alternate grey icon" />{" "}
          {event.location.title}{" "}
        </div>{" "}
        <div className="event_item-info-description">
          <div className="event_item-info-description-label">
            <i className="circle orange icon tiny" />
            <span> Description: </span>{" "}
          </div>{" "}
          {event.description}{" "}
        </div>{" "}
        <div className="event_item-info-organizer">
          <div className="event_item-info-organizer-label">
            <i className="circle orange icon tiny" />
            <span> Organizer: </span>{" "}
          </div>{" "}
          {event.organizer}{" "}
        </div>{" "}
        <div className="event_item-info-category">
          <div className="event_item-info-category-label">
            <i className="circle orange icon tiny" />
            <span> Category: </span>{" "}
          </div>{" "}
          {event.category}{" "}
        </div>{" "}
        <div className="event_item-info-joined">
          <div className="event_item-info-joined-label">
            <i className="circle green icon tiny" />
            <span> Participants: </span>{" "}
          </div>{" "}
          {event.joined.length}{" "}
        </div>{" "}
        <div className="event_item-info-joined">
          <JoinList />
        </div>{" "}
      </div>{" "}
      <div className="button-list">
        <Join />
        <Button
          className="ui labeled icon blue space_in_between"
          onClick={() => {}}
        >
          <i className="edit icon" />
          Edit{" "}
        </Button>{" "}
      </div>{" "}
      <div className="event_item-action-container" />
    </div>
  );
}
