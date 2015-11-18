Router.configure ({
  layoutTemplate: 'main',
});



Router.route('/', {
  template :'home'
});

Router.route('/rps', {
  template: 'rps'
});

Router.route('/ttt', {
  template: 'ttt'
});

Router.route('/about', {
  template: 'about'
});
