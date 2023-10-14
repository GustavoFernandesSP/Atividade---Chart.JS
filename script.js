const ctx = document.getElementById('graficoMensal');

    const ctx2 = document.getElementById('graficoDiário')

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
          label: 'Temperatura Média',
          data: [22, 24, 27, 23, 20, 18],
          backgroundColor: '#FF6384',

        },
        {
          label: 'Umidade Média',
          data: [90, 89, 93, 87, 88, 82],
          backgroundColor: '#36A2EB',
        }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ["12:00", '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [{
          label: 'Temperatura',
          data: [30, 29, 28, 25, 22, 23],
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',


        },
        {
          label: 'Umidade',
          data: [80, 82, 80, 85, 80, 83],
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',

        }
        ]
      }
    });