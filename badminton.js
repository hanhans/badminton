document.getElementById('cal').onclick = function() {
    var ballM = 33;
    var couresfee = parseInt(document.getElementById('couresfee').value);
    var ballAll = parseInt(document.getElementById('ballAll').value);
    var peopleAll = parseInt(document.getElementById('peopleAll').value);
    var totalNum = ballM * ballAll + couresfee;
    var peopleM = totalNum / peopleAll
    peopleM = peopleM.toFixed(2);
    document.getElementById('total').textContent = totalNum;

    document.getElementById('peopleM').textContent = peopleM;


}