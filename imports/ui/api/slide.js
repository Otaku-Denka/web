import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const SlideLists = new Mongo.Collection('slideList');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('slideList', function slideListPublication() {
    return SlideLists.find();
  });
}

SlideLists.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function(){
      return true;
    }
})

Meteor.methods({
  'SlideList.insert'(_id){
    SlideLists.findOne()
  },
  'SlideList.update'(img){
    const id = SlideLists.findOne()._id
    SlideLists.update(id, {
      $set: {
        list: [ img ]
      }
    })
  }
})