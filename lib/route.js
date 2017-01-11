Router.configure({
  layoutTemplate: 'main'
});

Router.route('/signup',{
  name:'signup',
  template: 'signup'
});

Router.route('/login',{
  name:"login",
  template:'login'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/user',{
  name: 'user',
  template: 'user'
});

Router.route('/loggedIn',{
  name: 'loggedIn',
  template: 'loggedIn'
});

Router.route('/bookSearch',{
  name: 'bookSearch',
  template: 'bookSearch'
});








FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  action( params ) {
    console.log("token: " + params.token)
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Router.go('/user' );
        Bert.alert( 'Email verified! Thanks!', 'success' );
      }
    });
  }
});