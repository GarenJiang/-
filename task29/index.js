let div = document.querySelector("p");
let style = document.querySelector("style");
let string = `/*大家好,我是江洋勇.
今天我给大家展示一下我的前端功底.
给大家表演一个大变阴阳双鱼图.
天地之初,一片混沌.
盘古开天.
地为方
*/
.yinyang{
    width: 300px;
    height: 300px;
}
/**/
/*
天为圆
*/
.yinyang {
   
    border-radius: 50%;
    
  }
  /*
  清气为阳,浊气为阴.
  */
  .yinyang{
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 50%,
        rgba(255, 255, 255, 1) 50%
      );
  }

  /*阴极生阳*/
  .yinyang::after {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 20%,
      rgba(0, 0, 0, 1) 20%
    );
  }
  /*阳极生阴*/
  .yinyang::before {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 20%,
      rgba(255, 255, 255, 1) 20%
    );
  }
`;
let stringP = string;
let n = 1;
let p = 1;
let x = setInterval(() => {
  if (p >= stringP.length) {
    clearInterval(x);
  }
  if (stringP[p] === string[12]) {
    div.innerHTML = stringP.slice(0, p) + "<br>";
    stringP = stringP.slice(0, p) + "<br>" + stringP.slice(p);
    p = p + 5;
    n++;
  } else {
    div.innerHTML = stringP.slice(0, p);
    console.log(p);
    style.innerHTML = string.slice(0, n);
    n++;
    p++;
  }
  window.scrollTo(0, 9999);
  div.scrollTo(0, 9999);
}, 30);
