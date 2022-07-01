import io from "socket.io-client";

const serverEndpoint = "https://red-devils-quiz.herokuapp.com/";

const socket = io(serverEndpoint);


export default socket
