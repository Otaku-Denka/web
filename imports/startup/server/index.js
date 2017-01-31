import nodemailer from 'nodemailer'
import { Meteor } from 'meteor/meteor'

const mailTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: 'jay7396@gmail.com',
        pass: 'akgeto0g'
    }
});

