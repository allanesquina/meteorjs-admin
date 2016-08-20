import '../imports/ui/main.js';
import '../imports/ui/user.js';

Router.route('/', function () {
  this.render('main');
});

Router.route('/users', function () {
  this.render('userView');
});
