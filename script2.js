$("document").ready(function () {

    var yourChoices = [];

    function subtitleChoice() {
        $("#subtitle").html(yourChoices[yourChoices.length - 1]);
        console.log(yourChoices[yourChoices.length - 1]);
    };

    function resultsList() {

        for (i = 0; i < yourChoices.length; i++) {
            $("#mainText").append("<li>" + yourChoices[i] + "</li>");
        }

        $("mainText").append("</ul>");
    }

    function reset() {

        yourChoices = [];

        $("#subtitle").html("The Start");
        $("#mainText").html("Follow the trial of Socrates by making decisions and unfolding the story as you go. Try to discover the historical ending, or follow an alternate timeline.")
        $("#button4").html('<span class="btn btn-primary playButton">Play</span>')

        playGame();
    }

    reset();


    function playGame() {

        $(".playButton").on("click", function () {


            $("#mainText").html("It is the year 399 BC and you are the great Philosopher, Socrates. The City of Athens has put you on trial for refusing to recognize the Gods of the state and corruption of the youth. You stand before your accusers, Anytus, Meletus, and Lycon as well as a jury of 500 Athenians blaming you for the city's recent hardships. Do you agree with the charges?")
            $("#button3").html('<span class="btn btn-primary agreeButton">Agree</span>');
            $("#button4").html('<span class="btn btn-primary disagreeButton">Disagree</span>');

            $(".agreeButton").on("click", function () {

                yourChoices.push("You agreed with the charges");

                subtitleChoice();
                $("#mainText").html("The jury now asks that you apologize for denying the Gods and tainting the young minds of the city. What do you do?");
                $("#button3").html('<span class="btn btn-primary apologizeButton">Apologize</span>');
                $("#button4").html('<span class="btn btn-primary noApologizeButton">Refuse</span>');

                $(".apologizeButton").on("click", function () {

                    yourChoices.push("You apologized to the jury");

                    subtitleChoice();
                    $("#mainText").html("You plead with the jury to forgive you of your crimes. After deliberation, the jury accepts. However, they then demand that you agree to never share your teachings and ideas to anyone else. If you consent to do so, your punishment will be much less severe. Do you agree to stop spreading your Philosophical ideas?")
                    $("#button3").html('<span class="btn btn-primary stopTeachButton">Agree</span>');
                    $("#button4").html('<span class="btn btn-primary noStopTeachButton">Refuse</span>');

                    $(".stopTeachButton").on("click", function () {

                        yourChoices.push("You stopped teaching Philosophy")

                        subtitleChoice();
                        $("#mainText").html("The jury accepts your promise to never again share your brilliant mind with others. You are charged with a small fee which your friends agree to pay for you. You continue living in Athens, not as a great Philosopher of your time, but as a common old man. Your actions have proved inconsequential and your teaching are lost to time.")
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                        $(".resultsButton").on("click", function () {

                            $("#subtitle").html("Results");
                            $("#mainText").html("<h3>You are forgotten.</h3><ul>")
                            resultsList();
                            $("#mainText").append('<h3 class="text-danger text-center pt-2">Bad <span class="font-italic">Alternate</span> Ending</h3>');

                            $("#button4").html('<span class="btn btn-dark replayButton text-light">Replay</span>')
                            console.log("End");
                            $(".replayButton").on("click", function () {
                                reset();
                            })

                        });
                    });

                    $(".noStopTeachButton").on("click", function () {

                        yourChoices.push("You refused to stop teaching Philosophy");

                        subtitleChoice();
                        $("#mainText").html("You refuse to stop your teachings. You try to convince the jury why Athens and the world need people to question everything in order to learn an grow. However, the jury does not look kindly on your words and you are sentenced to life in prison. Your friends remember you fondly, but the main tenets of your teachings are weakened after your apology.")
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                        $(".resultsButton").on("click", function () {

                            $("#subtitle").html("Results");
                            $("#mainText").html("<h3>Many of your teachings are lost.</h3><ul>")
                            resultsList();
                            $("#mainText").append('<h3 class="text-danger text-center pt-2">Bad <span class="font-italic ">Alternate</span> Ending</h3>');

                            $("#button4").html('<span class="btn btn-dark replayButton text-light">Replay</span>')
                            console.log("End");
                            $(".replayButton").on("click", function () {
                                reset();
                            })

                        });
                    });

                });

                $(".noApologizeButton").on("click", function () {
                    yourChoices.push("You refused to apologize")

                    subtitleChoice();
                    $("#mainText").html("You passionately refuse to apologize for corrupting the minds of young Athenians. You tell the jury that the old ways are dying and that soon, your followers will rise up, refuse the old Gods and find new ones to guide them on their journeys. Guards seize you immediately and force you drink Hemlock. Your body writhes in agony as you go limp. Your words inspire a rebellion that tears the already weakened Athens apart. The city is then lost to history.")
                    $("#button3").html("");
                    $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                    $(".resultsButton").on("click", function () {

                        $("#subtitle").html("Results");
                        $("#mainText").html("<h3>Athens is lost.</h3><ul>")
                        resultsList();
                        $("#mainText").append('<h3 class="text-danger text-center pt-2">Bad <span class="font-italic ">Alternate</span> Ending</h3>');

                        $("#button4").html('<span class="btn btn-dark replayButton text-light">Replay</span>')
                        console.log("End");
                        $(".replayButton").on("click", function () {
                            reset();
                        })

                    });
                })
            });

            $(".disagreeButton").on("click", function () {

                yourChoices.push("You disagreed with the charges");

                subtitleChoice();
                $("#mainText").html("You look into the eyes of the jurors and begin to explain why you disagree with the charges you have been accused of. You claim that if the jury and regular Athenians are, as they claim, 'improvers of youth', then one man cannot undo all the improvement of so many. You also claim that you must believe in Gods since you believe in the influence of Gods. To do so would be like believing in flute music, but not a flute player.");
                $("#button3").html("");
                $("#button4").html('<span class="btn btn-light text-primary">Next</span>');

                $(".apologizeButton").on("click", function () {


                });

            });

        });
    };
});
// end