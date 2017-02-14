import { Meteor } from 'meteor/meteor'
import { Email } from 'meteor/email'


if (Meteor.isServer) {
  Meteor.methods({
    sendEmail: function (to, from, subject, text) {
      
      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();
      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });
}


// Meteor.call('sendEmail',
//             'nukr',
//             'jacky',
//             'Hello from Meteor!',
//             'This is a test of Email.send.')

