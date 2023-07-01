var mycanvas=document.getElementById('mycanvas');
var cxt=mycanvas.getContext('2d');//canvas getContext 渲染環境
var validate="";

var sColor=["#B22222","#F9F900","#82D900","#FFAF60"];   //干擾點顏色
var fColor=["#000079","#006030","#820041","#4B0091"];   //文字顏色
var indexColor=""; //顏色組序號
var img = new Image(); 
img.src ="";

/*生成隨機顏色組合序號*/
function randColor(){
    indexColor="";
    indexColor=Math.floor(Math.random()*sColor.length); //亂數取得 0~顏色陣列長度
    return  indexColor;
}

/*生成6位隨機數*/
function rand(){
        validate="";
        // 大小寫英文 數字 排除 I l o O 0  ,並重複數字 增加出現機率
        var str="123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
        var arr=str.split("");
        var ranNum;
        for(var i=0;i<6;i++){
            ranNum=Math.floor(Math.random()*66);   //隨機數在[0,65]之間
            validate+=arr[ranNum];
        }
        //alert("rand() "+validate);
        //alert("rand() "+typeof(validate));
        return validate;
}

/*干擾線的隨機x坐標值*/
function lineX(){
        var ranLineX=Math.floor(Math.random()*150);
        return ranLineX;
    }

/*干擾線的隨機y坐標值*/
function lineY(){
        var ranLineY=Math.floor(Math.random()*40);
        return ranLineY;
    }

/*更換內容*/
function clickChange(){
  //重設canvas內容
  mycanvas.width  = mycanvas.width;
  mycanvas.height = mycanvas.height;   

  //var i=randColor(); //執行randColor()取得顏色組序號
  //alert(i);
  
  //選取底圖範圍
  cxt.drawImage(img,lineX(),lineY(),150,40,0,0,150,40);
    //cxt.beginPath(); 
    cxt.fillStyle=fColor[randColor()];//隨機文字顏色
    cxt.font='bold 25px Verdana';
    cxt.fillText(rand(),10,30);   //把rand()生成的隨機數文本填充到canvas中  
    //cxt.closePath();
    
  //生成干擾線4條
  for(var j=0; j<4; j++){
     //產生一個新路徑，產生後再使用繪圖指令來設定路徑
    //若省略beginPath，則每點擊一次驗證碼會累積干擾線的條數
    cxt.beginPath(); 
    cxt.strokeStyle=sColor[randColor()];
    cxt.moveTo(0,lineY());//起始點座標
    cxt.lineTo(150,lineY());//從起始點畫一條直線到指定的(x, y)座標點
    cxt.lineWidth=(Math.floor(Math.random()*(20-10+1))+10)/10; //亂數 取得介於1~2之間的值
    cxt.stroke();
    cxt.closePath();
    }
    function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //生成干擾點
    for (var z = 0; z < 100; z++) {
    cxt.beginPath();
      // 設置點的位置，半徑，形状
    cxt.arc(getRandom(0, mycanvas.width), getRandom(0, mycanvas.height), 1, 0, 2 * Math.PI);
    cxt.closePath();
      // 設置點的顏色
    cxt.fillStyle = "rgba(47,79,79,0.5)";
      // 畫出干擾點
    cxt.fill();
  }
 }

/*點擊驗證碼更換*/
mycanvas.onclick=function(e){
        e.preventDefault();   //阻止滑鼠點擊發生預設的行為
        clickChange();
}

/*輸入驗證碼與核對*/
var myform=document.getElementById('myform');
myform.addEventListener("submit",function(e){
    var vad = myform.vad.value;
    //alert("myform "+vad.toUpperCase());
    //alert("myform "+validate.toUpperCase());
    //將字串利用toUpperCase()將小寫英文轉成大寫英文 進行比較
    if(vad.toUpperCase()===validate.toUpperCase()){
      alert("通過");
      myform.vad.value="";
      clickChange();
    }
    else{
      alert("請再次確認驗證碼")
      myform.vad.value="請重新輸入驗證碼";
    }
    e.preventDefault();
    
});

/*輸入文字框清空*/ //改用placeholder
/*var myvad=document.getElementById('myvad');
myvad.addEventListener("focus",function(e){
    myform.vad.value="";
});*/
// img.onload = function() {
// clickChange();}
clickChange();