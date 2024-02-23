// menu bar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function hideSidebar(){
  const hideSidebar=document.querySelector('.sidebar');
  hideSidebar.style.display='none';
}



// Sample data for number of views and number of projects
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const viewsData = [500, 1000, 800, 1500, 1200, 1800];
const projectsData = [10, 15, 12, 18, 14, 20];

// Create the chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Views',
            data: viewsData,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)', // Blue with opacity
            borderWidth: 2,
            fill: {
                target: 'origin',
                above: 'rgba(0, 0, 255, 0.2)', // Blue with opacity above the curve
            },
            lineTension: 0.4 // Adjust the curve tension
        }, {
            label: 'Number of Projects',
            data: projectsData,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.2)', // Green with opacity
            borderWidth: 2,
            fill: {
                target: 'origin',
                above: 'rgba(0, 255, 0, 0.2)', // Green with opacity above the curve
            },
            lineTension: 0.4 // Adjust the curve tension
        }]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'views-y-axis',
                type: 'linear',
                position: 'left',
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Views'
                }
            }, {
                id: 'projects-y-axis',
                type: 'linear',
                position: 'right',
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Projects'
                }
            }],
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                },
                gridLines: {
                    display: false // Hide grid lines on x-axis
                }
            }]
        }
    }
});
