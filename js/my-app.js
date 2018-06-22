// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    modalTitle: 'Framework7',
	panel:{swipe: 'left'},
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/deadpool/',
    	url: 'info-movie.html',
    	name: 'deadpool',
  		},
		
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		}
  		
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;
$$("#btn-login").on("click", function(){
	var formData = myApp.form.convertToData('#form-login');
	var username = $$('#username').val(); //input[name="username"]
 	var password = $$('#password').val();

	if (username == "admin" && password == "admin") {
		//myApp.loginScreen.close(".login-screen", true);
		myApp.popup.close('#popup-login',true);
		//$$('.login-screen').addClass("modal-out");
	}else{
		myApp.dialog.alert("Los datos ingresados son incorrectos","Login");
	}
});


// Add another view, which is in right panel





 

