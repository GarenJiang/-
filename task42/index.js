let data = [
  {
    logo: "W",
    webSite: "wangdoc",
    action: "https://wangdoc.com/",
    index: "i1",
  },
  {
    logo: "R",
    webSite: "runoob",
    action: "https://www.runoob.com/",
    index: "i2",
  },
];
if (localStorage.getItem("jyy")) {
  data = JSON.parse(localStorage.getItem("jyy"));
}
function rander() {
  for (let i = 0; i < data.length; i++) {
    $(".item:last-of-type").before(`<div class="item " xxx="${data[i].index}">
    <p class="logo">${data[i].logo}</p>
    <p class="webSite">${data[i].webSite}</p>
    <svg class="icon close " xxx="${data[i].index}" aria-hidden="true">
      <use xlink:href="#icon-guanbi"></use>
    </svg>
  </div>`);
    $(".item:nth-last-child(2)>.close").click(function (e) {
      e.stopPropagation();
      data.splice(i, 1);
      let temp = JSON.stringify(data);
      localStorage.setItem("jyy", temp);
      let xxxtemp = $(this).attr("xxx");
      $("[xxx=" + xxxtemp + "]").remove();
    });
    $(".item:nth-last-child(2)").click(function () {
      window.open(data[i].action);
    });
  }
}
rander();
// 添加
$(".item:last-of-type").click(function () {
  let input;
  let input1;
  let inputTemp = prompt("请输入网址", "https://www.baidu.com");
  //https://www.runoob.com/jsref/jsref-tolocaleuppercase.html
  if (inputTemp !== null) {
    if (inputTemp.search(/(http)/i) === -1) {
      input = `https://` + inputTemp;
    } else {
      input = inputTemp;
    }
    if (input.search(/www/i) !== -1) {
      input1 = input.search(/\./);
    } else {
      input1 = 7;
    }
    // console.log(input.search(/\..{0,1000}\./i));
    let xx;
    if (input.search(/www/i) === -1) {
      xx = input.match(/\/\/..{0,}?\./i)[0].slice(2, -1);
    } else {
      xx = input.match(/\..{0,}?\./i)[0].slice(1, -1);
    }
    if (input !== null) {
      data.push({
        logo: input.slice(input1 + 1, input1 + 2).toLocaleUpperCase(),
        webSite: xx,
        action: input,
        index: "i" + new Date().getTime(),
      });
      let temp = JSON.stringify(data);
      localStorage.setItem("jyy", temp);
      var lastname = localStorage.getItem("jyy");
      let index = data.length;
      $(".item:last-of-type").before(`<div class="item " xxx="${
        data[index - 1].index
      }">
    <p class="logo">${data[index - 1].logo}</p>
    <p class="webSite">${data[index - 1].webSite}</p>
    <svg class="icon close" xxx="${data[index - 1].index}" aria-hidden="true">
      <use xlink:href="#icon-guanbi"></use>
    </svg>
  </div>`);

      $(".item:nth-last-child(2)>.close").click(function (e) {
        e.stopPropagation();
        data.splice(-1, 1);
        let temp = JSON.stringify(data);
        localStorage.setItem("jyy", temp);
        let xxxtemp = $(this).attr("xxx");
        $("[xxx=" + xxxtemp + "]").remove();
      });

      $(".item:nth-last-child(2)").click(function () {
        window.open(data[index - 1].action);
      });
    }
  }
});
