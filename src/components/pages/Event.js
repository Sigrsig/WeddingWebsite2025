import "./Event.css";

import React from "react";
import {
  Window,
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  Frame,
} from "react95";
import { Link, Outlet } from "react-router-dom";
import Draggable from "react-draggable";

function Event() {
  return (
    <Draggable>
      <Window className="window">
        <WindowHeader>
          <span>Event</span>
          {/* <Button>
            <span className="close-icon" />
          </Button> */}
        </WindowHeader>
        <WindowContent className="window-content"></WindowContent>

        <Frame variant="well" className="footer">
          1Put some useful information here
        </Frame>
      </Window>
    </Draggable>
  );
}

export default Event;
