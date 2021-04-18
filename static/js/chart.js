// set = require('../public/javascripts/chartData.js');
var index1;
var index2;
var index3;
var index4;
var index5;
var cycle;
function setData(i1,i2,i3,i4,i5,i6){
        index1=i1;
        index2=i2;
        index3=i3;
        index4=i4;
        index5=i5;
        cycle=i6;
}

draw(0);
console.log(index1);

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
        var imagefifty=[10];
        var imagepredict=[10];
        var imagecon=[10];
        var image1=[10];
        var image2=[10];
        var image3=[10];
        var image4=[10];
        var image5=[10];
        function drawfifty(num){
                var total=10;
                for(var i=num;i<index1.length-1;i++){      
                    total=total*((0.5*(index1[i+1]/index1[i]))+(0.5*(index5[i+1]/index5[i])));           
                    imagefifty.push(total);
                }
                return imagefifty;
        }
        function drawreal(num){
                var total=10;
                  for(var i=num;i<index1.length-1;i++){
                        if (cycle[i+1]==1){
                          total=total*((0.25*(index1[i+1]/index1[i]))
                                        +(0.25*(index2[i+1]/index2[i]))
                                        +(0.1*(index3[i+1]/index3[i]))
                                        +(0.35*(index4[i+1]/index4[i]))
                                        +(0.05*(index5[i+1]/index5[i])));                           
                        }
                        else if (cycle[i+1]==2){
                          total=total*((0.3*(index1[i+1]/index1[i]))
                                        +(0.5*(index2[i+1]/index2[i]))
                                        +(0.1*(index3[i+1]/index3[i]))
                                        +(0.1*(index4[i+1]/index4[i]))
                                        +(0*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==3){
                          total=total*((0.2*(index1[i+1]/index1[i]))
                                        +(0.3*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.4*(index4[i+1]/index4[i]))
                                        +(0.05*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==4){
                          total=total*((0.*(index1[i+1]/index1[i]))
                                        +(0*(index2[i+1]/index2[i]))
                                        +(0.*(index3[i+1]/index3[i]))
                                        +(0.2*(index4[i+1]/index4[i]))
                                        +(0.8*(index5[i+1]/index5[i])));
                        }
                        imagepredict.push(total);
                }
                return imagepredict;
        }
        /*function drawcon(num){
                var total=10;
                  for(var i=num;i<index1.length-1;i++){
                        if (cycle[i+1]==1){
                          total=total*((0.45*(index1[i+1]/index1[i]))
                                        +(0.1*(index2[i+1]/index2[i]))
                                        +(0.1*(index3[i+1]/index3[i]))
                                        +(0.1*(index4[i+1]/index4[i]))
                                        +(0.25*(index5[i+1]/index5[i])));                           
                        }
                        else if (cycle[i+1]==2){
                          total=total*((0.5*(index1[i+1]/index1[i]))
                                        +(0.15*(index2[i+1]/index2[i]))
                                        +(0.15*(index3[i+1]/index3[i]))
                                        +(0.15*(index4[i+1]/index4[i]))
                                        +(0.05*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==3){
                          total=total*((0.45*(index1[i+1]/index1[i]))
                                        +(0.1*(index2[i+1]/index2[i]))
                                        +(0.1*(index3[i+1]/index3[i]))
                                        +(0.1*(index4[i+1]/index4[i]))
                                        +(0.25*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==4){
                          total=total*((0.2*(index1[i+1]/index1[i]))
                                        +(0.1*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.1*(index4[i+1]/index4[i]))
                                        +(0.55*(index5[i+1]/index5[i])));
                        }
                    imagecon.push(total);
                }
                return imagecon;
        }*/
        function drawcon(num){
                var total=10;
                  for(var i=num;i<index1.length-1;i++){
                        if (cycle[i+1]==1){
                          total=total*((0.05*(index1[i+1]/index1[i]))
                                        +(0.05*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.2*(index4[i+1]/index4[i]))
                                        +(0.65*(index5[i+1]/index5[i])));                           
                        }
                        else if (cycle[i+1]==2){
                          total=total*((0.05*(index1[i+1]/index1[i]))
                                        +(0.05*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.2*(index4[i+1]/index4[i]))
                                        +(0.65*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==3){
                          total=total*((0.05*(index1[i+1]/index1[i]))
                                        +(0.05*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.2*(index4[i+1]/index4[i]))
                                        +(0.65*(index5[i+1]/index5[i])));
                        }

                        else if (cycle[i+1]==4){
                          total=total*((0.05*(index1[i+1]/index1[i]))
                                        +(0.05*(index2[i+1]/index2[i]))
                                        +(0.05*(index3[i+1]/index3[i]))
                                        +(0.2*(index4[i+1]/index4[i]))
                                        +(0.65*(index5[i+1]/index5[i])));
                        }
                    imagecon.push(total);
                }
                return imagecon;
        }


    imagepredict =drawreal(num);
    imagefifty =drawfifty(num);
    imagepcon =drawcon(num);

    var r ={name:'積極',data:[]}
    for(var i =0;i<index1.length;i++){
            r.data[i]=[Date.UTC(2001,i+num,1),imagepredict[i]]
    }

    var f ={name:'股市型投資型各半',data:[]}
    for(var i =0;i<index1.length;i++){
            f.data[i]=[Date.UTC(2001,i+num,1),imagefifty[i]]
    }

    var p ={name:'保守',data:[]}
    for(var i =0;i<index1.length;i++){
            p.data[i]=[Date.UTC(2001,i+num,1),imagecon[i]]
    }
    var chart = Highcharts.chart('container', {
        title: {
                text: '投資報酬折線圖'
        },
        xAxis:{
                type:"datetime",
                Labels:{
                        format:"{value:%Y-%b}" 
                        
                }
                
        },
        yAxis: {
                title: {
                        text: '報酬'
                }
        },
        legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
        },
        series: [r,f,p],
        responsive: {
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
    }); }
