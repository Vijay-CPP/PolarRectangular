function polToRec() {
    let r = document.getElementById("r").value;
    let theta = document.getElementById("theta").value;

    theta = (theta * Math.PI) / 180;

    let x = r * (Math.cos(theta));
    let y = r * (Math.sin(theta));


    console.log(theta, x, y);

    let ans = document.querySelector(".ans1");
    ans.innerText = "Result = " + x.toFixed(8) + " + j (" + y.toFixed(8)+")";
}

function recToPol() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    let r = Math.sqrt(x * x + y * y);
    let theta = Math.atan(y / x);

    let ans = document.querySelector(".ans2");

    theta = (theta * 180)/Math.PI;

    ans.innerText = "Result = " + r.toFixed(8) + " ∠ (" + theta.toFixed(8)+")";

    console.log(r, theta);
}
