
        var half_data=[];
        var pred_data=[];
        var con_data=[];
        var pred_json ={name:'積極',data:[]};//r
        var half_json={name:'股市型投資型各半',data:[]}//f
        var con_json={name:'保守',data:[]}//p
        
        function set_data(num,p,h,c){
                this.half_data=h;
                this.pred_data=p;
                this.con_data=c;

                for(var i =0;i<this.pred_data.length;i++){ //num是使用者輸入的月份距離2001有幾個月
                        this.pred_json.data[i]=[Date.UTC(2001,i+num,1),this.pred_data[i]]
                        this.half_json.data[i]=[Date.UTC(2001,i+num,1),this.half_data[i]]
                        this.con_json.data[i]=[Date.UTC(2001,i+num,1),this.con_data[i]]
                }
                draw(num,this.pred_json,this.half_json,this.con_json)
        }
        function get_action() {
                
                var day=document.forms["date_form"]["user_day"].value;
                var year= day.split("-");
                
                set_data(countMonth(year[0],year[1]),this.pred_data,this.half_data,this.con_data);
                
                
        }
        function countMonth(y,m){
                m=Number(m);
                return ((y-2001)*12+m-1);
        }
        function draw(num,p,h,c){
                
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
                        var series= [p,h,c]
                        var responsive= {
                                rules: [{
                                        condition: {
                                                maxWidth: 500
                                        },
                                        chartOptions: {
                                                legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                }
                                        }
                                }]
                        }
                        var json = {};
                
                        json.title = title;
                        json.xAxis = xAxis;
                        json.yAxis = yAxis;
                        json.legend = legend;
                        json.responsive=responsive;
                        json.series = series;
                        var chart = Highcharts.chart('chart',json)
                
        }

       
