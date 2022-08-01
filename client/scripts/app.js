// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },


  //(success, fail)

  //SETTING ANONYMOUS ARROW FN AS DEFAULT PARAM
  fetch: function(callback = ()=>{
    //IF USER DOESNT SAY WHAT CALLBACK IS, IT DEFAULTS
    //TO AN EMPTY FN (LINE 20)
    //we are unsure why the body is empty
  }) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms

      //call functions that populates local messages.js and local rooms.js storage with recieved data
      Messages.updateMessages(data);
      Rooms.updateRooms(data);

      //update views
      RoomsView.initialize();
      MessagesView.initialize();
      FormView.dropdownChange(data);

      //invoke callback
      callback(); //? run upon success
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
