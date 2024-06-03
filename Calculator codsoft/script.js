let btn = document.querySelectorAll("button");
      for (let i of btn) {
        i.onclick = function () {
          if (i.innerText == "=") {
            let a = document.querySelector("input").value;

            document.querySelector("input").value = eval(a);
          } else if (i.innerText == "Ac") {
            document.querySelector("input").value = " ";
          } else if (i.innerText == "c") {
            document.querySelector("input").value = slice(0, -1);
          } else {
            document.querySelector("input").value += i.innerText;
          }
        };
      }