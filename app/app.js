(function(){
    //IIFE

    'use strict';

    angular
        .module("myapp",[])
        .controller("myCtrl",myCtrl);

    function myCtrl(){
        var hello = this;

        hello.saludo = "Uriel";
        hello.uneve = [
            {movie: "Star Wars", reparto:["luke","leia","Darth Vader"], age: 1988, url:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
            {movie: "Star Wars", reparto:["luke","leia","Darth Vader"], age: 1988, url:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"}


        ]
    }


})();