import { Meteor } from 'meteor/meteor';
import '../imports/ui/api/file'
import '../imports/ui/api/album'
import '../imports/ui/api/slide'
import '../imports/ui/api/mail'

process.env.MAIL_URL = 'smtp://miyavi7365:toto7365@smtp.gmail.com:587'


Meteor.startup(() => {

});