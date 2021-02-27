import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat/SidebarChat";
import db, { auth } from "../../firebase";

import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.LOGOUT,
        });
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snap) =>
      setRooms(
        snap.docs.map((doc) => ({
          id: doc?.id,
          data: doc?.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />

        <div className="sidebar__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon onClick={logOut} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room?.id} id={room?.id} name={room?.data?.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
