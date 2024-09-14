import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Profdashnav from "../../components/prof/Profdashnav";

function Schedclass() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);

  const Date_Click_Fun = (date) => {
    setSelectedDate(date);
  };

  const Event_Data_Update = (event) => {
    setEventName(event.target.value);
  };

  const Create_Event_Fun = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
      };
      setEvents([...events, newEvent]);
      setSelectedDate(null);
      setEventName("");
      setSelectedDate(newEvent.date);
    }
  };

  const Update_Event_Fun = (eventId, newName) => {
    const updated_Events = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          title: newName,
        };
      }
      return event;
    });
    setEvents(updated_Events);
  };

  const Delete_Event_Fun = (eventId) => {
    const updated_Events = events.filter((event) => event.id !== eventId);
    setEvents(updated_Events);
  };
  return (
    <div className="flex-col flex w-full">
      <Profdashnav />
      <div className="flex flex-col md:mx-16 md:flex-row space-y-5  justify-center items-center mt-8 md:space-x-10 md:space-y-0">
        <div className="flex ">
          <Calendar
            value={selectedDate}
            onClickDay={Date_Click_Fun}
            className={"md:w-[600px] text-xl"}
            tileClassName={({ date }) =>
              selectedDate &&
              date.toDateString() === selectedDate.toDateString()
                ? "selected"
                : events.some(
                    (event) => event.date.toDateString() === date.toDateString()
                  )
                ? "event-marked"
                : ""
            }
          />
        </div>
        <div className="flex justify-center items-center w-full">
          {selectedDate && (
            <div className="flex-col flex w-full">
              <h2 className="text-center my-2 font-semibold text-xl">
                {" "}
                Schedule Class{" "}
              </h2>
              <p className="my-4 text-center">
                <span className="font-semibold"> Selected Date:</span>{" "}
                <span>{selectedDate.toDateString()}</span>{" "}
              </p>
              <div className=" flex-col space-y-4 md:flex-row md:space-y-0 flex justify-center items-center my-4 md:space-x-4">
                <input
                  type="text"
                  placeholder="Event Name"
                  value={eventName}
                  onChange={Event_Data_Update}
                  className="input  input-bordered w-[80%] md:w-full max-w-lg"
                />
                <button className="btn" onClick={Create_Event_Fun}>
                  Click Here to Add Event
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center my-10">
        {events.length > 0 && selectedDate && (
          <div className="flex-col space-y-2 w-full items-center justify-center text-center">
            <h2 className="text-xl font-semibold"> My Scheduled Class List </h2>
            <div className="divider"></div>
            <div className="">
              {events.map((event) =>
                event.date.toDateString() === selectedDate.toDateString() ? (
                  <div key={event.id} className="">
                    <div className="">
                      <span className="font-semibold">Date: </span>
                      <span className="">{event.date.toDateString()}</span>
                      <div className="text-lg">
                        <span className="font-semibold">Title: </span>
                        <span className="event-title"> {event.title} </span>
                      </div>
                      <div className="divider"></div>
                      <div className="space-x-4">
                        <button
                          className="btn"
                          onClick={() =>
                            Update_Event_Fun(
                              event.id,
                              prompt("ENTER NEW TITLE")
                            )
                          }
                        >
                          Update Event
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => Delete_Event_Fun(event.id)}
                        >
                          Delete Event
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Schedclass;
