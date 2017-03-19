Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/aboutUs',{
  name: "aboutUs",
  template: 'aboutUs'
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

Router.route('/searchResult',{
  name: 'searchResult',
  template: 'searchResult'
 });

Router.route('/verify-email/:token', {
  name: 'verify-email',
  action(){
    console.log('this.params.token=' + this.params.token);
    Accounts.verifyEmail(this.params.token, (error) => {
      if(error) {
        Bert.alert (error.reason, 'danger');
        Router.go('/emailVerificationFail')
      }
      else {
        Router.go('/emailVerified')
        Bert.alert( 'Email verified! Thanks!', 'success' );
      }

    });
  }
});






// FlowRouter.route( '/verify-email/:token', {
//   name: 'verify-email',
//   action( params ) {
//     console.log("token: " + params.token)
//     Accounts.verifyEmail( params.token, ( error ) =>{
//       if ( error ) {
//         Bert.alert( error.reason, 'danger' );
//       } else {
//         Router.go('/user' );
//         Bert.alert( 'Email verified! Thanks!', 'success' );
//       }
//     });
//   }
// });