// var ctx = document.getElementById("myChart");

// var chart = ctx.getContext('2d');

// chart.fillStyle = "red";
// chart.fillRect(0,0,100,200);

// chart.fillStyle = "blue";
// chart.fillRect(150, 50, 100, 200);


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'Mayo'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['pink', 'pink', 'pink'],
            borderColor: 'rgb(255, 99, 132)',
            data: [50, 10, 5,20,100]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');

var chart = new Chart(ctx, {

    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'Mayo'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['pink', 'pink', 'pink'],
            borderColor: 'rgb(255, 99, 132)',
            data: [50, 10, 5,20,100]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})