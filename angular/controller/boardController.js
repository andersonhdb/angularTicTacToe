app.controller("boardController", function ($scope) {


    $scope.player = "X";
    $scope.turn = "X";


    $scope.board = [
        {id: 1, status: ""},
        {id: 2, status: ""},
        {id: 3, status: ""},
        {id: 4, status: ""},
        {id: 5, status: ""},
        {id: 6, status: ""},
        {id: 7, status: ""},
        {id: 8, status: ""},
        {id: 9, status: ""},
    ];


    $scope.markBoard = function (square) {

        //set mark
        square.status = $scope.turn;

        console.log(square);


        $scope.checkVictory(); //check if theres a winner


        //change turn
        ($scope.turn == "X" ? $scope.turn = "O" : $scope.turn = "X");





    };

    $scope.checkVictory = function () {

        let hasWinner = false;

        let winnerPatterns = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,5,9],
            [2,5,8],
            [3,5,7]
        ];

        let marked = $scope.board.filter((square) => {
            return square.status == $scope.turn;
        });
        
        console.log(marked);


        //First, lets check if we have a winner

        winnerPatterns.forEach((pattern) => {


            let count = 0;


            pattern.forEach((p) => {


                if(!hasWinner) {
                    //check if p is present inside markexD

                    let hasSome = marked.some((square) => {
                        return (square.id == p);
                    });

                    console.log(count);

                    if(hasSome) {
                        count++;
                    }

                    if(count == 3) {
                        console.log(`${$scope.turn} is winner!`);
                        hasWinner = true;

                    }
                }
                



               
           })
            
            
        })

        //also, lets check if theres a draw.


        let hasEmptySquare = $scope.board.some((element) => {
           return element.status == "";
        });
        if(!hasEmptySquare && !hasWinner) {
            console.log("DRAWWWWWW!!!");
        }


         


    }


});