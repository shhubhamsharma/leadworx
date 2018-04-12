var aop = angular.module('aop', ['ui.router']);

aop.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

	$locationProvider.html5Mode(false).hashPrefix('');
	$qProvider.errorOnUnhandledRejections(false);
    
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");

	// Now set up the states
	$stateProvider
		.state('blank', {
			url: '/',
			templateUrl: 'views/login.html',
			controller: ''
		})
		.state('login', {
			url: '/login/:authUrl',
			templateUrl: '/views/login.html',
			controller: 'loginController'
		}).state('transfer', {
            url: "/transfer",
            templateUrl: "/views/transfer.html"
            // controller: "tra"
        })
		.state('home', {
			url: '/home',
			templateUrl: '/views/home.html',
			controller: 'homeController'
        })
        

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('transfer.ou', {
        url: '/ou',
        templateUrl: 'views/transfer_ou.html'
    })
    .state('transfer.prnpr', {
        url: '/prnpr',
        templateUrl: 'views/transfer_pr_npr.html'
    })

    // url will be /form/interests
    .state('transfer.period', {
        url: '/period',
        templateUrl: 'views/period.html'
    })
    .state('transfer.expensetype', {
        url: '/expensetype',
        templateUrl: 'views/expenseTransfer.html'
    })
    .state('transfer.prnonpr', {
        url: '/requesttype',
        templateUrl: 'views/prnonpr.html'
    })

});