let btn1 = function () {
    const numberOfPoints = document.getElementById("elebtn1").textContent;
    var styling = document.getElementById("entry-page");
    styling.style.display = 'none';

    let Wonending = document.getElementById('won')
    Wonending.style.display = 'none';

    let Looseending = document.getElementById('loose')
    Looseending.style.display = 'none';

    var secondStyling = document.getElementById("section");
    secondStyling.style.display = 'block';

    let stone = document.getElementById('item1');
    let paper = document.getElementById('item2');
    let scissor = document.getElementById('item3');

    stone.addEventListener('click', function () {
        myChoice(stone)
    })
    paper.addEventListener('click', function () {
        myChoice(paper)
    })
    scissor.addEventListener('click', function () {
        myChoice(scissor)
    })
    let S = document.getElementById("item1").src
    let P = document.getElementById("item2").src
    let C = document.getElementById("item3").src
    let userPoints = 0;
    let botPoints = 0;
    let arr = [S, P, C]
    function myChoice(x) {
        let user = x.src;
        let bot = arr[Number.parseInt(Math.random() * 3)]
        document.getElementById('elechosen1').src = user
        document.getElementById('elechosen3').src = bot
        if (user === bot) {
            userPoints
            botPoints
        }
        else if (user == S && bot == C) {
            userPoints++
        }
        else if (user == S && bot == P) {
            botPoints++
        }

        else if (user == P && bot == S) {
            userPoints++
        }
        else if (user == P && bot == C) {
            botPoints++
        }
        else if (user == C && bot == P) {
            userPoints++
        }
        else if (user == C && bot == S) {
            botPoints++
        }
        else {
            alert("Invalid input")
        }
        document.getElementById('points1').textContent = userPoints;
        document.getElementById('points3').textContent = botPoints;
        if (userPoints == numberOfPoints) {
            Wonending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingWonBtn.addEventListener('click', ending)

        }
        else if (botPoints == numberOfPoints) {
            Looseending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingLooseBtn.addEventListener('click', ending)

        }
    }
}

let btn2 = function () {
    const numberOfPoints = document.getElementById("elebtn2").textContent;
    var styling = document.getElementById("entry-page");
    styling.style.display = 'none';

    let Wonending = document.getElementById('won')
    Wonending.style.display = 'none';

    let Looseending = document.getElementById('loose')
    Looseending.style.display = 'none';

    var secondStyling = document.getElementById("section");
    secondStyling.style.display = 'block';

    let stone = document.getElementById('item1');
    let paper = document.getElementById('item2');
    let scissor = document.getElementById('item3');

    stone.addEventListener('click', function () {
        myChoice(stone)
    })
    paper.addEventListener('click', function () {
        myChoice(paper)
    })
    scissor.addEventListener('click', function () {
        myChoice(scissor)
    })

    let S = document.getElementById("item1").src
    let P = document.getElementById("item2").src
    let C = document.getElementById("item3").src
    let userPoints = 0;
    let botPoints = 0;
    let arr = [S, P, C]
    function myChoice(x) {
        let user = x.src;
        let bot = arr[Number.parseInt(Math.random() * 3)]
        document.getElementById('elechosen1').src = user
        document.getElementById('elechosen3').src = bot
        if (user === bot) {
            userPoints
            botPoints
        }
        else if (user == S && bot == C) {
            userPoints++
        }
        else if (user == S && bot == P) {
            botPoints++
        }

        else if (user == P && bot == S) {
            userPoints++
        }
        else if (user == P && bot == C) {
            botPoints++
        }
        else if (user == C && bot == P) {
            userPoints++
        }
        else if (user == C && bot == S) {
            botPoints++
        }
        else {
            alert("Invalid input")
        }
        document.getElementById('points1').textContent = userPoints;
        document.getElementById('points3').textContent = botPoints;
        if (userPoints == numberOfPoints) {
            Wonending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingWonBtn.addEventListener('click', ending)

        }
        else if (botPoints == numberOfPoints) {
            Looseending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingLooseBtn.addEventListener('click', ending)

        }
    }
}

let btn3 = function () {
    const numberOfPoints = document.getElementById("elebtn3").textContent;
    var styling = document.getElementById("entry-page");
    styling.style.display = 'none';

    let Wonending = document.getElementById('won')
    Wonending.style.display = 'none';

    let Looseending = document.getElementById('loose')
    Looseending.style.display = 'none';

    var secondStyling = document.getElementById("section");
    secondStyling.style.display = 'block';

    let stone = document.getElementById('item1');
    let paper = document.getElementById('item2');
    let scissor = document.getElementById('item3');

    stone.addEventListener('click', function () {
        myChoice(stone)
    })
    paper.addEventListener('click', function () {
        myChoice(paper)
    })
    scissor.addEventListener('click', function () {
        myChoice(scissor)
    })

    let S = document.getElementById("item1").src
    let P = document.getElementById("item2").src
    let C = document.getElementById("item3").src
    let userPoints = 0;
    let botPoints = 0;
    let arr = [S, P, C]
    function myChoice(x) {
        let user = x.src;
        let bot = arr[Number.parseInt(Math.random() * 3)]
        document.getElementById('elechosen1').src = user
        document.getElementById('elechosen3').src = bot
        if (user === bot) {
            userPoints
            botPoints
        }
        else if (user == S && bot == C) {
            userPoints++
        }
        else if (user == S && bot == P) {
            botPoints++
        }

        else if (user == P && bot == S) {
            userPoints++
        }
        else if (user == P && bot == C) {
            botPoints++
        }
        else if (user == C && bot == P) {
            userPoints++
        }
        else if (user == C && bot == S) {
            botPoints++
        }
        else {
            alert("Invalid input")
        }
        document.getElementById('points1').textContent = userPoints;
        document.getElementById('points3').textContent = botPoints;
        if (userPoints == numberOfPoints) {
            Wonending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingWonBtn.addEventListener('click', ending)

        }
        else if (botPoints == numberOfPoints) {
            Looseending.style.display = 'block';
            secondStyling.style.display = 'none';
            let ending = function () {
                window.location.reload();
            }
            endingLooseBtn.addEventListener('click', ending)

        }
    }
}


elebtn1.addEventListener('click', btn1);
elebtn2.addEventListener('click', btn2);
elebtn3.addEventListener('click', btn3);
