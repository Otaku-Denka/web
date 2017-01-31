import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { FilesCollection } from 'meteor/ostrio:files';
const Accounts = Package['accounts-base'].Accounts;

var baseDir = process.cwd().replace(/\.meteor.*$/, '');

export const Images = new FilesCollection({
  debug: true,
  storagePath: baseDir + '/public/upload',
  permissions: 0774,
  parentDirPermissions: 0774,
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024*1024*10 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
       return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isServer) {
  Images.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });

  /* Equal shortcut: */
  Images.allowClient();
}


Meteor.methods({
  'Images.remove'(id, cb){
    Images.remove(id, cb)
  }
})