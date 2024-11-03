import React, { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import Userdashnav from "../../components/user/Userdashnav";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import { TutorContext } from "../../Context/Context ";

function Usermsg() {
  const [showdelaytext, setShowDelayedText] = useState(true);
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = [
    { id: 1, name: "Nilesh", status: "online" },
    { id: 2, name: "Nitish", status: "offline" },
    // Add more contacts as needed
  ];

  const messages = [
    { id: 1, sender: "Nilesh", text: "Hello!", isIncoming: true },
    { id: 2, sender: "You", text: "Hi there!", isIncoming: false },
    // Add more messages as needed
  ];

  return (
    <div>
      {" "}
      {showdelaytext || (
        <div className="absolute top-[40%] right-[40%] transform -translate-x-1/2 -translate-y-1/2 spinner md:top-1/2 md:left-1/2">
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}{" "}
      {!showdelaytext || (
        <div className="flex flex-col w-full ">
          <Userdashnav />
          <ToastContainer className="z-[500]" />
          <div className="w-full h-auto justify-between  items-center  ">
            <div className="flex h-screen">
              {/* Contacts Panel */}
              <div
                className={`${
                  isPanelExpanded
                    ? "absolute inset-0 z-10 w-full bg-gray-200 md:relative md:w-1/3"
                    : "w-16 bg-gray-200 md:w-1/3"
                } p-4 overflow-y-auto transition-all duration-300`}
              >
                <div
                  className={`flex items-center justify-between ${
                    isPanelExpanded ? "mt-10 px-3" : ""
                  } `}
                >
                  <div
                    className={`text-xl font-semibold ${
                      isPanelExpanded ? "block" : "hidden md:block"
                    }`}
                  >
                    <h1>Contacts</h1>
                  </div>
                  {/* Toggle button for Android */}
                  <button
                    className="md:hidden block p-2 text-gray-500"
                    onClick={() => setIsPanelExpanded(!isPanelExpanded)}
                  >
                    {isPanelExpanded ? "←" : "→"}
                  </button>
                </div>

                <div className="hidden md:block" >
                    <input
                      type="text"
                      placeholder="Search"
                      className="mt-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <ul className="mt-4 space-y-4">
                      {contacts.map((contact) => (
                        <li
                          key={contact.id}
                          className={`flex items-center p-2 cursor-pointer ${
                            selectedContact === contact.id
                              ? "bg-blue-100"
                              : "hover:bg-gray-300"
                          }`}
                          onClick={() => {
                            setSelectedContact(contact.id);
                            setIsPanelExpanded(false); // Collapse panel on contact select
                          }}
                        >
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full"></div>
                          <div className="ml-3">
                            <p className="text-lg font-medium">
                              {contact.name}
                            </p>
                            <p
                              className={`text-sm ${
                                contact.status === "online"
                                  ? "text-green-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {contact.status}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                {isPanelExpanded && (
                  <>
                    <input
                      type="text"
                      placeholder="Search"
                      className="mt-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <ul className="mt-4 space-y-4">
                      {contacts.map((contact) => (
                        <li
                          key={contact.id}
                          className={`flex items-center p-2 cursor-pointer ${
                            selectedContact === contact.id
                              ? "bg-blue-100"
                              : "hover:bg-gray-300"
                          }`}
                          onClick={() => {
                            setSelectedContact(contact.id);
                            setIsPanelExpanded(false); // Collapse panel on contact select
                          }}
                        >
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full"></div>
                          <div className="ml-3">
                            <p className="text-lg font-medium">
                              {contact.name}
                            </p>
                            <p
                              className={`text-sm ${
                                contact.status === "online"
                                  ? "text-green-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {contact.status}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Messages Panel */}
              <div className="w-full overflow-y-hidden flex flex-col bg-white p-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                  {selectedContact ? (
                    <>
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-500 rounded-full"></div>
                        <div className="ml-3">
                          <p className="text-lg font-medium">
                            {
                              contacts.find((c) => c.id === selectedContact)
                                ?.name
                            }
                          </p>
                          <p className="text-sm text-gray-500">Online</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">
                      Select a contact to start chatting
                    </p>
                  )}
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isIncoming ? "justify-start" : "justify-end"
                      }`}
                    >
                      <p
                        className={`p-3 rounded-lg max-w-xs ${
                          message.isIncoming
                            ? "bg-gray-200 text-black"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {message.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex fixed self-center items-center bottom-4 w-2/3">
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 p-2 border border-gray-300 rounded-l"
                  />
                  <button className="p-2 bg-blue-500 text-white rounded-r">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Usermsg;
