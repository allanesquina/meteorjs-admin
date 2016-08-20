import { Template } from 'meteor/templating';
import { User } from '../api/api';

import './body.html';

Template.fodase.helpers({
    users: function () {
        return User.find({});
    }
})
