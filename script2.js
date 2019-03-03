$("document").ready(function () {

    var yourChoices = [];

    var yourSuggestion = "";

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

    function toResultsButton() {
        $("#button1").html("");
        $("#button2").html("");
        $("#button3").html("");
        $("#button4").html('<span class="btn btn-light resultsButton text-dark">Results</span>');
    }

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
        console.log("--------------");
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
                        toResultsButton();

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
                        toResultsButton();

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
                    toResultsButton();

                    $(".resultsButton").on("click", function () {

                        $("#mainText").html("<h3>Athens is lost.</h3><ul>")
                        resultsList();
                        badEnd();
                        resultPage();

                    });
                });
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
                            toResultsButton();

                            $(".resultsButton").on("click", function () {

                                $("#mainText").html("<h3>You are remembered fondly.</h3><ul>")
                                resultsList();
                                okayEnd();
                                resultPage();

                            });
                        });
                        // end of branch



                        $(".noDrinkButton").on("click", function () {

                            yourChoices.push("You didn't drink the Hemlock")

                            subtitleChoice();
                            $("#mainText").html("You stare at the full goblet in your hands, and a wave of fear rushes into your body. Your hands loosen their grip and the drink slips through, falling to the ground. You make a mad sprint towards a clearing in the crowd around you. Just as you are about to get through, a spear pierces you from behind and pins you to the ground. Everyone looks at you with hatred and disgust. Your followers lose all respect for you and your ideas and your teachings are mocked throughout all of Athens.")
                            toResultsButton();

                            $(".resultsButton").on("click", function () {

                                $("#mainText").html("<h3>You are remembered as a coward.</h3><ul>")
                                resultsList();
                                okayEnd();
                                resultPage();

                            });
                        });
                        // end of branch

                    });

                    $(".exileButton").on("click", function () {

                        yourChoices.push("You recommended exile")

                        subtitleChoice();
                        $("#mainText").html("You suggest to the jurors that instead of death, you ought to be exiled from Athens. They take some time to think it over and come to a decision. Rather than death, you are to be banished from the city forever, but only on the condition that you never corrupt young minds again. Do you agree to stop teaching philosophy?")
                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html('<span class="btn btn-primary stopTeachButton">Yes</span>');
                        $("#button4").html('<span class="btn btn-primary noStopTeachButton">Never!</span>');

                        $(".stopTeachButton").on("click", function () {

                            yourChoices.push("You stopped teaching Philosophy")

                            subtitleChoice();
                            $("#mainText").html("You look on at the jurors and weakly renounce your pursuits of Philosophical teachings and study. Friends and followers drop their heads in defeat. The lessons you have taught are lost and forgotten. You live the rest of your days out in lonely solitude, never again searching for Truth.")
                            toResultsButton();

                            $(".resultsButton").on("click", function () {

                                $("#mainText").html("<h3>You are forgotten.</h3><ul>")
                                resultsList();
                                badEnd();
                                resultPage();

                            });
                        });
                        // end of branch

                        $(".noStopTeachButton").on("click", function () {

                            yourChoices.push("You refused to stop teaching")

                            subtitleChoice();
                            $("#mainText").html("You raise your head up high and stare down your accusers. You tell them that there is nothing more noble than the pursuit of knowledge. To continue life without it is no life worth living. You are ready for to leave this earthly plane and move one to an existence of the mind. The jury, outraged, give you the Hemlock drink demanding that you partake of it now. You raise the glass to your friends and finish it off. Your body falls to the floor, but your words will forever live on.")
                            toResultsButton();

                            $(".resultsButton").on("click", function () {

                                $("#mainText").html("<h3>You are remembered fondly.</h3><ul>")
                                resultsList();
                                goodEnd();
                                resultPage();

                            });
                        });
                        // end of branch

                    });

                    $(".rewardButton").on("click", function () {

                        yourChoices.push("You recommended you be compensated")

                        subtitleChoice();
                        $("#mainText").html("You tell the jury that you teach Philosophy to better the minds of the people. You have lived life as a pauper, never asking for compensation for sharing lessons or ideas with others. It is then that you recommend the most fitting penalty for your action should be reimbursement. You suggest that you be given food and wages for the broadening of Philosophical thought. The jury becomes enraged at your proposal and demands you suggest a proper penalty. It is then that you reluctantly suggest a small fee, something that a poor man such as yourself can afford to pay.")
                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

                        $(".nextButton").on("click", function () {

                            $("#mainText").html("The jurors then take your suggestion into account and begin to cast their votes. After they are tallied, it is decided that the proposed fee is insufficient. It is to be death by Hemlock. You are then taken away to await your fate. As you are held captive, your friends suggests that you offer a bribe to the guards so you can escape. Do you offer a bribe?")
                            $("#button3").html('<span class="btn btn-primary bribeButton">Bribe</span>');
                            $("#button4").html('<span class="btn btn-primary noBribeButton">No</span>');

                            $(".bribeButton").on("click", function () {

                                yourChoices.push("You bribed the guard")

                                subtitleChoice();
                                $("#mainText").html("You decide to follow their suggestion and proceed to bribe the guards with money your friends have agreed to give you. The guard on duty decides to accept and attempts to sneak you out in the dead of the night. At the edge of the city, just as you are about to escape, you are spotted by a small patrol unit of three guards. They begin moving towards you with spears in hand, calling out your name. You realize you can either try to use your words, or your fists. Do you try to speak with them?")
                                $("#button3").html('<span class="btn btn-primary talkButton">Talk</span>');
                                $("#button4").html('<span class="btn btn-primary noTalkButton">Fight!</span>');


                                $(".talkButton").on("click", function () {

                                    yourChoices.push("You spoke with the patrol")

                                    subtitleChoice();
                                    $("#mainText").html("As the guards begin to get closer you raise up your hands and begin to talk. You tell them of your ideas about knowledge and pride; that if one seeks out truth and realizes that they know nothing, then they are wise. It is those that claim to know everything that truly have no wisdom at all. You convince them to seek truth for themselves and to let a fellow Philosopher go, so that he may continue on his quest for knowledge. The patrol is swayed by your argument and step aside to let you pass by. You are never again seen in Athens, but your message spreads far and wide.")
                                    toResultsButton();

                                    $(".resultsButton").on("click", function () {

                                        $("#mainText").html("<h3>Your teachings live on, but your story is lost.</h3><ul>")
                                        resultsList();
                                        okayEnd();
                                        resultPage();

                                    });
                                });
                                // end of branch

                                $(".noTalkButton").on("click", function () {

                                    yourChoices.push("You fought the patrol")

                                    subtitleChoice();
                                    $("#mainText").html("As the guards begin to come closer you prepare yourself for a fight. Out of the corner of your eye, you spot the spear the guard who escorted you has in his hand. Do you decide to grab it?")
                                    $("#button3").html('<span class="btn btn-primary spearButton">Grab</span>');
                                    $("#button4").html('<span class="btn btn-primary noSpearButton">No</span>');

                                    $(".spearButton").on("click", function () {

                                        yourChoices.push("You grabbed the spear")

                                        subtitleChoice();
                                        $("#mainText").html("You reach over and yank the spear out of your escorts hands and lunge after the patrol. They rush you and a battle ensues. You use your weapon to pierce the chest of the first guard, bringing him to the ground. Suddenly the guard that led you out of the city grabs you from behind. As you are pinned in hid arms, one patrolman swings his sword and removes your head from your shoulders. The guards make a mockery of your efforts greatly exaggerate your cowardice.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>Your reputation is tarnished and your teachings are forgotten.</h3><ul>")
                                            resultsList();
                                            badEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                    $(".noSpearButton").on("click", function () {

                                        yourChoices.push("You didn't grab the spear")

                                        subtitleChoice();
                                        $("#mainText").html("The escort flees the scene to avoid being recognized. As the guards walk up to you, you act feeble to be perceived as non-threatening. A guard reaches out to grab you but suddenly, you bring your fist to his throat causing him to drop to his knees. You drop down low and kick out your leg, tripping the guard to your right. You quickly grab a dropped shield and defend against an incoming blow from the last patrolman. Finally, with all your might you launch the shield at his face, throwing him back. With all three damaged and down, you run off into the distance, never to be seen again.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>Your teachings are remembered, but your story is lost</h3><ul>")
                                            resultsList();
                                            okayEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                });

                            });

                            $(".noBribeButton").on("click", function () {

                                yourChoices.push("You didn't bribe the guard");

                                subtitleChoice();
                                $("#mainText").html("You talk with your friends and reveal to them the reasons you do not wish to run or escape death. You state that the body is a source of endless turmoil and that the mind can only be liberated after death. You have lived in Athens, agreeing to their laws by continuing to stay. To ignore the laws now is to ignore your previous agreement with it, which is unjust.");
                                $("#button3").html("");
                                $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

                                $(".nextButton").on("click", function () {

                                    $("#mainText").html("Your words help to calm your friends, and although they will grieve, at least they know your reasoning. After some time and a bath, it is the hour of your execution. You are handed the goblet of Hemlock. Do you drink it?")
                                    $("#button3").html('<span class="btn btn-primary drinkButton">Drink</span>');
                                    $("#button4").html('<span class="btn btn-primary noDrinkButton">Run</span>');

                                    $(".drinkButton").on("click", function () {

                                        yourChoices.push("You drank the Hemlock")

                                        subtitleChoice();
                                        $("#mainText").html("You take the drink and finish it completely. Your body begins to weaken and you lie down in bed, slowly fading off into the next world. Your friends admire your conviction and praise your ideas. The name Socrates is forever engrained in history as one of the true great Philosophers.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>You and your ideas are forever remembered and revered.</h3><ul>")
                                            resultsList();
                                            historicEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                    $(".noDrinkButton").on("click", function () {

                                        yourChoices.push("You tried to run")

                                        subtitleChoice();
                                        $("#mainText").html("As you begin to bring the glass of poison to your mouth. The fear of eternal death grips your heart. You refuse to follow through and try to escape in panic. Guards seize you and the jury declares you are taken out and beaten in the streets. Your death is gruesome and shameful. Your actions and words seems contradictory to everyone and your teachings are forgotten.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>You are shamed and your teachings are forgotten.</h3><ul>")
                                            resultsList();
                                            badEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                });

                            });

                        });

                    });

                    $(".otherButton").on("click", function () {

                        yourChoices.push("You made a new suggestion")

                        subtitleChoice();
                        $("#mainText").html("You take a moment to ponder what punishment to recommend to the jury. Suddenly, a brilliant new suggestion comes to your mind. What do you wish to tell the jury?")
                        $("#mainText").append('<input type="text" class="form-control my-2" id="inputSuggestion" placeholder="type here">');

                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-primary confirmButton">confirm</span>');

                        $(".confirmButton").on("click", function () {

                            yourSuggestion = $("#inputSuggestion").val();
                            console.log(yourSuggestion);

                            $("#mainText").html('You turn to the jury, take a deep breath and tell them, "' + yourSuggestion +
                                '" You are not quite sure if it is what you said or the way you said it, but your accusers jump to their feet and demand your immediate death. A fight is imminent. You can go straight for the jurors and ignore the guards, or you can attack the guards first. Who do you fight first?')
                            $("#button1").html("");
                            $("#button2").html("");
                            $("#button3").html('<span class="btn btn-primary juryButton">Jury</span>');
                            $("#button4").html('<span class="btn btn-primary noJuryButton">Guards</span>');


                        })

                    });

                });



            });

        });

    };

});
// end game