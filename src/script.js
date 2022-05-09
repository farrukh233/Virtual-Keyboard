const xy = '';
let fCapsLock = '0';
let fShift = '0';

const { body } = document;
const container = document.createElement('div');
const header = document.createElement('h1');
header.classList.add('title');
header.innerHTML =
  'Уважаемый проверяющий, проверьте работу пожалуйста 12 числа. Мой дискорд: Farrukh23#8094';
body.append(header);
alert(
  'Уважаемый проверяющий, проверьте работу пожалуйста 12 числа. Мой дискорд: Farrukh23#8094'
);

container.classList.add('container');
body.append(container);

const keyboardWrapp = document.createElement('div');

keyboardWrapp.classList.add('keyboard_wrapp');
container.append(keyboardWrapp);

const textInput = document.createElement('textarea');

textInput.classList.add('text');

keyboardWrapp.append(textInput);

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard_keys');
keyboardWrapp.append(keyboardKeys);

const row = document.createElement('div');
row.classList.add('row');
keyboardKeys.append(row);

const keys = document.createElement('div');
keys.classList.add('keys');

for (let i = 0; i < 14; i += 1) {
  const keys = document.createElement('div');
  keys.classList.add('keys');
  if (i === 13) {
    keys.classList.add('backspace_key');
  }
  switch (i) {
    case 0:
      keys.innerHTML = '`';
      const fnBackquote = () => {
        const fCapsLock = '0';
        let fShift = '0';
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}\``;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}~`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}~`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}\``;
            }
          }
        }
      };
      keys.addEventListener('click', fnBackquote);
      break;
    case 1:
      keys.innerHTML = '1';
      const fnOne = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}1`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}!`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}!`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}1`;
            }
          }
        }
      };
      keys.addEventListener('click', fnOne);
      break;
    case 2:
      keys.innerHTML = '2';
      const fnTwo = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}2`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}@`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}@`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}2`;
            }
          }
        }
      };
      keys.addEventListener('click', fnTwo);
      break;
    case 3:
      keys.innerHTML = '3';
      const fnThree = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}3`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}#`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}#`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}3`;
            }
          }
        }
      };
      keys.addEventListener('click', fnThree);
      break;
    case 4:
      keys.innerHTML = '4';
      const fnFour = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}4`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}$`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}$`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}4`;
            }
          }
        }
      };
      keys.addEventListener('click', fnFour);
      break;
    case 5:
      keys.innerHTML = '5';
      const fnFive = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}5`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}%`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}%`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}5`;
            }
          }
        }
      };
      keys.addEventListener('click', fnFive);
      break;
    case 6:
      keys.innerHTML = '6';
      const fnSix = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}6`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}^`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}^`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}6`;
            }
          }
        }
      };
      keys.addEventListener('click', fnSix);
      break;
    case 7:
      keys.innerHTML = '7';
      const fnSeven = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}7`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}&`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}&`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}7`;
            }
          }
        }
      };
      keys.addEventListener('click', fnSeven);
      break;
    case 8:
      keys.innerHTML = '8';
      const fnEight = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}8`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}*`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}*`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}8`;
            }
          }
        }
      };
      keys.addEventListener('click', fnEight);
      break;
    case 9:
      keys.innerHTML = '9';
      const fnNine = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}9`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}(`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}(`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}9`;
            }
          }
        }
      };
      keys.addEventListener('click', fnNine);
      break;
    case 10:
      keys.innerHTML = '0';
      const fnZero = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}0`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu})`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu})`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}0`;
            }
          }
        }
      };
      keys.addEventListener('click', fnZero);
      break;
    case 11:
      keys.innerHTML = '-';
      const fnMinus = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}-`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}_`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}_`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}-`;
            }
          }
        }
      };
      keys.addEventListener('click', fnMinus);
      break;
    case 12:
      keys.innerHTML = '=';
      const fnEquals = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}=`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}+`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}+`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}=`;
            }
          }
        }
      };
      keys.addEventListener('click', fnEquals);
      break;
    case 13:
      keys.innerHTML = 'Backspace';
      break;

    default:
  }

  row.appendChild(keys);
}

const row1 = document.createElement('div');
row1.classList.add('row');
keyboardKeys.append(row1);

for (let i = 0; i < 15; i += 1) {
  const keys = document.createElement('div');
  keys.classList.add('keys');
  if (i === 0) {
    keys.classList.add('tab_key');
  }
  if (i === 15) {
    keys.classList.add('slash_key');
  }
  switch (i) {
    case 0:
      keys.innerHTML = 'Tab';
      break;
    case 1:
      keys.innerHTML = 'Q';
      const fnQ = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}q`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}Q`;
          } else if ((fCapsLock = '1')) {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}Q`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}q`;
            }
          }
        }
      };
      keys.addEventListener('click', fnQ);
      break;
    case 2:
      keys.innerHTML = 'W';
      const fnW = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);

        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}w`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}W`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}W`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}W`;
            }
          }
        }
      };
      keys.addEventListener('click', fnW);
      break;
    case 3:
      keys.innerHTML = 'E';
      const fnE = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}e`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}E`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}E`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}e`;
            }
          }
        }
      };
      keys.addEventListener('click', fnE);
      break;
    case 4:
      keys.innerHTML = 'R';
      function fnR() {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}r`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}R`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}R`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}r`;
            }
          }
        }
      }
      keys.addEventListener('click', fnR);
      break;
    case 5:
      keys.innerHTML = 'T';
      const fnT = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}t`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}T`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}T`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}t`;
            }
          }
        }
      };
      keys.addEventListener('click', fnT);
      break;
    case 6:
      keys.innerHTML = 'Y';
      const fnY = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}y`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}Y`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}Y`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}y`;
            }
          }
        }
      };
      keys.addEventListener('click', fnY);
      break;
    case 7:
      keys.innerHTML = 'U';
      const fnU = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}u`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}U`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}U`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}u`;
            }
          }
        }
      };
      keys.addEventListener('click', fnU);
      break;
    case 8:
      keys.innerHTML = 'I';
      const fnI = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}i`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}I`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}I`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}i`;
            }
          }
        }
      };
      keys.addEventListener('click', fnI);
      break;
    case 9:
      keys.innerHTML = 'O';
      const fnO = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}o`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}O`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}o`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}O`;
            }
          }
        }
      };
      keys.addEventListener('click', fnO);
      break;
    case 10:
      keys.innerHTML = 'P';
      const fnP = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}p`;
          } else if ((fShift = '1')) {
            fShift = '0';
            document.querySelector('.text').value = `${valu}P`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}P`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}p`;
            }
          }
        }
      };
      keys.addEventListener('click', fnP);
      break;
    case 11:
      keys.innerHTML = '[';
      const fnBracketLeft = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if ((fCapsLock = '0')) {
          if ((fShift = '0')) {
            document.querySelector('.text').value = `${valu}[`;
          } else if ((fShift = '1')) {
            fShift = '0';
            document.querySelector('.text').value = `${valu}{`;
          } else if ((fCapsLock = '0')) {
            if ((fShift = '0')) {
              document.querySelector('.text').value = `${valu}{`;
            } else if ((fShift = '1')) {
              fShift = '0';
              document.querySelector('.text').value = `${valu}]`;
            }
          }
        }
      };
      keys.addEventListener('click', fnBracketLeft);
      break;
    case 12:
      keys.innerHTML = ']';
      const fnBracketRight = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if ((fCapsLock = '0')) {
          if ((fShift = '0')) {
            document.querySelector('.text').value = `${valu}]`;
          } else if ((fShift = '1')) {
            fShift = '0';
            document.querySelector('.text').value = `${valu}}`;
          } else if ((fCapsLock = '1')) {
            if ((fShift = '0')) {
              document.querySelector('.text').value = `${valu}}`;
            } else if ((fShift = '1')) {
              fShift = '0';
              document.querySelector('.text').value = `${valu}]`;
            }
          }
        }
      };
      keys.addEventListener('click', fnBracketRight);
      break;
    case 13:
      keys.innerHTML = '\x2F';
      const fnSlash = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if ((fCapsLock = '0')) {
          if ((fShift = '0')) {
            document.querySelector('.text').value = `${valu}\x2F`;
          } else if ((fShift = '1')) {
            fShift = '0';
            document.querySelector('.text').value = `${valu}|`;
          } else if ((fCapsLock = '1')) {
            if ((fShift = '0')) {
              document.querySelector('.text').value = `${valu}|`;
            } else if ((fShift = '1')) {
              fShift = '0';
              document.querySelector('.text').value = `${valu}\x2F`;
            }
          }
        }
      };
      keys.addEventListener('click', fnSlash);
      break;
    case 14:
      keys.innerHTML = 'Del';
      const fnDel = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = (document.querySelector('.text').value = '');
        fCapsLock = '0';
        fShift = '0';
      };
      keys.addEventListener('click', fnDel);
      break;
    default:
  }
  row1.appendChild(keys);
}

const row2 = document.createElement('div');
row2.classList.add('row');
keyboardKeys.append(row2);

for (let i = 0; i < 13; i += 1) {
  const keys = document.createElement('div');
  keys.classList.add('keys');
  if (i === 0) {
    keys.classList.add('caps_lock_key');
  }
  if (i === 12) {
    keys.classList.add('enter_key');
  }
  row2.appendChild(keys);
  switch (i) {
    case 0:
      keys.innerHTML = 'Caps Lock ';
      const fnCapsLock = () => {
        if (fCapsLock === '0') {
          fCapsLock = '1';
        } else if (fCapsLock === '1') {
          fCapsLock = '0;';
        }
      };
      document
        .querySelector('.caps_lock_key')
        .addEventListener('click', fnCapsLock);
      break;
    case 1:
      keys.innerHTML = 'A';
      const fnA = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}a`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}A`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}A`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}a`;
            }
          }
        }
      };
      keys.addEventListener('click', fnA);
      break;
    case 2:
      keys.innerHTML = 'S';
      const fnS = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}s`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}S`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}S`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}s`;
            }
          }
        }
      };
      keys.addEventListener('click', fnS);
      break;
    case 3:
      keys.innerHTML = 'D';
      const fnD = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}d`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}D`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}D`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}d`;
            }
          }
        }
      };
      keys.addEventListener('click', fnD);
      break;
    case 4:
      keys.innerHTML = 'F';
      const fnF = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}f`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}F`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}F`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}f`;
            }
          }
        }
      };
      keys.addEventListener('click', fnF);
      break;
    case 5:
      keys.innerHTML = 'G';
      const fnG = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}g`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}G`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}G`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}g`;
            }
          }
        }
      };
      keys.addEventListener('click', fnG);
      break;
    case 6:
      keys.innerHTML = 'H';
      const fnH = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}h`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}H`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}H`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}h`;
            }
          }
        }
      };
      keys.addEventListener('click', fnH);
      break;
    case 7:
      keys.innerHTML = 'J';
      const fnJ = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}j`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}J`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}J`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}j`;
            }
          }
        }
      };
      keys.addEventListener('click', fnJ);
      break;
    case 8:
      keys.innerHTML = 'K';
      const fnK = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}k`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}K`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}K`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}k`;
            }
          }
        }
      };
      keys.addEventListener('click', fnK);
      break;
    case 9:
      keys.innerHTML = 'L';
      const fnL = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}l`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}L`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}L`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}l`;
            }
          }
        }
      };
      keys.addEventListener('click', fnL);
      break;
    case 10:
      keys.innerHTML = ';';
      const fnSemicolon = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu};`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}:`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}:`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu};`;
            }
          }
        }
      };
      keys.addEventListener('click', fnSemicolon);
      break;
    case 11:
      keys.innerHTML = "'";
      const fnQuotes = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}'`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}"`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}"`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}'`;
            }
          }
        }
      };
      keys.addEventListener('click', fnQuotes);
      break;
    case 12:
      keys.innerHTML = 'ENTER ';
      break;
    default:
  }
}

const row3 = document.createElement('div');
row3.classList.add('row');
keyboardKeys.append(row3);

for (let i = 0; i < 14; i += 1) {
  const keys = document.createElement('div');
  keys.classList.add('keys');
  if (i === 0) {
    keys.classList.add('shift_key', 'shift_left');
  }
  if (i === 12) {
    keys.classList.add('up_key');
  }
  if (i === 13) {
    keys.classList.add('shift_key', 'shift_right');
  }
  switch (i) {
    case 0:
      keys.innerHTML = 'Shift';
      const fnShiftLeft = () => {
        document.querySelector('.shift_left').classList.add('active');
        document.querySelector('.shift_left').classList.add('remove');
        document.querySelector('.shift_left').classList.remove('active');
        setTimeout(() => {
          document.querySelector('.shift_left').classList.remove('remove');
        }, 200);
        if ((fShift = '0')) {
          fShift = '1';
        } else if ((fShift = '1')) {
          fShift = '0';
        }
      };
      document;
      keys.addEventListener('click', fnShiftLeft);
      break;
    case 1:
      keys.innerHTML = 'Z';
      const fnZ = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}z`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}Z`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}Z`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}z`;
            }
          }
        }
      };
      keys.addEventListener('click', fnZ);
      break;
    case 2:
      keys.innerHTML = 'X';
      const fnX = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}x`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}X`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}X`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}x`;
            }
          }
        }
      };
      keys.addEventListener('click', fnX);
      break;
    case 3:
      keys.innerHTML = 'C';
      const fnC = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}c`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}C`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}C`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}c`;
            }
          }
        }
      };
      keys.addEventListener('click', fnC);
      break;
    case 4:
      keys.innerHTML = 'V';
      const fnV = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}v`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}V`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}V`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}v`;
            }
          }
        }
      };
      keys.addEventListener('click', fnV);
      break;
    case 5:
      keys.innerHTML = 'B';
      const fnB = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}b`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}B`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}B`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}b`;
            }
          }
        }
      };
      keys.addEventListener('click', fnB);
      break;
    case 6:
      keys.innerHTML = 'N';
      const fnN = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}n`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}N`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}N`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}n`;
            }
          }
        }
      };
      keys.addEventListener('click', fnN);
      break;
    case 7:
      keys.innerHTML = 'M';
      const fnM = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}m`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}M`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}M`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}m`;
            }
          }
        }
      };
      keys.addEventListener('click', fnM);
      break;
    case 8:
      keys.innerHTML = '<';
      const fnTriangularBracketLeft = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu},`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}<`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}<`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu},`;
            }
          }
        }
      };
      keys.addEventListener('click', fnTriangularBracketLeft);
      break;
    case 9:
      keys.innerHTML = '>';
      const fnTriangularBracketRight = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}.`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}>`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}>`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}.`;
            }
          }
        }
      };
      keys.addEventListener('click', fnTriangularBracketRight);
      break;
    case 10:
      keys.innerHTML = '/';
      const fnSlashRight = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}/`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}?`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}?`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}/`;
            }
          }
        }
      };
      keys.addEventListener('click', fnSlashRight);
      break;
    case 11:
      keys.innerHTML = '?';
      const fnQuestion = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}?`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}/`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}/`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}?`;
            }
          }
        }
      };
      keys.addEventListener('click', fnQuestion);
      break;
    case 12:
      keys.innerHTML = '↑ ';
      const fnRowUp = () => {
        keys.classList.add('active');
        keys.classList.add('remove');
        keys.classList.remove('active');
        setTimeout(() => {
          keys.classList.remove('remove');
        }, 200);
        const valu = document.querySelector('.text').value;
        if (fCapsLock === '0') {
          if (fShift === '0') {
            document.querySelector('.text').value = `${valu}↑`;
          } else if (fShift === '1') {
            fShift = '0';
            document.querySelector('.text').value = `${valu}↑`;
          } else if (fCapsLock === '1') {
            if (fShift === '0') {
              document.querySelector('.text').value = `${valu}↑`;
            } else if (fShift === '1') {
              fShift = '0';
              document.querySelector('.text').value = `${valu}↑`;
            }
          }
        }
      };
      keys.addEventListener('click', fnRowUp);
      break;
    case 13:
      keys.innerHTML = 'Shift';
      const fnShift = () => {
        document.querySelector('.shift_right').classList.add('active');
        document.querySelector('.shift_right').classList.add('remove');
        document.querySelector('.shift_right').classList.remove('active');
        setTimeout(() => {
          document.querySelector('.shift_right').classList.remove('remove');
        }, 200);
        if ((fShift = '0')) {
          fShift = '1';
        } else if ((fShift = '1')) {
          fShift = '0';
        }
      };
      keys.addEventListener('click', fnShift);
      break;
    default:
  }
  row3.appendChild(keys);
}

const row4 = document.createElement('div');
row4.classList.add('row');
keyboardKeys.append(row4);

for (let i = 0; i < 9; i += 1) {
  const keys = document.createElement('div');
  keys.classList.add('keys');
  if (i === 0) {
    keys.classList.add('ctrl_key', 'ctrl_left');
  }
  if (i === 1) {
    keys.classList.add('win_key');
  }
  if (i === 1) {
    keys.classList.add('alt_key', 'alt_left');
  }
  if (i === 3) {
    keys.classList.add('space_key');
  }
  if (i === 4) {
    keys.classList.add('alt_key', 'alt_right');
  }
  if (i === 5) {
    keys.classList.add('ctrl_key', 'ctrl_right');
  }
  switch (i) {
    case 0:
      keys.innerHTML = 'Ctrl';
      break;
    case 1:
      keys.innerHTML = 'Win';
      break;
    case 2:
      keys.innerHTML = 'Alt';
      break;
    case 3:
      keys.innerHTML = 'Space';
      break;
    case 4:
      keys.innerHTML = 'Alt';
      break;
    case 5:
      keys.innerHTML = 'Ctrl';
      break;
    case 6:
      keys.innerHTML = '←';
      break;
    case 7:
      keys.innerHTML = '↓';
      break;
    case 8:
      keys.innerHTML = '→';
      break;
    default:
  }
  row4.appendChild(keys);
}
const keyss = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const ctrlLeft = document.querySelector('.ctrl_left');
const ctrlRight = document.querySelector('.ctrl_right');
const capsLock = document.querySelector('.caps_lock_key');
const keyBoardWrapper = document.querySelector('.keyboard_wrapper');
const textInputt = document.querySelector('.textarea');
const tab = document.querySelector('.tab_key');

for (let i = 0; i < keyss.length; i += 1) {
  keyss[i].setAttribute('keyname', keyss[i].innerText);
  keyss[i].setAttribute(
    'lowerCaseName',
    keyss[i].innerText.toLocaleLowerCase()
  );
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keyss.length; i += 1) {
    if (
      e.key === keyss[i].getAttribute('keyname') ||
      e.key === keyss[i].getAttribute('lowerCaseName')
    ) {
      keyss[i].classList.add('active');
    }
  }
  if (e.code === 'Space') {
    spaceKey.classList.add('active');
  }
  if (e.code === 'ShiftLeft') {
    shiftLeft.classList.add('active');
  }
  if (e.code === 'ShiftRight') {
    shiftRight.classList.add('active');
  }
  if (e.code === 'CapsLock') {
    capsLock.classList.toggle('active');
  }
  if (e.code === 'Tab') {
    tab.classList.add('active');
    document.querySelector('.text').value = `${textInput} `;
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keyss.length; i += 1) {
    if (
      e.key === keyss[i].getAttribute('keyname') ||
      e.key === keyss[i].getAttribute('lowerCaseName')
    ) {
      keyss[i].classList.remove('active');
      keyss[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
    }
    if (e.code === 'Tab') {
      tab.classList.add('active');
      tab.classList.add('remove');
    }
    setTimeout(() => {
      keyss[i].classList.remove('remove');
    }, 200);
  }
});

// BackSpace
document.querySelector('.backspace_key').addEventListener('click', fnBackSpace);

function fnBackSpace() {
  const valu = document.querySelector('.text').value;
  const x = document.querySelector('.text').value.length;
  const y = 1;
  const z = x - y;

  document.querySelector('.text').value = valu.slice(0, z);
  document.querySelector('.backspace_key').classList.add('active');
  document.querySelector('.backspace_key').classList.add('remove');
  document.querySelector('.backspace_key').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.backspace_key').classList.remove('remove');
  }, 200);
}

// Del

// Shift

// Enter

function fnEnter() {
  const valu = document.querySelector('.text').value;
  if (valu === '') {
    alert('Not inserted: Empty Value');
  } else {
    alert(`Data Inserted:${valu}`);
  }
}

// Tab

function fnTab() {
  setTimeout(() => {
    keys.classList.remove('remove');
  }, 200);
  const valu = document.querySelector('.text').value;
  document.querySelector('.text').value = `${valu} `;
}
tab.addEventListener('click', fnTab);
/*
document.querySelectorAll('.keys').forEach((el) =>
  el.addEventListener('click', () => {
    console.log('F');
  })
);
*/
