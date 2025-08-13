import { Server as SocketIOServer } from "socket.io";
import http from "http";

export const initSocketServer = (server: http.Server) => {
  const io = new SocketIOServer(server);
  io.on("connection", (socket) => {
    console.log("A user connected successfully");

    // listen for the notification event for the frontend
    socket.on("notification", (data) => {
      // broadcast the notification data all connected clients (admin dashboard)
      io.emit("newNotification", data);
    });
    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
