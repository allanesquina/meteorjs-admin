import { Template } from 'meteor/templating';
import { Users } from '../api/users/users';

import './user.html';

Template.userView.helpers({
    users: function () {
        return Users.find().fetch();
    }
})
