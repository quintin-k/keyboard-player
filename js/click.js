const numMap = {
    home: 'num7',
    end: 'num1',
    pageup: 'num9',
    pagedown: 'num3',
    arrowup: 'num8',
    arrowdown: 'num2',
    arrowleft: 'num4',
    arrowright: 'num6',
    clear: 'num5',
    insert: 'num0',
    delete: 'num.',
  };
  const lrMap = ['l', 'r'];
  window.addEventListener('keydown', onKeyDownHandle);
  window.addEventListener('keyup', onKeyUpHandle);
  function onKeyDownHandle(e) {
    e.preventDefault();
    console.log(e.key);
    const keyName = e.key.toLowerCase();
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '/', '-', 'enter'].indexOf(keyName) !== -1) {
      if (e.location === 3) {
        const key = document.getElementById("num" + keyName);
        key.style.background = '#ffd666';
        return;
      }
    }
    const key = document.getElementById(keyName);
    key.style.background = '#ffd666';
  }
  function onKeyUpHandle(e) {
    e.preventDefault();
    console.log(e.key);
    const keyName = e.key.toLowerCase();
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '/', '-', 'enter'].indexOf(keyName) !== -1) {
      if (e.location === 3) {
        const key = document.getElementById("num" + keyName);
        key.style.background = 'initial';
        return;
      }
    }
    const key = document.getElementById(keyName);
    key.style.background = 'initial';
  }