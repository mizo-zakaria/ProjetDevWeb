// ======== récupérer données localStorage ========
let films = JSON.parse(localStorage.getItem('Films')) || [];
let reservations = JSON.parse(localStorage.getItem('Reservations')) || [];
let avis = JSON.parse(localStorage.getItem('Avis')) || [];

// ======== Pie Chart: Réservations par Film ========
let filmNames = films.map(f => f.title);
let reservationCount = filmNames.map(film => reservations.filter(r => r.filmReserved === film).length);
let pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type:'pie',
    data: { labels:filmNames, datasets:[{data:reservationCount, backgroundColor:['#F2CD00','#54160B','#6f2316','#cfb109','#350e07']}] },
    options:{ responsive:true }
});

// ======== Donut Chart: Avis par Note ========
let notes = [1,2,3,4,5];
let noteCount = notes.map(n => avis.filter(a => Number(a.note) === n).length);
let donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx,{
    type:'doughnut',
    data:{ labels:notes, datasets:[{data:noteCount, backgroundColor:['#54160B','#F2CD00','#cfb109','#6f2316','#350e07']}] },
    options:{ responsive:true }
});

// ======== Bar Chart: Nombre de Reservations par Film ========
let barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx,{
    type:'bar',
    data:{
        labels:filmNames,
        datasets:[{
            label:'Réservations',
            data:reservationCount,
            backgroundColor:'#F2CD00'
        }]
    },
    options:{ responsive:true, scales:{ y:{ beginAtZero:true } } }
});

// ======== Line Chart: Evolution des Reservations ========
let sortedReservations = reservations.sort((a,b) => new Date(a.reservationDate)-new Date(b.reservationDate));
let lineLabels = sortedReservations.map(r=>r.reservationDate);
let lineData = sortedReservations.map((_,i)=>i+1);
let lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx,{
    type:'line',
    data:{ labels:lineLabels, datasets:[{label:'Total Reservations', data:lineData, fill:false, borderColor:'#54160B', tension:0.2}] },
    options:{ responsive:true }
});

// ======== Scatter Chart: Places vs Note ========
let scatterData = reservations.map(r => {
    let filmAvis = avis.filter(a => a.filmAvis === r.filmReserved);
    let avgNote = filmAvis.length > 0 ? filmAvis.reduce((s,a)=>s+Number(a.note),0)/filmAvis.length : 0;
    return { x:Number(r.placesNumber), y:avgNote };
});
let scatterCtx = document.getElementById('scatterChart').getContext('2d');
new Chart(scatterCtx,{
    type:'scatter',
    data:{ datasets:[{ label:'Places vs Notes', data:scatterData, backgroundColor:'#F2CD00' }] },
    options:{ responsive:true, scales:{ x:{ title:{display:true,text:'Nombre de Places'} }, y:{ title:{display:true,text:'Note Moyenne'}, min:0, max:5 } } }
});
