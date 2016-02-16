var webcontrollers = angular.module('webcontrollers', []);

webcontrollers.controller('QuizGameController', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {
    $scope.tableElements = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium', 'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium', 
    ];
    $scope.answeredElements = [];
    $scope.stop = true; //can make this not scope later
    $scope.totalTime = 30; //in seconds
    var intervalPromise = null;
    $scope.recentlyAnswered = "";
    $scope.gotItRight = false;

    $scope.startTimer = function() {
        //document.querySelector("#length").textContent = timeLeft;
        //$filter()
        var timeLeft = $scope.totalTime; //in seconds
        $scope.answer = null;
        $scope.stop = false;
        intervalPromise = $interval(function() { timeLeft -= 1;  document.querySelector("#time").textContent = timeLeft; }, 1000);
        //intervalPromise = $interval(function() { timeLeft -= 1;}, 1000);
        $timeout(function() {$scope.stopTimer();}, $scope.totalTime*1000)

    }
    $scope.checkAnswer = function() {
    	if(containsElement($scope.tableElements, $scope.answer) && !containsElement($scope.answeredElements, $scope.answer)){
    		$scope.gotRightAnswer($scope.answer);
            $scope.recentlyAnswered = $scope.answer;
            $scope.gotItRight = true;
    	}
        else { $scope.gotItRight = false; }
		var output = document.querySelector("#length");
    	output.textContent = $scope.answeredElements;
    }
	$scope.clearContents = function() {
		$scope.answer = null;
	}

	$scope.gotRightAnswer = function(x) {
		$scope.answeredElements.push(x)
        $scope.clearContents();
        $scope.loadRestOfSVG(x);
          //}
        //console.log(mySVG);
       /** mySVG.addEventListener("load", function() {
            console.log(x);

            svgDoc = mySVG.contentDocument;
            var alpha = svgDoc.getElementById(x);
            console.log(alpha);
            alpha.setAttribute("stroke-width", "4");
        }, false);**/
        //var delta = svgDoc.getElementById(x)
        //console.log(delta);
       // delta.setAttribute("stroke-width", "4");


        
	}
    $scope.loadRestOfSVG = function(x) {
        var mySVG = document.getElementById("svg2");
        console.log(mySVG)
        console.log(x);
        console.log(mySVG);
        mySVG.addEventListener("load", function(event) {
            console.log(x);
            var svgDoc = mySVG.contentDocument;
            svgDoc.addEventListener("load", function(event) {
                console.log(x);
                var svgItem = svgDoc.getElementById(x);
                console.log(x);
                svgItem.setAttribute("fill", "purple");
            })
        })
    }
    $scope.stopTimer = function() {
        console.log("im here");
        $scope.answer = "time's up!"
        $scope.stop = true;
        $interval.cancel(intervalPromise);
    }
    function containsElement(arr, x) {
        if(x != null || x != undefined){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].toUpperCase() === x.toUpperCase()){
                    return true;
                }
            }
        } 
        return false;
    }
}]);

webcontrollers.controller('ContentController', ['$scope', function($scope) {
    $scope.extracurriculars = [
        {name: 'TARC', hoursPerWeek:'1.5 hrs'},
        {name: 'SHS', hoursPerWeek:'1.5 hrs'},
        {name: 'Club Luminous', hoursPerWeek:'1.5 hrs'},
        {name: 'NSA', hoursPerWeek:'1.5 hrs'},
    ];
}]);

webcontrollers.controller('LabController', ['$scope', function($scope) {
    $scope.labs = [
        {name: 'Lab00', url:'Lab00.html'},
        {name: 'Lab01', url: 'Lab01.html'}
    ];
}]);
