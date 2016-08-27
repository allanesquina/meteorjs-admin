import '../../ui/main.js';
import '../../ui/user.js';

Router.route('/', function () {
  this.render('main');
});

// Router.route('/users', function () {
//   this.render('userView');
// });

Router.route('/users', {

  // If the template name is different from the route name you can specify it
  // explicitly here.
  template: 'userView',

  // a place to put your subscriptions
  subscriptions: function() {
    // this.subscribe('items');
    //
    // // add the subscription to the waitlist
    // this.subscribe('item', this.params._id).wait();
    // this.subscribe('Users.getAll');
  },

  // Subscriptions or other things we want to "wait" on. This also
  // automatically uses the loading hook. That's the only difference between
  // this option and the subscriptions option above.
  waitOn: function () {
    console.log('go');
    return Meteor.subscribe('Users.getAll');
  },
  //
  // // A data function that can be used to automatically set the data context for
  // // our layout. This function can also be used by hooks and plugins. For
  // // example, the "dataNotFound" plugin calls this function to see if it
  // // returns a null value, and if so, renders the not found template.
  // data: function () {
  //   // return Posts.findOne({_id: this.params._id});
  // },
  //
  // You can provide any of the hook options described below in the "Using
  // Hooks" section.
  // onRun: function () {},
  // onRerun: function () {},
  // onBeforeAction: function () {},
  // onAfterAction: function () {},
  // onStop: function () {},

  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.
  // Example:
  //  action: 'myActionFunction'
  action: function () {
    // render all templates and regions for this route
    this.render();
  }
});

// Router.route('/post/:_id', {
//   // The name of the route.
//   // Used to reference the route in path helpers and to find a default template
//   // for the route if none is provided in the "template" option. If no name is
//   // provided, the router guesses a name based on the path '/post/:_id'
//   name: 'post.show',
//
//   // To support legacy versions of Iron.Router you can provide an explicit path
//   // as an option, in case the first parameter is actually a route name.
//   // However, it is recommended to provide the path as the first parameter of the
//   // route function.
//   path: '/post/:_id',
//
//   // If we want to provide a specific RouteController instead of an anonymous
//   // one we can do that here. See the Route Controller section for more info.
//   controller: 'CustomController',
//
//   // If the template name is different from the route name you can specify it
//   // explicitly here.
//   template: 'Post',
//
//   // A layout template to be used with this route.
//   // If there is no layout provided, a default layout will
//   // be used.
//   layoutTemplate: 'ApplicationLayout',
//
//   // A declarative way of providing templates for each yield region
//   // in the layout
//   yieldRegions: {
//     'MyAside': {to: 'aside'},
//     'MyFooter': {to: 'footer'}
//   },
//
//   // a place to put your subscriptions
//   subscriptions: function() {
//     this.subscribe('items');
//
//     // add the subscription to the waitlist
//     this.subscribe('item', this.params._id).wait();
//   },
//
//   // Subscriptions or other things we want to "wait" on. This also
//   // automatically uses the loading hook. That's the only difference between
//   // this option and the subscriptions option above.
//   waitOn: function () {
//     return Meteor.subscribe('post', this.params._id);
//   },
//
//   // A data function that can be used to automatically set the data context for
//   // our layout. This function can also be used by hooks and plugins. For
//   // example, the "dataNotFound" plugin calls this function to see if it
//   // returns a null value, and if so, renders the not found template.
//   data: function () {
//     return Posts.findOne({_id: this.params._id});
//   },
//
//   // You can provide any of the hook options described below in the "Using
//   // Hooks" section.
//   onRun: function () {},
//   onRerun: function () {},
//   onBeforeAction: function () {},
//   onAfterAction: function () {},
//   onStop: function () {},
//
//   // The same thing as providing a function as the second parameter. You can
//   // also provide a string action name here which will be looked up on a Controller
//   // when the route runs. More on Controllers later. Note, the action function
//   // is optional. By default a route will render its template, layout and
//   // regions automatically.
//   // Example:
//   //  action: 'myActionFunction'
//   action: function () {
//     // render all templates and regions for this route
//     this.render();
//   }
// });
