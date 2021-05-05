var DSA = [];
var NOTSA = [];

function submit(){
    for (var j = 1; j <= 4; j++){
        var NOTS = document.getElementById("name_of_the_student_"+j).value;
        console.log(NOTS);
        NOTSA.push(NOTS);
    }
    console.log(NOTSA);

    var LONOSA = NOTSA.length;
    console.log (LONOSA);
    for (var k = 0; k < LONOSA ; k++){
        DSA.push("<h4>name - "+ NOTSA[k] + "</h4>");
        console.log(DSA);
    }
    console.log(DSA);
    document.getElementById("display_name_with_commas").innerHTML = DSA;

    var RC = DSA.join(" ");
    console.log(RC);
    document.getElementById("display_name_without_commas").innerHTML = RC;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    NOTSA.sort();
    console.log(NOTSA);

    var DSAS = [];

    var LONOTSA =  NOTSA.length;
    console.log(LONOTSA);

    for(var i = 0 ; i<LONOTSA;i++){
        DSAS.push("<h4>NAME - " + NOTSA[i]+"</h4>");
        console.log(DSAS);
    }
    var RC = DSAS.join(" ");
    console.log(RC);

    document.getElementById("display_name_without_commas").innerHTML = RC;
}