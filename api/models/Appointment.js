/**
 * Appointment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /*
  {

"appointment_day_hour":"11/11/11",
"appointmentDoctor":"57e16672ce68d518201c3e4e", 57e16690ce68d518201c3e50
"appointmentPatient":"57e16687ce68d518201c3e4f"


}
  */

  attributes: {

    appointment_day_hour: {
      type: "datetime",
      required: true
    },
    appointmentDoctor: {
      model: 'user'
    },
    appointmentPatient: {
      model: 'user'
    }

  }
};
