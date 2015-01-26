$( document ).ready(function() {
    var leftN = $("#left-number");
    var rightN = $("#right-number");
    var operationS = $("#operation-symbol");
    var answer = $("#answer");

    var leftNfrom = $("#left-from").val();
    var leftNto =  parseInt($("#left-to").val());
    var rightNfrom = parseInt($("#right-from").val());
    var rightNto = parseInt($("#right-to").val());

    var operation = " ";
    var userAnswer;
    var realAnswer;

    startGame();
    $('input[name=operation]:radio').add('input[name=number-chooser]').change(function () {
        startGame();
    });

    $("#solve").click(function () {
       userAnswer = parseInt($("#answer").val());
       checkAnswer();
    });

    $("#get-answer").click(function () {
       answer.val(realAnswer);
    });


    function startGame() {
        leftNfrom = parseInt($("#left-from").val());
        leftNto =  parseInt($("#left-to").val());
        rightNfrom = parseInt($("#right-from").val());
        rightNto = parseInt($("#right-to").val());

        if ($("#addition").is(":checked")) {
            operation = "++";
        } else if ($("#subtraction").is(":checked")) {
            operation = "--"
        } else if ($("#multiplication").is(":checked")) {
            operation = ".*"
        } else if ($("#division").is(":checked")) {
            operation = ":/"
        }
        generateExp();
    }
    function generateExp() {
        leftN.text(random(leftNfrom, leftNto));
        rightN.text(random(rightNfrom, rightNto));
        operationS.text(operation[0]);
        realAnswer = eval(leftN.text() + operation[1] + rightN.text());
        console.log(realAnswer);
    }
    function checkAnswer() {
        if (userAnswer == realAnswer) {
            generateExp();
            answer.addClass("rightAnswer");
            setTimeout(function () {
                answer.removeClass("rightAnswer");
                answer.val("");
            }, 2000)
        } else {
            answer.addClass("wrongAnswer");
            setTimeout(function () {
                answer.removeClass("wrongAnswer");
            }, 2000)
        }
    }


    function random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
});