Router.configure ({
  layoutTemplate: 'main',
});



Router.route('/', {
  template :'home',
  // onBeforeAction: function () {
  //   Session.set("title", "Web games");
  //   this.next();
  // }
});

Router.route('/rps', {
  template: 'rps',
  // onBeforeAction: function () {
  //   Session.set("title", "rpc");
  //   this.next();
  // }
});

Router.route('/breakout', {
  template: 'breakout',
  // onBeforeAction: function () {
  //   Session.set("title", "ttt");
  //   this.next();
  // }
});

Router.route('/about', {
  template: 'about'
});
