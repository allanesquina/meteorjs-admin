import { Template } from 'meteor/templating';
import { User } from '../api/api';

import './user.html';

Template.userView.helpers({
    users: function () {
        return User.find({});
    }
})
