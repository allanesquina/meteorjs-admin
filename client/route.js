import '../imports/ui/main.js';
import '../imports/ui/body.js';

Router.route('/', function () {
  this.render('main');
});

Router.route('/users', function () {
  this.render('fodase');
});
