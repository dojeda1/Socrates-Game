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

    // End tag functions
    function historicEnd() {
        $("#mainText").append('<h3 class="text-success text-center pt-2">Good <span class="font-italic ">Historic</span> Ending</h3>');
    };

    function goodEnd() {
        $("#mainText").append('<h3 class="text-success text-center pt-2">Good <span class="font-italic ">Alternate</span> Ending</h3>');
    };

    function okayEnd() {
        $("#mainText").append('<h3 class="text-warning text-center pt-2">Okay <span class="font-italic ">Alternate</span> Ending</h3>');
    };

    function badEnd() {
        $("#mainText").append('<h3 class="text-danger text-center pt-2">Bad <span class="font-italic">Alternate</span> Ending</h3>');
    };

    function resultPage() {
        $("#subtitle").html("Results");
        $("#button4").html('<span class="btn btn-dark replayButton text-light">Replay</span>')
        console.log("End");
        $(".replayButton").on("click", function () {
            reset();
        });
    };

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

                            $("#mainText").html("<h3>You are forgotten.</h3><ul>")
                            resultsList();
                            badEnd();
                            resultPage();

                        });

                    });
                    // end of branch

                    $(".noStopTeachButton").on("click", function () {

                        yourChoices.push("You refused to stop teaching Philosophy");

                        subtitleChoice();
                        $("#mainText").html("You refuse to stop your teachings. You try to convince the jury why Athens and the world need people to question everything in order to learn an grow. However, the jury does not look kindly on your words and you are sentenced to life in prison. Your friends remember you fondly, but the main tenets of your teachings are weakened after your apology.")
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                        $(".resultsButton").on("click", function () {

                            $("#mainText").html("<h3>Many of your teachings are lost.</h3><ul>")
                            resultsList();
                            badEnd();
                            resultPage();

                        });
                    });
                    // end of branch

                });

                $(".noApologizeButton").on("click", function () {
                    yourChoices.push("You refused to apologize")

                    subtitleChoice();
                    $("#mainText").html("You passionately refuse to apologize for corrupting the minds of young Athenians. You tell the jury that the old ways are dying and that soon, your followers will rise up, refuse the old Gods and find new ones to guide them on their journeys. Guards seize you immediately and force you drink Hemlock. Your body writhes in agony as you go limp. Your words inspire a rebellion that tears the already weakened Athens apart. The city is then lost to history.")
                    $("#button3").html("");
                    $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                    $(".resultsButton").on("click", function () {

                        $("#mainText").html("<h3>Athens is lost.</h3><ul>")
                        resultsList();
                        badEnd();
                        resultPage();

                    })

                });
            })
            // end of branch
        });

        $(".disagreeButton").on("click", function () {

            yourChoices.push("You disagreed with the charges");

            subtitleChoice();
            $("#mainText").html("You look into the eyes of the jurors and begin to explain why you disagree with the charges you have been accused of. You claim that if the jury and regular Athenians are, as they claim, 'improvers of youth', then one man cannot undo all the improvement of so many. You also claim that you must believe in Gods since you believe in the influence of Gods. To do so would be like believing in flute music, but not a flute player.");
            $("#button3").html("");
            $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

            $(".nextButton").on("click", function () {

                $("#mainText").html("The jury hears your defense and proceed to deliberate your fate. After their votes are cast and tallied, the results are as follow: 4 abstentions, 263 votes against you, and 234 in your favor. You are found guilty of all charges and sentenced to death by Hemlock. However, they do allow you a chance to suggest another punishment. What punishment do you offer?")
                $("#button1").html('<span class="btn btn-primary deathButton">Death</span>');
                $("#button2").html('<span class="btn btn-primary exileButton">Exile</span>');
                $("#button3").html('<span class="btn btn-primary rewardButton">Reward</span>');
                $("#button4").html('<span class="btn btn-primary otherButton">Other</span>');

                $(".deathButton").on("click", function () {
                    yourChoices.push("You agreed to death by Hemlock")

                    subtitleChoice();
                    $("#mainText").html("You raise your head up high and announce that do not wish to offer another punishment and accept the jury's decision. In fact you insist that the Hemlock be brought out now. You explain that the law has passed its judgement and ensure them that there is no need to prolong your fate. You are handed the drink and catch a whiff of its lethal aroma. Do you continue to drink the Hemlock?")
                    $("#button1").html("");
                    $("#button2").html("");
                    $("#button3").html('<span class="btn btn-primary drinkButton">Drink</span>');
                    $("#button4").html('<span class="btn btn-primary noDrinkButton">Refuse</span>');

                    $(".drinkButton").on("click", function () {
                        yourChoices.push("You willingly drank Hemlock")

                        subtitleChoice();
                        $("#mainText").html("As you press the drink to your lips, you throw back your head and let the poisonous concoction slide down your throat. Your body collapses in the middle of the square as your friends look on in horror. Although those close to you did not get a chance to understand your insistence on choosing death, you are still remembered fondly by them. Your teachings continue to be taught throughout history.")
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                        $(".resultsButton").on("click", function () {

                            $("#mainText").html("<h3>You are remembered fondly.</h3><ul>")
                            resultsList();
                            okayEnd();
                            resultPage();

                        });
                        // end of branch

                    });

                    $(".noDrinkButton").on("click", function () {
                        yourChoices.push("You didn't drink the Hemlock")

                        subtitleChoice();
                        $("#mainText").html("You stare at the full goblet in your hands, and a wave of fear rushes into your body. Your hands loosen their grip and the drink slips through, falling to the ground. You make a mad sprint towards a clearing in the crowd around you. Just as you are about to get through, a spear pierces you from behind and pins you to the ground. Everyone looks at you with hatred and disgust. Your followers lose all respect for you and your ideas and your teachings are mocked throughout all of Athens.")
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');

                        $(".resultsButton").on("click", function () {

                            $("#mainText").html("<h3>You are remembered as a coward.</h3><ul>")
                            resultsList();
                            okayEnd();
                            resultPage();

                        });
                        // end of branch
                    });

                });

                $(".exileButton").on("click", function () {

                });

                $(".rewardButton").on("click", function () {

                });

                $(".otherButton").on("click", function () {

                });

            });

        });

    });
};
});
// end