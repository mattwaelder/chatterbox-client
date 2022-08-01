// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // [ {}, {},... ]
  //from the message objects we will likely want:
  //username, text at minimum

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  updateMessages: function (data) {
    data.forEach(function(msg) {
      let currMsg = {};
      currMsg.username = msg.username;
      currMsg.currRoom = msg.roomname;
      currMsg.text = msg.text;
      //created at
      currMsg.createdAt = msg.created_at;
      Messages._data.push(currMsg);
    });
  },

};