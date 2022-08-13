function addition() {
    fn = Number(document.getElementById("fnum").value);
    ln = Number(document.getElementById("snum").value);
    sum = fn + ln;
    document.getElementById("result").innerHTML = sum;
    }
function subtraction() {
        fn = Number(document.getElementById("fnum").value);
        ln = Number(document.getElementById("snum").value);
        sum = fn - ln;
        document.getElementById("result").innerHTML = sum;
        }
function multiplication() {
            fn = Number(document.getElementById("fnum").value);
            ln = Number(document.getElementById("snum").value);
            sum = fn * ln;
            document.getElementById("result").innerHTML = sum;
            }
function division() {
                fn = Number(document.getElementById("fnum").value);
                ln = Number(document.getElementById("snum").value);
                sum = fn / ln;
                document.getElementById("result").innerHTML = sum;
                }