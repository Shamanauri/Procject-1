const chart = document.querySelector("#chart").getContext('2d');

//create a new chart instance
new Chart(chart,{
    type:'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets: [
            {
                label: 'BTC',
                data:[29374,54541,454169,48411,5484,418741,65454,47845,],
                borderColor:'red',
                borderWidth:2
            },
            {
            label: 'ETH',
            data: [934,441,169,411,484,741,454,845],
            borderColor:'Blue',
            borderWidth:2
             }
        
         ]
        },
             option:{
                 responsive: true
         }
        }

)
                //show or hide sidebar//
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
    sidebar.style.display = 'block';
    
})

closeBtn.addEventListener('click',() =>{
    sidebar.style.display = 'none';
})

const themeBtn = document.querySelector ('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active')
    ;
    themeBtn.querySelector('span:last-child').classList.toggle('active')
    ;
})