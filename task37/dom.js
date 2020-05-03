window.dom = {};
dom.each = (node, fn) => {
  let a = [];
  function x(y, arr) {
    for (let i = 0; i < y.children.length; i++) {
      let e = [];
      e.push(y.children[i]);
      arr.push(e);
      if (y.children[i].children.length === 0) {
      } else {
        arr[i][1] = [];
        x(y.children[i], arr[i][1]);
      }
    }
  }
  x(node, a);

  fn(a.flat(Infinity));
};
dom.find = (str) => {
  return document.querySelectorAll(str);
};
dom.style = (ele, att, value) => {
  ele.style[att] = value;
};
