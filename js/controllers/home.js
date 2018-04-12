aop.controller('homeController', homeController)

homeController.$inject = ["$scope", "$rootScope", "$http", "$window", "Service","$state"];

    function homeController($scope, $rootScope, $http, $window, Service,$state)  {
      $scope.books=[];
      $scope.error=false;
      $scope.show=false;

      Service.getBookList().then(function success(response){
        $scope.books=response.data;
      },function error(err){
        // console.log(err);
        $scope.error=true;
        $scope.msg=err.data;
        // $scope.msg=
      });
      $scope.reload=function(){
        $state.reload();
      }
      
      $scope.showForm=function(){
        $scope.show=!$scope.show;
      }
      $scope.delete=function(book){
        var payload={data:{isbn:book.isbn,id:book.id}};
        Service.delete(payload).then(function(success){
          $state.reload();
        },function error(err){
          $scope.error=true;
          $scope.msg="Failed to Delete "+book.isbn+ "  "+book.title;
        })
      };

      $scope.add=function(){
        var payload={data:$scope.addBook};
        Service.addBook(payload).then(function success(response){
          $state.reload();
        },function error(err){
          $scope.error=true;
          $scope.msg="Failed to Add "+$scope.addBook.isbn+ "  "+$scope.addBook.title;
        })
      }
      
    }
