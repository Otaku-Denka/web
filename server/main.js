import { Meteor } from 'meteor/meteor';
import '../imports/ui/api/file'
import '../imports/ui/api/album'
import '../imports/ui/api/mail'

process.env.MAIL_URL = 'smtp://jay7396:akgeto0g2@smtp.gmail.com:465'


Meteor.startup(() => {
  // code to run on server at startup
});