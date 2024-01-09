import { useState } from "react";

export default function App() {
  const [boo1,setBoo1]=useState(false);
  const [boo2,setBoo2]=useState(false);
  const [boo3,setBoo3]=useState(false);
  const [boo4,setBoo4]=useState(false);
  const [boo5,setBoo5]=useState(false);
  const [boo6,setBoo6]=useState(false);
  const [boo7,setBoo7]=useState(false);
  const [BMI,setBmi]=useState("");
  const [wei2,setWei2]=useState("");
  const [hei2,setHei2]=useState("");

  function change1(){
    setBoo1(true);
    setBoo2(false);
    setBoo3(false);
    setBoo5(true);
    setBoo6(true);
    setBoo7(false);
  }

  function change2(){
    setBoo1(false);
    setBoo2(true);
    setBoo3(false);
    setBoo5(true);
    setBoo6(false);
    setBoo7(false);
  }

  function change3(){
    setBoo1(false);
    setBoo2(false);
    setBoo3(true);
    setBoo5(false);
    setBoo6(true);
    setBoo7(true);
  }

  function printData(){
    var month=document.getElementById("m").value;
    var weight=document.getElementById("w").value;
    if(month!="" && weight!=""){
      var mo=document.getElementById("addd");
      var sp1=document.createElement("span");
      var sp2=document.createElement("span");
      var sp3=document.createElement("span");
      var sp4=document.createElement("p");
      sp1.textContent=month;
      sp2.textContent="　　";
      sp3.textContent=weight;
      sp4.textContent="";
    
      mo.appendChild(sp1);
      mo.appendChild(sp2);
      mo.appendChild(sp3);
      mo.appendChild(sp4);
    }
    
    document.getElementById("m").value="";
    document.getElementById("w").value="";
  }

  function printData2(){
    var su1=document.getElementById("s1").value;
    var su2=document.getElementById("s2").value;
    if(s1!="" && su2!=""){
      var ad1=document.createElement("span");
      var ad2=document.createElement("span");
      var ad3=document.createElement("span");
      var ad4=document.createElement("p");
      var ad5=document.createElement("span");
      var pa=document.getElementById("ex");
      ad1.textContent=su1;
      ad2.textContent=su2;
      ad3.textContent="分";
      ad4.textContent="";
      ad5.textContent="　　";
    
      pa.appendChild(ad1);
      pa.appendChild(ad5);
      pa.appendChild(ad2);
      pa.appendChild(ad3);
      pa.appendChild(ad4);
    }
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
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

    return (
      <>
      <nav>
        <ul>
          <li><a href="#" onClick={change1}>Home</a></li>
          <li><a href="#" onClick={change2}>運動</a></li>
          <li><a href="#" onClick={change3}>体重</a></li>
        </ul>
      </nav>

      {boo2 && (
        <p>
          <h1>運動時間</h1>
          <p>時間は~分で入力</p>
          <input type="text" id="s1" placeholder="例：1/1" />
          <input type="text" id="s2" placeholder="例：ランニング 30" />
          <button type="button" onClick={printData2}>追加</button>
        </p>
      )}

      {boo5 && (
        <p id="ex"></p>
      )}

      {boo3 && (
        <p>
          <h2>体重管理</h2>
          <input type="text" id="m" placeholder="月/日" />
          <input type="text" id="w" placeholder="体重" />
          <button type="button" onClick={printData}>追加</button>
        </p>
      )}

      {boo6&& (
        <p id="addd"></p>
      )}

      {boo7 && (
        <p>
          <h3>BMI計算</h3>
          <input type="text" id="hei" placeholder="身長(cm)" />
          <input type="text" id="wei" placeholder="体重(kg)" />
          <button type="button" onClick={calcBmi}>計算</button>
        
          {boo4 && (
            <p>
                あなたのBMIは{BMI}です ({hei2}cm {wei2}kg) (BMIは四捨五入しています)
                <button class="b1" type="button" onClick={reset}>削除</button>
            </p>
          )}
        </p>
      )}
      </>
      

    );
  }