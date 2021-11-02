// Chart JS
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Completed',
            'Ongoing',
            'Stalled'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
});


// Search Project
const project = document.querySelectorAll('.project')

const displayProject = (values) =>{
    project.forEach(element =>{
        element.style.display = "none"
        const title = element.querySelector('h2').innerHTML.toUpperCase();
        const status = element.dataset.status.toUpperCase();
        const recent = element.querySelector('p').innerHTML.toUpperCase();

        if (title.includes(values)){
            element.style.display = "block"
        }
        else if(values != 'RECENT' && status.includes(values)){
            element.style.display = "block"
        }
        else if(values === 'RECENT' && recent.includes('HOUR') || recent.includes('RECENT')){
            element.style.display = "block"
        }
    })
}

searchProject.addEventListener('input', (e) =>{
    displayProject(e.target.value.toUpperCase())
})

projectFilter.addEventListener('input', (e) =>{
    displayProject(e.target.value.toUpperCase())
})