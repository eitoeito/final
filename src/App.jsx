import { useState } from "react";

export default function App() {
  const [boo1,setBoo1]=useState(false);
  const [boo2,setBoo2]=useState(false);
  const [boo3,setBoo3]=useState(false);
  const [BMI,setBmi]=useState("");
  const [wei2,setWei2]=useState("");
  const [hei2,setHei2]=useState("");

  function change1(){
    setBoo1(false);
    setBoo2(false);
  }

  function change2(){
    setBoo1(true);
    setBoo2(false);
  }

  function change3(){
    setBoo1(false);
    setBoo2(true);
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
    window.localStorage.setItem("data",d1);

    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
  }

  function printData2(){
    var month=document.getElementById("m").value;
    var weight=document.getElementById("w").value;
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

    document.getElementById("m").value="";
    document.getElementById("w").value="";
  }


  function fg(){
    var dt=window.localStorage.getItem("data");
    var dt1=document.getElementById("ex");
    dt1.textContent=dt;

    var dt2=window.localStorage.getItem("data2");
    var dt3=document.getElementById("addd");
    dt3.textContent=dt2;
  }

  function calcBmi(){
    var heights=document.getElementById("hei").value;
    var weights=document.getElementById("wei").value;
    if(heights!="" && weights!=""){
      setBoo3(true);
    }
    setBmi(Math.round(weights/((heights/100)*(heights/100))));
    setWei2(weights);
    setHei2(heights);
    document.getElementById("hei").value="";
    document.getElementById("wei").value="";

  }

  function reset(){
    setBoo3(false);
  }

  function del1(){
    document.getElementById("ex").textContent="";
    window.localStorage.removeItem("data");
  }

  function del2(){
    document.getElementById("addd").textContent="";
    window.localStorage.removeItem("data2");
  } 

    return (
      <>
      <nav>
        <ul>
          <li><a href="#" onClick={change1}>Home</a></li>
          <li><a href="#" onClick={change2}>運動</a></li>
          <li><a href="#" onClick={change3}>体重</a></li>
        </ul>
      </nav>

      <p>
        <span className="p1">本サイトでは運動や体重に関する情報を記録しておくことができます。</span>
       <br></br>
        ＊　数字はすべて半角で入力してください<br></br>
        ＊　時間は~分で入力してください (1時間 → 60分)
      </p>

      <p>
        <span className="p2">以下から現在のBMIを確認することができます。</span><br></br>
        ＊　BMIの結果は四捨五入されて整数で表示されます (24.22... → 24)<br></br>
        <input type="text" id="hei" placeholder="身長(cm)" />
        <input type="text" id="wei" placeholder="体重(kg)" />
        <button className="b4" type="button" onClick={calcBmi}>計算</button>
        {boo3 && (
          <span>
            <br></br><span id="rei">あなたのBMIは{BMI}です ({hei2}cm {wei2}kg) </span>
            <button className="b1" type="button" onClick={reset}>削除</button>
          </span>
        )}
      </p>

      

      {boo1 && (  
        <p>
          <h1>運動時間</h1>
          <span className="p3">運動に関する情報を記録・削除します。必要な情報(日付・種目・時間)を入力したら追加ボタンで記録してください。</span><br></br>
          <input type="text" id="s1" placeholder="例：1/1" />
          <input type="text" id="s2" placeholder="例：ランニング" />
          <input type="text" id="s3" placeholder="例：30" />
          <button className="b2" type="button" onClick={printData1}>追加</button>
          <button className="b6" type="button" onClick={del1}>削除</button>
        </p>
      )}

      

      {boo2 && (
        <p>
          <h2>体重管理</h2>
          <span className="p4">体重に関する情報を記録・削除します。必要な情報(日付・体重)を入力したら追加ボタンで記録してください。</span><br></br>
          <input type="text" id="m" placeholder="例：1/1" />
          <input type="text" id="w" placeholder="例：65" />
          <button className="b3" type="button" onClick={printData2}>追加</button>
          <button className="b5" type="button" onClick={del2}>削除</button>
        </p>
      )}

      <span className="p5">今までの記録</span>  
      <button className="b7" type="button" onClick={fg}>復元</button>

      <div className="m">
        <div className="m1">
          <p className="p6">運動時間</p>
          <p id="ex"></p>
        </div>
        <div className="m2">
          <p className="p7">体重</p>
          <p id="addd"></p>
        </div>
      </div>
      
      </>
    );
  }