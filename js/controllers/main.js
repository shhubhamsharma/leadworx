
aop.controller('mainController',function($window, $state,$scope,$rootScope){



    $scope.logout=function(){
        var userData=$window.localStorage.getItem('userData')
        localStorage.removeItem("userData");
        $state.go('login')
        }    

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        
        if($window.localStorage['userData']!='' && $window.localStorage['userData']!=undefined && $window.localStorage['userData']!=null){
            $rootScope.userData=JSON.parse($window.localStorage['userData']);
            $state.go(toState.name);
        }
        else{
            $state.go("login");
        }
    });

});


    $("#alert-target").click(function (msg) {
        toastr["info"](msg)
    });
