// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    let $submit = $('input.submit');

    currMSG = {};
    currUserName = App.username;
    currText = $('#message').val();
    currMSG.username = currUserName;
    currMSG.text = currText;
    currMSG.roomname = $('select').val()

    //create(message, successCB, errCB)
    //msg will be what we type
    // Parse.create()
    Parse.create(currMSG);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },


  dropdownChange: function(data) {
    $('select').change(function(e) {
      console.warn('SELECT SWAP')
        //updates global message list
        $('#chats').html('');
        Messages.updateMessages(data)

        MessagesView.render($('select').val())
    })
  }

};