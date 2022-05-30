
function numToRoman(num) {
    var romanToNum = {
        M: 1000,
        CM: 900,
        d: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    var roman = "";

    for (var x in romanToNum) {
        while (num >= romanToNum[x]) {
            roman += x;
            num -= romanToNum[x];

        }

    }

}

function sojib() {
    var age2 = document.getElementById("age").value;
    var num = Number(age2);
    addEventListener("click", sojib2())
    function sojib2(sajib) {

        var romanToNum = {
            MC:100000000,
            N:100000,
            M: 1000,
            CM: 900,
            d: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };
        var roman = "";

        for (var x in romanToNum) {
            while (num >= romanToNum[x]) {
                roman += x;
                num -= romanToNum[x];

            }
        }

        document.getElementById("demo").innerHTML = roman;
    }
}
