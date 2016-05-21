function calculate_median(arr) {
    var evenArrary = [];

    arr.forEach(function (number, index) {
        if (index % 2 != 0) {
            evenArrary.push(number);
        }
    });

    if (evenArrary.length % 2 != 0) {

        return evenArrary[(evenArrary.length - 1) / 2];
    }
    else {

        return (evenArrary[evenArrary.length / 2] + evenArrary[(evenArrary.length) / 2 - 1]) / 2;
    }
}

module.exports = calculate_median;
