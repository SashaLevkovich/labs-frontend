const ctx = document.getElementById('graf').getContext('2d');

let delayed;

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213, 1)');
gradient.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

let labels = new Array();

for (let x = 0.5; x < 10; x += 0.5) {
  let pos = Math.sin(Math.log2(Math.pow(x, 2)) - Math.PI / 4);
  labels.push(pos);
}

const data = {
  labels,
  datasets: [
    {
      data: [
        15, 23, 14, 4, 25, 36, 72, 8, 29, 23, 11, 12, 33, 19, 5, 46, 17, 32, 16,
        20,
      ],
      label: 'LabWork №2',
      fill: true,
      backgroundColor: gradient,
      borderColor: '#fff',
      pointBackgroundColor: 'rgb(0, 122, 255)',
      tension: 0.2,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    radius: 5,
    hitRadius: 15,
    hoverRadius: 15,
    responsive: true,
    animation: {
      onCompete: () => {
        delayed = true;
      },
      delayed: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 0.4 + context.datasetIndex * 0.2;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value + '%';
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
