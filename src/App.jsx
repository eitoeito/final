import { useState } from "react";

export default function App() {
  const [boo1,setBoo1]=useState(true);
  const [boo2,setBoo2]=useState(false);
  const [boo3,setBoo3]=useState(false);
  const [boo4,setBoo4]=useState(false);
  const [BMI,setBmi]=useState("");
  const [wei2,setWei2]=useState("");
  const [hei2,setHei2]=useState("");
  const [swei,setswei]=useState("");
  const [nwei,setnwei]=useState("");
  
  function change1(){
    setBoo1(true);
    setBoo3(false);
    setBoo4(false);
  }

  function change2(){
    setBoo1(false);
    setBoo3(true);
    setBoo4(false);
  }

  function change3(){
    setBoo1(false);
    setBoo3(false);
    setBoo4(true);
  }

  function change4(){
    setBoo1(false);
    setBoo3(false);
    setBoo4(false);
  }

  function printData1(){
    var su1=document.getElementById("s1").value;
    var su2=document.getElementById("s2").value;
    var su3=document.getElementById("s3").value;
    
    if(s1!="" && su2!="" && su3!=""){
      var ad1=document.createElement("span");
      var ad2=document.createElement("span");
      var ad3=document.createElement("span");
      var ad4=document.createElement("span");
      var ad5=document.createElement("span");
      var ad6=document.createElement("span");
      var ad7=document.createElement("span");
      var ad8=document.createElement("p");
      var ad9=document.createElement("p");
      var pa1=document.getElementById("ex");
      ad1.textContent=su1;
      ad2.textContent=su2;
      ad3.textContent="分";
      ad4.textContent=su3;
      ad5.textContent="　　";
      ad6.textContent="　　";
      ad7.textContent=" ";
      ad8.textContent="\n";
      ad9.textContent="";
    
      if(pa1.textContent != ""){
        pa1.appendChild(ad9);
      }
      pa1.appendChild(ad1);
      pa1.appendChild(ad5);
      pa1.appendChild(ad2);
      pa1.appendChild(ad6);
      pa1.appendChild(ad4);
      pa1.appendChild(ad7);
      pa1.appendChild(ad3);
      pa1.appendChild(ad8);
    }


    var d1=document.getElementById("ex").textContent;
    window.localStorage.setItem("data1",d1);

    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
  }

  function printData2(){
    var month=document.getElementById("m").value;
    var weight=document.getElementById("w").value;
    setnwei(weight);
    if(month!="" && weight!=""){
      var mo=document.getElementById("addd");
      var sp1=document.createElement("span");
      var sp2=document.createElement("span");
      var sp3=document.createElement("span");
      var sp4=document.createElement("span");
      var sp5=document.createElement("p");
      var sp6=document.createElement("p");

      sp1.textContent=month;
      sp2.textContent="　　";
      sp3.textContent=weight;
      sp4.textContent="kg";
      sp5.textContent="";
      sp6.textContent="";
    
      if(mo.textContent != ""){
        mo.appendChild(sp6);
      }
      mo.appendChild(sp1);
      mo.appendChild(sp2);
      mo.appendChild(sp3);
      mo.appendChild(sp4);
      mo.appendChild(sp5);
    }
    
    var d2=document.getElementById("addd").textContent;
    window.localStorage.setItem("data2",d2);
    window.localStorage.setItem("data4",weight);

    document.getElementById("m").value="";
    document.getElementById("w").value="";
  }


  function fg(){
    var dt=window.localStorage.getItem("data1");
    var dt1=document.getElementById("ex");
    dt1.textContent=dt;

    var dt2=window.localStorage.getItem("data2");
    var dt3=document.getElementById("addd");
    dt3.textContent=dt2;

    var dt4=window.localStorage.getItem("data3");
    setswei(dt4);

    var dt5=window.localStorage.getItem("data4");
    setnwei(dt5);
  }

  function calcBmi(){
    var heights=document.getElementById("hei").value;
    var weights=document.getElementById("wei").value;
    if(heights!="" && weights!=""){
      setBoo2(true);
    }
    setBmi(Math.round(weights/((heights/100)*(heights/100))));
    setWei2(weights);
    setHei2(heights);
    document.getElementById("hei").value="";
    document.getElementById("wei").value="";

  }

  function set(){
    var sd=document.getElementById("mok").value;
    setswei(sd);
    document.getElementById("mok").value="";
    window.localStorage.setItem("data3",sd);
  }

  function reset(){
    setBoo2(false);
  }

  function reset2(){
    var a=document.getElementById("ex").textContent;
    var b=document.getElementById("addd").textContent;
    if(a!=""){
      document.getElementById("ex").textContent="";
    }
    if(b!=""){
      document.getElementById("addd").textContent="";
    }
    setBoo2(false);
    setswei("");
    setnwei("");
    window.localStorage.clear();
  }

  function del1(){
    var n1=document.getElementById("ex").textContent;
    if(n1 != ""){
      document.getElementById("ex").textContent=""; 
    }
    window.localStorage.removeItem("data1");
  }

  function del2(){
    var n2=document.getElementById("addd").textContent;
    if (n2 != ""){
      document.getElementById("addd").textContent="";  
    }
    window.localStorage.removeItem("data2");
    setnwei("");
  } 

    return (
      <>
      <nav>
        <ul>
          <li><a href="#" onClick={change1}>Home</a></li>
          <li><a href="#" onClick={change4}>記録</a></li>
          <li><a href="#" onClick={change2}>運動</a></li>
          <li><a href="#" onClick={change3}>体重</a></li>
        </ul>
      </nav>

      <button className="b7" type="button" onClick={fg}>復元</button>
      <button className="b9" type="button" onClick={reset2} >リセット</button>
      

      {boo1 && (
        <p>
          <span className="p1">本サイトでは運動や体重に関する情報を記録しておくことができます。</span><br></br>
          ＊　数字はすべて半角で入力してください<br></br>
          ＊　時間は~分で入力してください (1時間 → 60分)<br></br><br></br>
      
          <span className="p2">目標体重を設定します</span><br></br>
          <span>目標体重：{swei}kg　　現在の体重：{nwei}kg</span><br></br>
          <input type="text" id="mok" placeholder="目標体重" />
          <button className="b8" type="button" onClick={set}>設定</button><br></br><br></br>

          <span className="p3">現在のBMIを計算することができます。</span><br></br>
          ＊　BMIの結果は四捨五入されて整数で表示されます (24.22... → 24)<br></br>
          <input type="text" id="hei" placeholder="身長(cm)" />
          <input type="text" id="wei" placeholder="体重(kg)" />
          <button className="b4" type="button" onClick={calcBmi}>計算</button>
          {boo2 && (
            <span>
              <br></br><span id="rei">あなたのBMIは{BMI}です ({hei2}cm {wei2}kg) </span>
              <button className="b1" type="button" onClick={reset}>削除</button>
            </span>
          )}
        </p>
      )}

      

      {boo3 && (  
        <p>
          <span className="p4">運動時間</span><br></br>
          <span className="p5">運動に関する情報を記録・削除します。必要な情報(日付・種目・時間)を入力したら追加ボタンで記録してください。</span><br></br>
          <input type="text" id="s1" placeholder="例：1/1" />
          <input type="text" id="s2" placeholder="例：ランニング" />
          <input type="text" id="s3" placeholder="例：30" />
          <button className="b2" type="button" onClick={printData1}>追加</button>
          <button className="b6" type="button" onClick={del1}>削除</button>
        </p>
      )}

      

      {boo4 && (
        <p>
          <span className="p6">体重管理</span><br></br>
          <span className="p7">体重に関する情報を記録・削除します。必要な情報(日付・体重)を入力したら追加ボタンで記録してください。</span><br></br>
          <input type="text" id="m" placeholder="例：1/1" />
          <input type="text" id="w" placeholder="例：65" />
          <button className="b3" type="button" onClick={printData2}>追加</button>
          <button className="b5" type="button" onClick={del2}>削除</button>
        </p>
      )}

      <span className="p8">今までの記録</span>        

      <div className="m">
        <div className="m1">
          <p className="p9">運動時間</p>
          <p id="ex"></p>
        </div>
        <div className="m2">
          <p className="p10">体重</p>
          <p id="addd"></p>
        </div>
      </div>
      </>
    );
  }