function display() {
    var weight = parseFloat(document.getElementById("one").value);
    var height = parseFloat(document.getElementById("two").value);
    height = height / 100; // Convert height from cm to meters
    var bmi = weight / (height * height);
    let category = bmi;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = 'Obesity';
    } else if (bmi >= 35) {
        category = 'Severe Obesity';
    }

    document.getElementById("result").innerHTML = "Your BMI is:" +bmi ;
    document.getElementById("result1").innerHTML = "Your category is:" +category ;
}
