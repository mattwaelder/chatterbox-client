// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), //button
  $select: $('#rooms select'), //dropdown menu

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //add all rooms to room select dropdown
    RoomsView.render()
  },

  render: function() {

    // TODO: Render out the list of rooms.
    //for each item in the rooms list,
    //add to dropdown menu
    RoomsView.$select.html('');

  Rooms._data.forEach(function(room) {
    // RoomsView.$select.append($(`<div class="room">${room}</div>`))
    RoomsView.$select.append(`<option value=${room}>${room}</option>`)
    //RoomsView.$select.hide();
  });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
