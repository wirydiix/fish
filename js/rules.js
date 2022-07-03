let rules = document.querySelector(".rules");
rules.innerHTML +=`
    В этой игре вам необходимо за ${GameTime/1000} секунд поймать как
    можно больше рыбы. Маленькие быстрее, большие медленне.
    <li>За маленькую рыбу вы получите ${fishs['little'].score} очков;</li>
    <li>За среднюю рыбу вы получите ${fishs['medium'].score} очков;</li>
    <li>За большую рыбу вы получите ${fishs['big'].score} очков;</li>
    
`;