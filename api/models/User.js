/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
// http://localhost:1337/user/create?username=gilbert&password=12345678&first_name=asd&last_name=asd&address=asd&profile_image=pic&telephone=123
  attributes: {

    username: {
      type: "string",
      required: true,
      unique: true,
      minLength: 2
    },
    password: {
      type: "string",
      required: true,
      unique: true,
      minLength: 8
    },
    first_name: {
      type: "string",
      required: true,
      minLength: 2
    },
    last_name: {
      type: "string",
      required: true,
      minLength: 2
    },
    address: {
      type: "string",
      required: true,
      minLength: 2
    },
    profile_image: {
      type: "string",
      required: true,
      minLength: 2
    },
    telephone: {
      type: "string",
      required: true,
      minLength: 2
    }


  }
};
