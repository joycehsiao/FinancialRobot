/**
計算三種折線圖資料
其中參數num表示使用者選擇的月份，以2001年到使用者選擇月份的總月份表示。
例如使用者選擇2002/1 則num=12 , 因為2001到該月共有12個月 (這部分計算你再確認是12還是13)
1. 函數說明 : 計算投資股市各半 回傳陣列 例如 [23,25,25,35]，其中迴圈是從num月份到最新月份
2. 變數r,f,p 是存放最終圖表讀取的json資料格式
  該資料格式為:{name:"",data:[[時間,數字]]}  
    其中時間放Date.UTC格式 Date.UTC(2001,i+num,1) 表示,
    因為num本來就存放從2001開始的總月份所以這邊就會寫死年份為2001 第二個參數是月份 如果是13就會是隔年一月
    而UTC回傳的是該時間點到midnight January 1 1970 的總毫秒數(例如:Date.UTC(2001,13,1)會回傳1012521600000)
    例如: 各半折線圖為:
  {name:"股市型投資型各半",
  data:[
    [1012521600000 , 23],
    [1014940800000 , 25]....
  ]}
 */
var imagefifty=[]; //放drawfifty計算完的數值
var imagepredict=[];
var imagecon=[];
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


  imagepredict =drawreal(num); //畫積極線 陣列 [每月數值] 從num月到現在
  imagefifty =drawfifty(num); //畫股市型投資型各半 陣列[每月數值] 從num月到現在
  imagepcon =drawcon(num); //畫保守線 陣列[每月數值] 從num月到現在

  var r ={name:'積極',data:[]} //json 
  for(var i =0;i<index1.length;i++){ //num是使用者輸入的月份距離2001有幾個月
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