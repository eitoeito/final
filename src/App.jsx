import { useState } from "react";

export default function App() {
  const [boo1,setBoo1]=useState(true);
  const [boo2,setBoo2]=useState(false);
  const [boo3,setBoo3]=useState(false);
  const [boo4,setBoo4]=useState(false);
  const [BMI,setBmi]=useState("");
  const [wei2,setWei2]=useState("");
  const [hei2,setHei2]=useState("");

  function change1(){
    setBoo1(true);
    setBoo2(false);
    setBoo3(false);
  }

  function change2(){
    setBoo1(false);
    setBoo2(true);
    setBoo3(false);

    var c=document.getElementById("ex");
    var d=document.creteElement("p");
    var bd=localStorage.getItem('playdata');
    d.textContent=bd;
    if(bd != null){
      c.appendChild(d);
    }
  }

  function change3(){
    setBoo1(false);
    setBoo2(false);
    setBoo3(true);
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
      var pa1=document.getElementById("ex");
      ad1.textContent=su1;
      ad2.textContent=su2;
      ad3.textContent="分";
      ad4.textContent=su3;
      ad5.textContent="　　";
      ad6.textContent="　　";
      ad7.textContent=" ";
      ad8.textContent="";
    
      pa1.appendChild(ad1);
      pa1.appendChild(ad5);
      pa1.appendChild(ad2);
      pa1.appendChild(ad6);
      pa1.appendChild(ad4);
      pa1.appendChild(ad7);
      pa1.appendChild(ad3);
      pa1.appendChild(ad8);
    }

    var data=document.getElementById("ex");
    localStorage.setItem('playdata',data);

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
      sp1.textContent=month;
      sp2.textContent="　　";
      sp3.textContent=weight;
      sp4.textContent="kg";
      sp5.textContent="";
    
      mo.appendChild(sp1);
      mo.appendChild(sp2);
      mo.appendChild(sp3);
      mo.appendChild(sp4);
      mo.appendChild(sp5);
    }
    
    document.getElementById("m").value="";
    document.getElementById("w").value="";
  }

  function calcBmi(){
    var heights=document.getElementById("hei").value;
    var weights=document.getElementById("wei").value;
    if(heights!="" && weights!=""){
      setBoo4(true);
    }
    setBmi(Math.round(weights/((heights/100)*(heights/100))));
    setWei2(weights);
    setHei2(heights);
    document.getElementById("hei").value="";
    document.getElementById("wei").value="";
  }

  function reset(){
    setBoo4(false);
  }

  function del1(){
    document.getElementById("ex").textContent="";
    localStorage.removeItem('playdata');
  }

  function del2(){
    document.getElementById("addd").textContent="";
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

      {boo1 && (
        <p>
          <p class="p1">本サイトでは運動や体重に関する情報を記録しておくことができます。</p>
          <p class="pu1">＊　数字はすべて半角で入力してください</p>
          <p class="pu2">＊　時間は~分で入力してください (1時間 → 60分)</p>
          <p class="p2">以下から現在のBMIを確認することができます。</p>
          <p class="pu3">＊　BMIの結果は四捨五入されて整数で表示されます</p>
          <input type="text" id="hei" placeholder="身長(cm)" />
          <input type="text" id="wei" placeholder="体重(kg)" />
          <button class="b4" type="button" onClick={calcBmi}>計算</button>
          {boo4 && (
            <p>
                <p>あなたのBMIは{BMI}です ({hei2}cm {wei2}kg) </p>
                <button class="b1" type="button" onClick={reset}>削除</button>
            </p>
          )}
        </p>
      )}

      {boo2 && (
        <p>
          <h1>運動時間</h1>
          <p class="p3">本ページでは運動に関する情報を記録します。必要な情報(日付・種目・時間)を入力したら追加ボタンで記録してください。</p>
          <input type="text" id="s1" placeholder="例：1/1" />
          <input type="text" id="s2" placeholder="例：ランニング" />
          <input type="text" id="s3" placeholder="例：30" />
          <button class="b2" type="button" onClick={printData1}>追加</button>
          <p id="ex"></p>
          <button class="b6" type="button" onClick={del1}>削除</button>
        </p>
      )}

      {boo3 && (
        <p>
          <h2>体重管理</h2>
          <p class="p4">本ページでは、体重に関する情報を記録します。必要な情報(日付・体重)を入力したら追加ボタンで記録してください。</p>
          <input type="text" id="m" placeholder="例：1/1" />
          <input type="text" id="w" placeholder="例：65" />
          <button class="b3" type="button" onClick={printData2}>追加</button>
          <p id="addd"></p>
          <button class="b5" type="button" onClick={del2}>削除</button>
        </p>
      )}
      </>
    );
  }