// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  updateRooms: function(data) {
    //roomname is important to this
    // data.forEach(msg => Rooms._data.push(msg.roomname));

    data.forEach(function (msg) {
      if (msg.roomname) {
        var trimmedRoomName = msg.roomname.trim();
      }

      if (
        Rooms._data.indexOf(trimmedRoomName) === -1 &&
        msg.roomname &&
        trimmedRoomName.indexOf('{') === -1
       ) {

        Rooms._data.push(trimmedRoomName);
      }
    });

    // console.warn('UPDATED ROOMS LIST');
    // console.log(Rooms._data);
  }
};