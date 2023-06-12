import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  showLoginPopup: true,
  setShowLoginPopup: () => {},
  showLoginButton: true,
  setShowLoginButton: () => {},
  showLogoutButton: false,
  setShowLogoutButton: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  setSavedEvents: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
  JWT: null,
  setJWT: () => {},
  refreshToken: null,
  setRefreshToken: () => {}
});

export default GlobalContext;
