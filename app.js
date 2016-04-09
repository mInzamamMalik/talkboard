/**
 * Created by malikasinger on 07/06/2015.
 */

var app = angular.module("myapp",['ngMaterial','firebase']);

app.controller("myctrl",function($scope,$firebaseObject){

    var ref = new Firebase("https://malikasinger-board.firebaseio.com");

    $scope.data = $firebaseObject(ref);

    $scope.data.$bindTo($scope , "arr");


    $scope.arr = [];
    $scope.color = "darkgray";
    $scope.writingcolor = "black";
    $scope.writing = false




    $scope.startapp = function() {

        $scope.warning = false;
        for (i = 0; i < 1000; i++) {
            $scope.arr[i]={backgroundColor: $scope.color};
        }
    };



    $scope.down  = function(){

        $scope.writing = true;

    };
    $scope.up  = function(){
        $scope.writing = false;

    };

    $scope.change = function(location){

        if($scope.writing){
            if($scope.arr[location].backgroundColor = $scope.color){
                $scope.arr[location].backgroundColor = $scope.writingcolor
            }
        }
    };




});
