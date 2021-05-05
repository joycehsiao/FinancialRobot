var half_data=[];
var pred_data=[];
var con_data=[];
var pred_json ={name:'積極',data:[]};//r
var half_json={name:'股市型投資型各半',data:[]}//f
var con_json={name:'保守',data:[]}//p
var num=1;
function set_data(pred_data,half_data,con_data){
        this.half_data=half_data;
        this.pred_data=pred_data;
        this.con_data=con_data;

        for(var i =0;i<this.pred_data.length;i++){ //num是使用者輸入的月份距離2001有幾個月
                this.pred_json.data[i]=[Date.UTC(2001,i+this.num,1),this.pred_data[i]]
                this.half_json.data[i]=[Date.UTC(2001,i+this.num,1),this.half_data[i]]
                this.con_json.data[i]=[Date.UTC(2001,i+this.num,1),this.con_data[i]]
        }
        draw(1)
}
function get_action() {
        
        var day=document.forms["dateForm"]["userDay"].value;
        var year= day.split("-");
        
        draw(countMonth(year[0],year[1]));
        
        
}
function countMonth(y,m){
        m=Number(m);
        return ((y-2001)*12+m-1);
}
function draw(num){
        $(document).ready(function() {
                var title={
                        text: '投資報酬折線圖'
                };
                var xAxis={
                        type:"datetime",
                        Labels:{
                                format:"{value:%Y-%b}"  
                        }       
                };
                var yAxis={
                        title: {
                                text: '報酬'
                        }
                };
                var legend= {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                }
                var series= [this.pred_json,this.half_json,this.con_json]
                // var responsive= {
                //         rules: [{
                //                 condition: {
                //                         maxWidth: 500
                //                 },
                //                 chartOptions: {
                //                         legend: {
                //                                 layout: 'horizontal',
                //                                 align: 'center',
                //                                 verticalAlign: 'bottom'
                //                         }
                //                 }
                //         }]
                // }
                var json = {};
        
                json.title = title;
                json.xAxis = xAxis;
                json.yAxis = yAxis;
                json.legend = legend;
                json.series = series;
        
                var chart = Highcharts.chart('chart',json)
                // chart.renderTo('chart');
        });
}

// $(document).ready(function() {
//         var title = {
//             text: '月平均氣溫'   
//         };
//         var subtitle = {
//              text: 'Source: twcode01.com'
//         };
//         var xAxis = {
//             categories: ['一月', '二月', '三月', '四月', '五月', '六月'
//                    ,'七月', '八月', '九月', '十月', '十一月', '十二月']
//         };
//         var yAxis = {
//            title: {
//               text: 'Temperature (\xB0C)'
//            },
//            plotLines: [{
//               value: 0,
//               width: 1,
//               color: '#808080'
//            }]
//         };   
     
//         var tooltip = {
//            valueSuffix: '\xB0C'
//         }
     
//         var legend = {
//            layout: 'vertical',
//            align: 'right',
//            verticalAlign: 'middle',
//            borderWidth: 0
//         };
     
//         var series =  [
//            {
//               name: 'Tokyo',
//               data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
//                  26.5, 23.3, 18.3, 13.9, 9.6]
//            }, 
//            {
//               name: 'New York',
//               data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
//                  24.1, 20.1, 14.1, 8.6, 2.5]
//            }, 
//            {
//               name: 'Berlin',
//               data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
//                  17.9, 14.3, 9.0, 3.9, 1.0]
//            }, 
//            {
//               name: 'London',
//               data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
//                  16.6, 14.2, 10.3, 6.6, 4.8]
//            }
//         ];
     

//      });