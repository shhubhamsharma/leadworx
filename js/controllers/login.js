
aop.controller("loginController", loginController);

loginController.$inject = ["$scope", "$rootScope", "$http", "$window", "Service","$state"];

function loginController($scope, $rootScope, $http, $window, Service,$state) {
    $scope.login=true;
    $scope.signup=false;
    
    $scope.payload={
    }
    
    $scope.display=function(form){
        if(form=='login'){
            $scope.signup=false;
            $scope.login=true;
        }
        else{
            $scope.signup=true;
            $scope.login=false;
        }
    }

    $scope.submit=function(form){
        console.log(form)
        if(form=='signup'){
            payload={data:$scope.payload}
            Service.signup(payload).then(function success(response){

                $state.go('home');
            },function error(err){
                $scope.error=true;
                $state.go('login');
            })
        }
        else{
            payload={data:$scope.payload}
            Service.login(payload).then(function success(resp){
                $window.localStorage['userData']=resp;
                $state.go('home');
            },function error(err){
                $scope.error=true;
                $state.go('login');

            })
        }
    }


    }