function mainGame() {


    let game = document.querySelector('.user');
    let computer = document.querySelector('.computer');
    let output = document.querySelector('.output');
    let reset = document.querySelector('.reset');
    let userDisplay = document.querySelector('.userDisplay');
    let computerDisplay = document.querySelector('.computerDisplay');
    let userPoints = document.querySelector('.userPoint');
    let computerPoints = document.querySelector('.computerPoint');
    let userIcon = document.querySelectorAll('.user button');
    let computerIcon = document.querySelectorAll('.computer button');

    let computerData = ['rock', 'paper', 'scissors'];
    function generateNumber() {

        let num = (Math.floor(Math.random() * 10))

        while (num > 2) {
            num = (Math.floor(Math.random() * 10))
        }


        return num
    }

    function clickHandler(event) {
        let generatedNumber = generateNumber();
        let ch = event.target.id;
        userDisplay.innerText = `---${ch}`;
        userDisplay.style.color = '#3290FF'
        computerDisplay.style.color = `#EB2B34`



        if (ch === 'rock') {

            userIcon[0].style.color = 'black'
            userIcon[1].style.color = '#3290FF'
            userIcon[2].style.color = '#3290FF'

        } else if (ch === 'paper') {

            userIcon[1].style.color = 'black'
            userIcon[0].style.color = '#3290FF'
            userIcon[2].style.color = '#3290FF'
        } else {

            userIcon[2].style.color = 'black'
            userIcon[0].style.color = '#3290FF'
            userIcon[1].style.color = '#3290FF'
        }

        if (computerData[generatedNumber] === 'rock') {
            console.log('it is computer rock');
            computerIcon[0].style.color = 'black'
            computerIcon[1].style.color = '#EB2B34'
            computerIcon[2].style.color = '#EB2B34'
            computerDisplay.innerText = `---${computerData[generatedNumber]}`;

        } else if (computerData[generatedNumber] === 'paper') {
            console.log('it is computer paper');
            computerIcon[1].style.color = 'black'
            computerIcon[0].style.color = '#EB2B34'
            computerIcon[2].style.color = '#EB2B34'
            computerDisplay.innerText = `---${computerData[generatedNumber]}`;
        } else {
            console.log('it is computer scissors');
            computerIcon[2].style.color = 'black'
            computerIcon[0].style.color = '#EB2B34'
            computerIcon[1].style.color = '#EB2B34'
            computerDisplay.innerText = `---${computerData[generatedNumber]}`;

        }
        console.log(ch, computerData[generatedNumber]);

        if (ch === computerData[generatedNumber]) {
            output.innerText = `It's a tie`
        } else {
            if ((ch === 'rock') && ((computerData[generatedNumber] === 'paper') || (computerData[generatedNumber] === 'scissors'))) {
                if (computerData[generatedNumber] === 'paper') {
                    computerPoints.innerText = Number(computerPoints.innerText) + 1;
                    output.innerText = 'You Lost'

                } else {
                    userPoints.innerText = Number(userPoints.innerText) + 1;
                    output.innerText = 'You Won'

                }


            } else if ((ch === 'paper') && (computerData[generatedNumber] === 'rock') || (computerData[generatedNumber] === 'scissors')) {
                if (computerData[generatedNumber] === 'rock') {
                    userPoints.innerText = Number(userPoints.innerText) + 1;
                    output.innerText = 'You Won'

                } else {
                    computerPoints.innerText = Number(computerPoints.innerText) + 1;

                    output.innerText = 'You Lost'

                }
            } else {
                if ((computerData[generatedNumber] === 'rock')) {
                    computerPoints.innerText = Number(computerPoints.innerText) + 1;
                    output.innerText = 'You Lost'


                } else {
                    userPoints.innerText = Number(userPoints.innerText) + 1;
                    output.innerText = 'You Won'


                }
            }


        }




    }

    function resetHandler(event) {

        userDisplay.innerText = "";
        computerDisplay.innerText = "";
        output.innerText = "";
        computerIcon[2].style.color = '#EB2B34'
        computerIcon[0].style.color = '#EB2B34'
        computerIcon[1].style.color = '#EB2B34'
        userIcon[2].style.color = '#3290FF'
        userIcon[0].style.color = '#3290FF'
        userIcon[1].style.color = '#3290FF'
        userPoints.innerText = 0;
        computerPoints.innerText = 0;


    }


    game.addEventListener('click', clickHandler);
    reset.addEventListener('click', resetHandler);

}
mainGame();
