/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
// POST FOR ADDING A RECORD
//http://localhost:1337/user/create?username=gilbert&password=12345678&first_name=asd&last_name=asd&address=asd&profile_image=pic&telephone=123
/*
{
"email":"toni7858@gmail.com",
"password":"12345678",
"first_name":"gilbert",
"last_name":"morett",
"address":"la floresta",
"profile_image":"pic",
"telephone":"3454354334"
}
*/
  attributes: {

    email: {
      type: "string",
      required: true,
      unique: true,
      minLength: 2
    },
    password: {
      type: "string",
      required: true,
      minLength: 8
    },
    first_name: {
      type: "string",
      required: true
    },
    last_name: {
      type: "string",
      required: true
    },
    address: {
      type: "string"
    },
    profile_image: {
      type: "string"
    },
    telephone: {
      type: "string"
    },
    doctor_appointment: {
      collection: 'appointment',
      via: 'appointmentDoctor'
    },
    patient_appointment: {
      collection: 'appointment',
      via: 'appointmentPatient'
    },
    roles: {
      collection: 'role',
      via: 'owner'
    },
    organizations: {
      collection: 'organization',
      via: 'owner'
    },
    doctor_types: {
      collection: 'doctor_type',
      via: 'owner'
    }


  }
};
