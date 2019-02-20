function reset() {

    document.getElementById("button4").removeEventListener("click", reset);


    document.getElementById("button4").addEventListener("click", playGame);

    document.getElementById("subtitle").innerHTML = "The Start";
    document.getElementById("mainText").innerHTML = "Follow the trial of Socrates by making decisions and unfolding the story as you go.Try to discover the historical ending, or follow an alternate timeline."

    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Play</span>';

}

reset();

function playGame() {

    document.getElementById("button4").removeEventListener("click", playGame);


    document.getElementById("button3").addEventListener("click", agreeWithCharges);

    document.getElementById("button4").addEventListener("click", disagreeWithCharges);


    document.getElementById("subtitle").innerHTML = "The Start";
    document.getElementById("mainText").innerHTML = "It is the year 399 BC and you are the great Philosopher, Socrates. The City of Athens has put you on trial for refusing to recognize the Gods of the state and corruption of the youth. You stand before your accusers, Anytus, Meletus, and Lycon as well as a jury of 500 Athenians blaming you for the city's recent hardships. Do you agree with the charges?";

    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Agree</span>';
    document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Disagree</span>';

    function agreeWithCharges() {

        document.getElementById("button3").removeEventListener("click", agreeWithCharges);

        document.getElementById("button4").removeEventListener("click", disagreeWithCharges);


        document.getElementById("subtitle").innerHTML = "You agreed to the charges";
        document.getElementById("mainText").innerHTML = "The jury now asks that you apologize for denying the Gods and tainting the young minds of the city. What do you do?";

        document.getElementById("button1").innerHTML = "";
        document.getElementById("button2").innerHTML = "";
        document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Apologize</span>';
        document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Refuse</span>';
    }

    function disagreeWithCharges() {

        document.getElementById("button3").removeEventListener("click", agreeWithCharges);

        document.getElementById("button4").removeEventListener("click", disagreeWithCharges);


        document.getElementById("button4").addEventListener("click", disagreeWithChargesNext);

        document.getElementById("subtitle").innerHTML = "You disagreed with the charges";
        document.getElementById("mainText").innerHTML = "You look into the eyes of the jurors and begin to explain why you disagree with the accusations presented. You claim that if the jury and regular Athenians are, as they claim, 'improvers of youth', then one man cannot undo all the improvement of so many. You also claim that you must believe in Gods since you believe in the influence of Gods. To do so would be like believing in flute music, but not a flute player.";

        document.getElementById("button1").innerHTML = "";
        document.getElementById("button2").innerHTML = "";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("button4").innerHTML = '<span class="btn btn-light text-primary">Next</span>';

        function disagreeWithChargesNext() {

            document.getElementById("button4").removeEventListener("click", disagreeWithChargesNext);


            document.getElementById("button1").addEventListener("click", chooseDeath);

            document.getElementById("button2").addEventListener("click", chooseExile);

            document.getElementById("button3").addEventListener("click", chooseCompensation);

            document.getElementById("button4").addEventListener("click", chooseOther);

            document.getElementById("subtitle").innerHTML = "You disagreed with the charges";
            document.getElementById("mainText").innerHTML = "The jury hears your defense and proceed to deliberate your fate. After their votes are cast and tallied, the results are as follow: 4 abstentions, 263 votes against you, and 234 in your favor. You are found guilty of all charges and sentenced to death by Hemlock. However, they do allow you a chance to suggest another punishment. What punishment do you offer?";

            document.getElementById("button1").innerHTML = '<span class="btn btn-primary">Death</span>';
            document.getElementById("button2").innerHTML = '<span class="btn btn-primary">Exile</span>';
            document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Reward</span>';
            document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Other</span>';

            function chooseDeath() {

                document.getElementById("button1").removeEventListener("click", chooseDeath);

                document.getElementById("button2").removeEventListener("click", chooseExile);

                document.getElementById("button3").removeEventListener("click", chooseCompensation);

                document.getElementById("button4").removeEventListener("click", chooseOther);


                document.getElementById("button3").addEventListener("click", continueDeath);

                document.getElementById("button4").addEventListener("click", dropDrink);

                document.getElementById("subtitle").innerHTML = "You agreed to death by Hemlock";
                document.getElementById("mainText").innerHTML = "You raise your head up high and announce that do not wish to offer another punishment and accept the jury's decision. In fact you insist that the Hemlock be brought out now. You explain that the law has passed its judgement and ensure them that there is no need to prolong your fate. You are handed the drink and catch a whiff of its lethal aroma. Do you continue to drink the Hemlock?";

                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Drink</span>';
                document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Refuse</span>';

                function continueDeath() {

                    document.getElementById("button3").removeEventListener("click", continueDeath);

                    document.getElementById("button4").removeEventListener("click", dropDrink);


                    document.getElementById("button4").addEventListener("click", endGame);

                    document.getElementById("subtitle").innerHTML = "You willingly drank the Hemlock";
                    document.getElementById("mainText").innerHTML = "As you press the drink to your lips, you throw back your head and let the poisonous concoction slide down your throat. Your body collapses in the middle of the square as your friends look on in horror. Although those close to you did not get a chance to understand your insistence on choosing death, you are still remembered fondly by them. Your teachings continue to be taught throughout history.";

                    document.getElementById("button1").innerHTML = "";
                    document.getElementById("button2").innerHTML = "";
                    document.getElementById("button3").innerHTML = "";
                    document.getElementById("button4").innerHTML = '<span class="btn btn-light text-dark">End</span>';

                    function endGame() {

                        document.getElementById("button4").removeEventListener("click", endGame);


                        document.getElementById("button4").addEventListener("click", reset);

                        document.getElementById("subtitle").innerHTML = "Timeline";
                        document.getElementById("mainText").innerHTML = '<h3>You are remembered fondly.</h3><p>Choices</p><ul><li>You disagreed with the charges</li><li>You agreed to death by Hemlock</li><li>You willingly drank the Hemlock</li></ul><h3 class="text-warning text-center">Okay <span class="font-italic">Alternate</span> Ending</h3>';

                        document.getElementById("button1").innerHTML = "";
                        document.getElementById("button2").innerHTML = "";
                        document.getElementById("button3").innerHTML = "";
                        document.getElementById("button4").innerHTML = '<span class="btn btn-dark text-light">Replay</span>';

                    }



                }

                function dropDrink() {

                    document.getElementById("button3").removeEventListener("click", continueDeath);

                    document.getElementById("button4").removeEventListener("click", dropDrink);


                    document.getElementById("button4").addEventListener("click", endGame);

                    document.getElementById("subtitle").innerHTML = "You didn't drink the Hemlock";
                    document.getElementById("mainText").innerHTML = "You stare at the full goblet in your hands, and a wave of fear rushes into your body. Your hands loosen their grip and the drink slips through, falling to the ground. You make a mad sprint towards a clearing in the crowd around you. Just as you are about to get through, a spear pierces you from behind and pins you to the ground. Everyone looks at you with hatred and disgust. Your followers lose all respect for you and your ideas and your teachings are mocked throughout all of Athens.";

                    document.getElementById("button1").innerHTML = "";
                    document.getElementById("button2").innerHTML = "";
                    document.getElementById("button3").innerHTML = "";
                    document.getElementById("button4").innerHTML = '<span class="btn btn-light text-dark">End</span>';

                    function endGame() {

                        document.getElementById("button4").removeEventListener("click", endGame);


                        document.getElementById("button4").addEventListener("click", reset);

                        document.getElementById("subtitle").innerHTML = "Timeline";
                        document.getElementById("mainText").innerHTML = '<h3>You are remembered as a coward.</h3><p>Choices</p><ul><li>You disagreed with the charges</li><li>You agreed to death by Hemlock</li><li>You did not drink the Hemlock</li></ul><h3 class="text-danger text-center">Bad <span class="font-italic">Alternate</span> Ending</h3>';

                        document.getElementById("button1").innerHTML = "";
                        document.getElementById("button2").innerHTML = "";
                        document.getElementById("button3").innerHTML = "";
                        document.getElementById("button4").innerHTML = '<span class="btn btn-dark text-light">Replay</span>';

                    }
                }

            }

            function chooseExile() {

                document.getElementById("button1").removeEventListener("click", chooseDeath);

                document.getElementById("button2").removeEventListener("click", chooseExile);

                document.getElementById("button3").removeEventListener("click", chooseCompensation);

                document.getElementById("button4").removeEventListener("click", chooseOther);


                document.getElementById("button3").addEventListener("click", chooseCompensation);

                document.getElementById("button4").addEventListener("click", chooseOther);

                document.getElementById("subtitle").innerHTML = "You recommended exile";
                document.getElementById("mainText").innerHTML = "You suggest to the jurors that instead of death, that you be exiled from Athens forever. They take some time to think it over and come to a decision. Rather than death, you are to be banished from the city but only on the condition that you never corrupt young minds again. Do you agree to stop teaching philosophy?";

                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Yes</span>';
                document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Never!</span>';

            }

            function chooseCompensation() {


                document.getElementById("button1").removeEventListener("click", chooseDeath);

                document.getElementById("button2").removeEventListener("click", chooseExile);

                document.getElementById("button3").removeEventListener("click", chooseCompensation);

                document.getElementById("button4").removeEventListener("click", chooseOther);


                document.getElementById("button4").addEventListener("click", chooseCompensationNext);

                document.getElementById("subtitle").innerHTML = "You recommended you be compensated";
                document.getElementById("mainText").innerHTML = "You tell the jury that you teach Philosophy to better the minds of the people. You have lived life as a pauper, never asking for compensation for sharing lessons or ideas with others. It is then that you recommend the most fitting penalty for your action should be reimbursement. You suggest that you be given food and wages for the broadening of Philosophical thought. The jury becomes enraged at your proposal and demands you suggest a proper penalty. It is then that you reluctantly suggest a small fee, something that a poor man such as yourself can afford to pay.";

                document.getElementById("button1").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button3").innerHTML = "";
                document.getElementById("button4").innerHTML = '<span class="btn btn-light text-primary">Next</span>';

                function chooseCompensationNext() {

                    document.getElementById("button4").removeEventListener("click", chooseCompensationNext);


                    document.getElementById("button3").addEventListener("click", offerBribe);

                    document.getElementById("button4").addEventListener("click", noBribe);

                    document.getElementById("subtitle").innerHTML = "You recommended you be compensated";
                    document.getElementById("mainText").innerHTML = "The jurors then take your suggestion into account and begin to cast their votes. After they are tallied, it is decided that the proposed fee is insufficient. It is to be death by Hemlock. You are then taken away to await your fate. As you are held away, your friends suggests that you offer a bribe to the guards so you can escape. Do you offer a bribe?";

                    document.getElementById("button1").innerHTML = "";
                    document.getElementById("button2").innerHTML = "";
                    document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Bribe</span>';
                    document.getElementById("button4").innerHTML = '<span class="btn btn-primary">No</span>';

                    function offerBribe() {

                        document.getElementById("button3").removeEventListener("click", offerBribe);

                        document.getElementById("button4").removeEventListener("click", noBribe);


                        document.getElementById("button3").addEventListener("click", speakPatrol);

                        document.getElementById("button4").addEventListener("click", fightPatrol);

                        document.getElementById("subtitle").innerHTML = "You bribed the guard";
                        document.getElementById("mainText").innerHTML = "You decide to follow their suggestion and proceed to bribe the guards with money your friends have agreed to give you. The guard on duty decides to accept and attempts to sneak you out in the dead of the night. At the edge of the city, just as you are about to escape, you are spotted by a small patrol unit of three guards. They begin moving towards you with spears in hand, calling out your name. You realize you can either try to use your words, or your fists. Which do you choose?";

                        document.getElementById("button1").innerHTML = "";
                        document.getElementById("button2").innerHTML = "";
                        document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Speak</span>';
                        document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Fight</span>';



                    }

                    function noBribe() {

                        document.getElementById("button3").removeEventListener("click", offerBribe);

                        document.getElementById("button4").removeEventListener("click", noBribe);


                        document.getElementById("button4").addEventListener("click", noBribeNext);

                        document.getElementById("subtitle").innerHTML = "You bribed the guard";
                        document.getElementById("mainText").innerHTML = "You talk with your friends and reveal to them the reasons you do not wish to run or escape death. You state that the body is a source of endless turmoil and that the mind can only be liberated after death. You have lived in Athens, agreeing to their laws by continuing to stay. To ignore the laws now is to ignore your previous agreement with it, which is unjust.";

                        document.getElementById("button1").innerHTML = "";
                        document.getElementById("button2").innerHTML = "";
                        document.getElementById("button3").innerHTML = "";
                        document.getElementById("button4").innerHTML = '<span class="btn btn-light text-primary">Next</span>';



                    }

                }
            }

            function chooseOther() {

                document.getElementById("button1").removeEventListener("click", chooseDeath);

                document.getElementById("button2").removeEventListener("click", chooseExile);

                document.getElementById("button3").removeEventListener("click", chooseCompensation);

                document.getElementById("button4").removeEventListener("click", chooseOther);


                document.getElementById("button4").addEventListener("click", chooseDeath);

                document.getElementById("button4").addEventListener("click", chooseExile);

                document.getElementById("button4").addEventListener("click", chooseCompensation);

                document.getElementById("button4").addEventListener("click", chooseOther);

                document.getElementById("subtitle").innerHTML = "You agreed to the charges";
                document.getElementById("mainText").innerHTML = "The jury hears your defense and proceed to deliberate your fate. After their votes are cast and tallied, the results are as follow: 4 abstentions, 263 votes against you, and 234 in your favor. You are found guilty of all charges and sentenced to death by Hemlock. However, they do allow you a chance to suggest another punishment. What punishment do you offer?";

                document.getElementById("button1").innerHTML = '<span class="btn btn-primary">Death</span>';
                document.getElementById("button2").innerHTML = '<span class="btn btn-primary">Exile</span>';
                document.getElementById("button3").innerHTML = '<span class="btn btn-primary">Compensation</span>';
                document.getElementById("button4").innerHTML = '<span class="btn btn-primary">Other</span>';

            }

        }


    }



}