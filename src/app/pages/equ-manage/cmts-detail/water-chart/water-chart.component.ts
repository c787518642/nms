import { Component, OnInit } from '@angular/core';

declare var echarts;
@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.scss']
})
export class WaterChartComponent implements OnInit {
  options1: any;
  options2: any;
  options3: any;
  constructor() { }

  ngOnInit() {
    this.options1 = {
      series: [{
        type: 'liquidFill',
        color: ['#49d088', '#38b470', '#2aaf66'],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [0.6],
        radius: '72%',
        backgroundStyle: {

          borderColor: '#9FE2AF',
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: '#B0F5C2'
            }, {
              offset: 1,
              color: '#99DCA9'
            }]
          ),

        },
        outline: {
          itemStyle: {
            borderColor: '#d6e4da',
            borderWidth: 4,
            shadowBlur: 0
          },
          borderDistance: 3
        },
        label: {
          normal: {
            formatter: function(params) {
              return    params.data*100+"%"+'\n'+"上行利用率";
            },
            textStyle: {
              fontSize: 26,
              color:"#34c46e"
            }
          }
        },
        itemStyle: {
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: '#4ABD74'
        },

      }]
    };
    this.options2 = {
      series: [{
        type: 'liquidFill',
        color: ['#4cc2ff', '#94d9fc', '#e7f7ff'],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [0.6],
        radius: '72%',
        backgroundStyle: {

          borderColor: '#4cc2ff',
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: '#94d9fc'
            }, {
              offset: 1,
              color: '#4cc2ff'
            }]
          ),

        },
        outline: {
          itemStyle: {
            borderColor: '#d6e4da',
            borderWidth: 4,
            shadowBlur: 0
          },
          borderDistance: 3
        },
        label: {
          normal: {
            formatter: function(params) {
              return    params.data*100+"%"+'\n'+"下行利用率";
            },
            textStyle: {
              fontSize: 26,
              color:"#4cc2ff"
            }
          }
        },
        itemStyle: {
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: '#4cc2ff'
        },

      }]
    };
    this.options3 = {
      series: [{
        type: 'liquidFill',
        color: ['#fb4765', '#fb92a3', '#ef2d4d'],
        amplitude:10,
        waveLength: '500px',
        period:900,
        data: [0.6],
        radius: '72%',
        backgroundStyle: {

          borderColor: '#fb4765',
          borderWidth: 0.5,
          color: new echarts.graphic.LinearGradient(
            0.1, 0, 0, 1, [{
              offset: 0,
              color: '#fff'
            }, {
              offset: 0.4,
              color: '#fb93a3'
            }, {
              offset: 1,
              color: '#fb4765'
            }]
          ),

        },
        outline: {
          itemStyle: {
            borderColor: '#d6e4da',
            borderWidth: 4,
            shadowBlur: 0
          },
          borderDistance: 3
        },
        label: {
          normal: {
            formatter: function(params) {
              return    params.data*100+"%"+'\n'+"在线率";
            },
            textStyle: {
              fontSize: 26,
              color:"#ef2d4d"
            }
          }
        },
        itemStyle: {
          opacity: 0.95,
          shadowBlur: 10,
          shadowColor: '#ef2d4d'
        },

      }]
    };
  }
}
