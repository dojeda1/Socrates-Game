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
        $("#button1").html("");
        $("#button2").html("");
        $("#button3").html("");
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

    $("#restartButton").on("click", function () {
        console.log("Game restarted");
        console.log("--------------");
        reset();
    });



    function playGame() {

        $(".playButton").on("click", function () {


            $("#mainText").html("It is the year 399 BC and you are the great Philosopher, Socrates. The City of Athens has put you on trial for refusing to recognize the Gods of the state and corruption of the youth. You stand before your accusers, Anytus, Meletus, and Lycon as well as a jury of 500 Athenians blaming you for the city's recent hardships. Do you agree with the charges?")
            $("#button3").html('<span class="btn btn-primary agreeButton">Agree</span>');
            $("#button4").html('<span class="btn btn-primary disagreeButton">Disagree</span>');

            $(".agreeButton").on("click", function () {

                yourChoices.push("You agreed with the charges");

                subtitleChoice();
                $("#mainText").html("The jury now asks that you apologize for denying the Gods and tainting the young minds of the city. Will you ask the jury for forgiveness?");
                $("#button3").html('<span class="btn btn-primary apologizeButton">Yes</span>');
                $("#button4").html('<span class="btn btn-primary noApologizeButton">No</span>');

                $(".apologizeButton").on("click", function () {

                    yourChoices.push("You apologized to the jury");

                    subtitleChoice();
                    $("#mainText").html("You plead with the jury to forgive you for all you've done. After deliberation, the jury accepts. However, they now demand that you vow to never again share your teachings or ideas to anyone else. If you consent to do so, your punishment will be much less severe. Do you agree to stop spreading your Philosophical ideas?")
                    $("#button3").html('<span class="btn btn-primary stopTeachButton">Agree</span>');
                    $("#button4").html('<span class="btn btn-primary noStopTeachButton">Refuse</span>');

                    $(".stopTeachButton").on("click", function () {

                        yourChoices.push("You stopped teaching Philosophy")

                        subtitleChoice();
                        $("#mainText").html("You get down on you hands and knees. While your eyes fill with tears, you promise to immediately cease sharing your blasphemous thoughts forever. The jury hears your plea and decide to charge you with a small fee, which your friends agree to pay for you. You quietly live out the rest of your days in Athens, not as a great Philosopher of your time, but as a common old man. Your actions have proved inconsequential and your teaching are lost to time.")
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
                        $("#mainText").html("You refuse to stop your sharing your brilliant mind with those who wish to learn. You try to persuade the jury that Athens and the world need people to question everything in order to learn and grow. However, your accusers do not look kindly on your words and you are sentenced to life in prison. Your friends remember you fondly, but the main tenets of your teachings are weakened after your public apology.")
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
                    $("#mainText").html("You passionately refuse to apologize for awakening the minds of young Athenians. You tell the jury that the old ways are dying and that soon, your followers will rise up, refuse the old Gods and find a new one to guide them on their journeys. Guards seize you instantly and force you drink Hemlock. Your body writhes in agony as you go limp. Your words inspire a rebellion that tears the already weakened Athens apart. The city is then lost to history.")
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
                $("#mainText").html('You look into the eyes of the jurors and begin to reveal the reasons you disagree with all charges. You explain that since you believe in godly affairs, that you must believe in Gods. To do so would be like believing in flute music, but not flute players. You claim that if both the jury and all regular Athenians are, as they claim to be, <em>improvers of youth</em>, then a single man cannot have the power to undo all the work of so many. You also tell them, "I am but a horsefly put by the gods on the flanks of sluggish Athens in an attempt to wake them up." You let the jury know that many men claim to be wise, but one cannot be wise if they do not question what is around them.');
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
                        $("#mainText").html("You raise your head up high and announce that don't wish to offer another punishment and accept the jury's decision. In fact you insist that the Hemlock be brought out now. You are handed the drink and catch a whiff of its lethal aroma. Do you continue to drink the Hemlock?")
                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html('<span class="btn btn-primary drinkButton">Drink</span>');
                        $("#button4").html('<span class="btn btn-primary noDrinkButton">Refuse</span>');

                        $(".drinkButton").on("click", function () {

                            yourChoices.push("You willingly drank the Hemlock")

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
                            $("#mainText").html("You stare deeply into the full goblet in your hands, and a wave of fear rushes into your body. Your hands loosen their grip and the drink slips through your fingers, falling to the ground. You make a mad sprint towards a clearing in the crowd around you. Just as you are about to get through, a spear pierces you from behind and pins you to the ground. Everyone looks at you with hatred and disgust. Your followers lose all respect for you and your teachings are mocked throughout all of Athens.")
                            toResultsButton();

                            $(".resultsButton").on("click", function () {

                                $("#mainText").html("<h3>You are remembered as a coward.</h3><ul>")
                                resultsList();
                                badEnd();
                                resultPage();

                            });
                        });
                        // end of branch

                    });

                    $(".exileButton").on("click", function () {

                        yourChoices.push("You recommended exile")

                        subtitleChoice();
                        $("#mainText").html("You suggest to the jurors that instead of death, you ought to be exiled from Athens. They take some time to think it over and come to a decision. Rather than death, you are to be banished from the city forever, but only on the condition that you never corrupt young minds again. Do you agree to stop teaching Philosophy?")
                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html('<span class="btn btn-primary stopTeachButton">Yes</span>');
                        $("#button4").html('<span class="btn btn-primary noStopTeachButton">Never!</span>');

                        $(".stopTeachButton").on("click", function () {

                            yourChoices.push("You stopped teaching Philosophy")

                            subtitleChoice();
                            $("#mainText").html("You look on at the jurors and weakly renounce your pursuits of Philosophical teachings and study. Friends and followers drop their heads in defeat. The lessons you've taught are lost and forgotten. You live the rest of your days out in lonely solitude, never again seeking Truth.")
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
                            $("#mainText").html('You raise your head up high and stare down your accusers. You tell them, "It is the greatest good for a man to discuss virtue every day and to test themselves and others, for the unexamined life is not worth living." You are ready to leave this earthly plane and move on to an existence of the mind. The jury, outraged, forcefully hand you the Hemlock drink demanding that you partake of it now. You raise the glass to your friends and proceed to swallow every drop. Your body drops to the floor, but your words will forever live on.')
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
                        $("#mainText").html("You tell the jury that you teach Philosophy to better the minds of the people. You have lived life as a pauper, never asking for compensation for the broadening of Philosophical thought. As punishment, you recommend that the only proper course of action is to be given wages and free meals in the Prytaneum. The jury becomes enraged at your proposal and demands you suggest a proper penalty. You reluctantly suggest a small fee, one mina of silver; something that a poor man such as yourself can afford to pay.")
                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

                        $(".nextButton").on("click", function () {

                            $("#mainText").html("Your friends, Plato, Crito, and Apollodorus, then recommend a fee of 30 minae instead, even agreeing to pay it themselves. The jurors begrudgingly take these last suggestions into account and begin to cast their votes. After they are counted, it is decided that the proposed fee is insufficient. It is to be death by Hemlock. You are then taken to a nearby prison to await your fate. As you are held captive, Crito tells you he will offer a bribe to the guard so you can escape. Do you offer the guard a bribe?")
                            $("#button3").html('<span class="btn btn-primary bribeButton">Bribe</span>');
                            $("#button4").html('<span class="btn btn-primary noBribeButton">No</span>');

                            $(".bribeButton").on("click", function () {

                                yourChoices.push("You bribed the guard")

                                subtitleChoice();
                                $("#mainText").html("You decide to follow Crito's suggestion and let him offer a bribe. The guard on duty decides to accept and attempts to sneak you out in the dead of the night. At the edge of the city, just as you are about to escape, you are spotted by a small patrol unit of three men. They begin moving towards you with spears in hand, calling out your name. You realize you can either try to use your words, or your fists. Which do you choose?")
                                $("#button3").html('<span class="btn btn-primary talkButton">Talk</span>');
                                $("#button4").html('<span class="btn btn-primary noTalkButton">Fight!</span>');


                                $(".talkButton").on("click", function () {

                                    yourChoices.push("You spoke with the patrol")

                                    subtitleChoice();
                                    $("#mainText").html('As the guards begin to get closer you raise up your hands and begin to talk. You tell them of your ideas about knowledge and life, saying, "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us." You convince them to seek truth for themselves and to let a fellow Philosopher go, so that he may continue on his quest for knowledge. The patrol is swayed by your argument and step aside to let you pass by. You are never again seen in Athens and the end of your life is a mystery, but your message spreads far and wide.')
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
                                    $("#mainText").html("As the guards begin to come closer you prepare yourself for a fight. Out of the corner of your eye, you spot the sword the guard who escorted has at his side. Do you decide to grab it?")
                                    $("#button3").html('<span class="btn btn-primary swordButton">Grab</span>');
                                    $("#button4").html('<span class="btn btn-primary noSwordButton">No</span>');

                                    $(".swordButton").on("click", function () {

                                        yourChoices.push("You grabbed the sword")

                                        subtitleChoice();
                                        $("#mainText").html("You reach over and yank the weapon out of your escort's sheath, charging after the patrol. You use the sword to pierce the chest of the first guard, bringing him to the ground. Suddenly the guard that led you out of the city grabs you from behind, pinning you in his arms. One patrolman swings his blade and removes your head from your shoulders. The guards make a mockery of your efforts and drag your body back to be used as a warning to those who defy Athens.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>Your reputation is tarnished and your teachings are forgotten.</h3><ul>")
                                            resultsList();
                                            badEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                    $(".noSwordButton").on("click", function () {

                                        yourChoices.push("You didn't grab the sword")

                                        subtitleChoice();
                                        $("#mainText").html("The escort flees the scene to avoid being recognized. As the guards walk up to you, you act feeble so they perceive you as non-threatening. A guard reaches out to grab you but suddenly, you bring your fist to his throat causing him to fall on his back. You drop down low and kick out your leg, tripping the guard to your right. The last patrolman comes at you with his spear, but you quickly grab a dropped shield and defend against the incoming blow Finally. With all your might you launch the shield at his face, knocking him out. With all three damaged and down, you run off into the distance, never to be seen again.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>Your are remembered fondly, but your story is lost</h3><ul>")
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
                                $("#mainText").html("You talk with your friends and reveal to them the reasons you don't wish to run or escape death. You state that the body is a source of endless turmoil. Whether consciousness ends or continues, the mind can only be liberated after death. You have lived in Athens for many years, agreeing to their laws by remaining in the safety of its walls. Ignoring the laws now is the same as breaking your previous agreement with it, which you believe is unjust.");
                                $("#button3").html("");
                                $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

                                $(".nextButton").on("click", function () {

                                    $("#mainText").html('Your words help to calm your friends, and although they will grieve, at least they know your reasoning. It is now the time of your execution and your friends are there to support you. You tell them, "The hour of departure has arrived, and we go our separate ways, I to die, and you to live. Which of these two is better only God knows." You are handed the goblet of Hemlock. Do you drink it?')
                                    $("#button3").html('<span class="btn btn-primary drinkButton">Drink</span>');
                                    $("#button4").html('<span class="btn btn-primary noDrinkButton">Run</span>');

                                    $(".drinkButton").on("click", function () {

                                        yourChoices.push("You drank the Hemlock")

                                        subtitleChoice();
                                        $("#mainText").html("You take the drink and finish it completely. Your body begins to weaken and you lie down in bed, slowly fading off into the beyond. Your friends admire your conviction and praise your ideas. Your students, Plato ane Xenophon, catalogue the tale of your death and the name Socrates is forever engrained in history as one of the true great Philosophers.")
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
                        $("#mainText").html("You take a moment to ponder what suggestion to recommend to the jury. Suddenly, a brilliant new idea comes to your mind and you know exactly what you want to say. What do you wish to tell the jury?")
                        $("#mainText").append('<input type="text" class="form-control my-2" id="inputSuggestion" placeholder="type here">');

                        $("#button1").html("");
                        $("#button2").html("");
                        $("#button3").html("");
                        $("#button4").html('<span class="btn btn-primary confirmButton">Confirm</span>');

                        $(".confirmButton").on("click", function () {

                            // styles response fo fit story format
                            var rawSuggestion = $("#inputSuggestion").val();

                            if (rawSuggestion != "") {

                                const capitalize = (s) => {
                                    if (typeof s !== 'string') return ''
                                    return s.charAt(0).toUpperCase() + s.slice(1)
                                }

                                var uppercaseSuggestion = capitalize(rawSuggestion)

                                if (uppercaseSuggestion.charAt(uppercaseSuggestion.length - 1) == "." || uppercaseSuggestion.charAt(uppercaseSuggestion.length - 1) == "!" || uppercaseSuggestion.charAt(uppercaseSuggestion.length - 1) == "?") {
                                    yourSuggestion = uppercaseSuggestion;
                                } else {
                                    yourSuggestion = uppercaseSuggestion + ".";
                                }

                            } else {

                                yourSuggestion = "Life is full of questions. Idiots are full of answers. And you claim to know everything."

                            }


                            console.log(yourSuggestion);

                            $("#mainText").html('You turn to the jury, take a deep breath and tell them, <strong>"' + yourSuggestion +
                                '"</strong> You are not quite sure if it is what you said or the way you said it, but your accusers jump to their feet and demand your immediate death. A fight is imminent. You can go straight for the jurors and ignore the guards, or you can attack the guards first. Which do you choose?')
                            $("#button1").html("");
                            $("#button2").html("");
                            $("#button3").html('<span class="btn btn-primary juryButton">Jury</span>');
                            $("#button4").html('<span class="btn btn-primary noJuryButton">Guards</span>');

                            $(".juryButton").on("click", function () {

                                yourChoices.push("You attacked the jury first")

                                subtitleChoice();
                                $("#mainText").html("You lunge towards the jury and grab the accuser, Meletus, and place him in a stranglehold. Your eyes widen with fury the moment before you snap his neck. Suddenly, two spears impale you, going through you as well as Meletus's fresh corpse. Though your teachings are preserved, you are also remembered as a mad man.")
                                toResultsButton();

                                $(".resultsButton").on("click", function () {

                                    $("#mainText").html("<h3>You are remembered as a mad man, but your teachings persist.</h3><ul>")
                                    resultsList();
                                    okayEnd();
                                    resultPage();

                                });
                            });
                            // end of branch


                            $(".noJuryButton").on("click", function () {

                                yourChoices.push("You attacked the guards first")

                                subtitleChoice();
                                $("#mainText").html("You turn to the guards as they both rush towards you. One grabs his spear and jabs it at you, but you quickly turn to the side and it barely grazes your chest. You throw one arm up and grab his weapon while using the other to smash his hands with your fist. You take the spear and use the blunt end to knock out the second guard. You then swing it around, breaking the spear in half over the back of the first guard's neck. Both men are now laying on the floor, out cold.")
                                $("#button3").html("");
                                $("#button4").html('<span class="btn btn-light nextButton text-primary">Next</span>');

                                $(".nextButton").on("click", function () {

                                    $("#mainText").html("You then grab a knife off a fallen guard and head towards the jury as they try to back away. You grab the accuser, Lycon, by his robe and pull your knife up to his throat. You look into his eyes as he cowers in fear. What do you do with him?")
                                    $("#button3").html('<span class="btn btn-primary killButton">Kill</span>');
                                    $("#button4").html('<span class="btn btn-primary noKillButton">Spare</span>');

                                    $(".killButton").on("click", function () {

                                        yourChoices.push("You killed Lycon")

                                        subtitleChoice();
                                        $("#mainText").html("With one swift slash, you slit his throat and his lifeless body falls limp. The jury, riled by the death of Lycon all jump towards you at once. Though you are able to defend yourself for a while, the blows from over 500 men lead you to death. Though those close to you see you as brave for standing up for your beliefs, your ideas are shunned by Athenians. The rest of the world perceives you as only a violent pauper.")
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>You are remembered as a violent mad man, and your teachings are rejected.</h3><ul>")
                                            resultsList();
                                            badEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                    $(".noKillButton").on("click", function () {

                                        yourChoices.push("You spared Lycon")

                                        subtitleChoice();
                                        $("#mainText").html('As you hold the knife firmly against his throat, you yell out to the crowd,"Men have laws to keep order and seek out justice. But what do we do when the law itself becomes unjust? If law determines that the pursuit of knowledge is a crime, then it must be broken!" You lower the knife and release Lycon. Then, you turn towards an opening and walk out slowly, no one daring to interfere. You leave the city, with friends and students following behind. You are forever remembered as both a great Philosopher and a noble warrior.')
                                        toResultsButton();

                                        $(".resultsButton").on("click", function () {

                                            $("#mainText").html("<h3>You are remembered as a great Philosopher and warrior.</h3><ul>")
                                            resultsList();
                                            goodEnd();
                                            resultPage();

                                        });
                                    });
                                    // end of branch

                                });

                            });

                        });

                    });

                });



            });

        });

    };
    // end of playGame function

});
// end game