(function() {
    'use strict';
aop.factory('Service', Service);
    var baseURL="https://uat-pr-aop.bdt.kpit.com/"
    // var baseURL="http://localhost:2000/";

    Service.$inject = ["$http","$rootScope"];
    function Service($http,$rootScope) {
        var API="http://localhost:3100/"
        var service = {
            exposedFn:exposedFn
        };
        service.signup=function(payload) {
            console.log("here")
            return $http({
                url:API+"signup",
                method:"POST",
                data:payload
            });
        }

        service.login=function(payload) {
            console.log("here")
            return $http({
                url:API+"login",
                method:"POST",
                data:payload
            });
        }
        
        service.getBookList=function() {
            console.log("here")
            return $http({
                url:API+"getBooks",
                method:"GET"
                        });
        }

        service.delete=function(payload) {
            return $http({
                url:API+"deleteBook",
                method:"POST",
                data:payload
            });

            
        }

        service.addBook=function(payload) {
            return $http({
                url:API+"addBook",
                method:"POST",
                data:payload
            });

            
        }
        return service;

        ////////////////transferUtility
        function exposedFn() { }
    }
})();