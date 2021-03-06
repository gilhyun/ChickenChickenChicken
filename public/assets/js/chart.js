function setChart() {
  if ($('.ct-chart').length == 0) return;

  var chart = new Chartist.Line('.ct-chart', {
    labels: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일', '7'],
    series: [
      [
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2},
        {meta: 'description', value: 3},
        {meta: 'description', value: 2},
        {meta: 'description', value: 6},
        {meta: 'description', value: 4},
        {meta: 'description', value: 3},
        {meta: 'description', value: 2}
      ],
      [
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2.6},
        {meta: 'description', value: 3.4},
        {meta: 'description', value: 2.3},
        {meta: 'description', value: 5.4},
        {meta: 'description', value: 5},
        {meta: 'description', value: 3.4},
        {meta: 'description', value: 2}
      ],
      [
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2.1},
        {meta: 'description', value: 2.6},
        {meta: 'description', value: 4.4},
        {meta: 'description', value: 3.8},
        {meta: 'description', value: 2.9},
        {meta: 'description', value: 2}
      ],
      [
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2.5},
        {meta: 'description', value: 3.8},
        {meta: 'description', value: 3.1},
        {meta: 'description', value: 4.9},
        {meta: 'description', value: 3.1},
        {meta: 'description', value: 1.9},
        {meta: 'description', value: 2}
      ],
      [
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2.2},
        {meta: 'description', value: 2.6},
        {meta: 'description', value: 3.4},
        {meta: 'description', value: 2.1},
        {meta: 'description', value: 1.5},
        {meta: 'description', value: 2}
      ]
    ]
  }, {
    high: 8,
    low: 0,
    showArea: true,
    showLine: false,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 0,
      bottom: 0,
      left: 0
    },
    axisX: {
      showLabel: true,
      showGrid: true,
      labelOffset: {
        x: -10,
        y: -30
      }
    },
    axisY: {
      showLabel: true,
      showGrid: true,
      labelOffset: {
        x: 45,
        y: 12
      },
      labelInterpolationFnc: function(value) {
        return value + '만통'
      }
    }
  });


  var seq = 0,
    delays = 80,
    durations = 500;

  chart.on('created', function(data){
    seq = 0;
  });

  chart.on('draw', function(data) {
    if(data.type === 'area') {
      seq++;
      data.element.animate({
        opacity: {
          begin: seq * delays + 1000,
          dur: durations,
          from: 0,
          to: 1
        }
      });
    } else if(data.type === 'line') {
      seq++;
      data.element.animate({
        opacity: {
          begin: seq * delays + 1000,
          dur: durations,
          from: 0,
          to: 1
        }
      });
    } else if(data.type === 'point') {
      seq++;
      data.element.animate({
        x1: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        x2: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        }
      });
    } else if(data.type === 'grid') {
      data.element.animate({
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        }
      });
    }
  });

  chart.on('created', function(data) {
    setToggleChart();
  });
}




//
//  controll chart
//

function setToggleChart() {
  $('#check-cha-a').on('click', function(event) {
    $(this).is(':checked') ? $('.ct-series-e').show('slow') : $('.ct-series-e').hide('slow')
  });

  $('#check-cha-b').on('click', function(event) {
    $(this).is(':checked') ? $('.ct-series-a').show('slow') : $('.ct-series-a').hide('slow')
  });

  $('#check-cha-c').on('click', function(event) {
    $(this).is(':checked') ? $('.ct-series-b').show('slow') : $('.ct-series-b').hide('slow')
  });

  $('#check-cha-d').on('click', function(event) {
    $(this).is(':checked') ? $('.ct-series-d').show('slow') : $('.ct-series-d').hide('slow')
  });

  $('#check-cha-e').on('click', function(event) {
    $(this).is(':checked') ? $('.ct-series-c').show('slow') : $('.ct-series-c').hide('slow')
  });
};

$(function() {
  setChart();
});
