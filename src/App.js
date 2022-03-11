import "./App.css";

function App() {
  // handleButton -> highlight
  const handleClick = (e) => {
    const get = document.querySelectorAll(".para");

    for (let i = 0; i < get.length; i++) {
      let num = get[i].textContent;
      let patt = /(\d{1,4})/g;
      let result = num.match(patt);

      if (result.length === 1) {
        get[i].innerHTML = get[i].textContent.replace(
          result,

          `<div class="highlight" >${result}</div>`
        );
      }
      const high = document.querySelectorAll(".highlight");

      if (high) {
        high[i].addEventListener("contextmenu", function (e) {
          e.preventDefault();
          high[i].innerHTML = `<div class="highlight tooltip" >${result.join(
            ""
          )}<span class="tooltiptext" >Do you want to Format it 
        <hr>
        <span id="click">yes</span>
        <span id="clickno">- no</span>
        </span>
        </div>
        `;

          // while clicking No
          const idNo = document.querySelector("#clickno");
          idNo.addEventListener("click", function (e) {
            const highlight = get[i].querySelector(".highlight");
            let num = get[i].textContent;
            let patt = /\d{4}/g;
            let result = num.match(patt);

            get[i].innerHTML = num.replace(highlight.textContent, result);
          });

          // while clicking yes
          const id = document.querySelector("#click");
          id.addEventListener("click", function (e) {
            let separate = e.path[3].innerText;
            let patt = /\d{1,4}/g;
            let result = separate.match(patt);

            const tooltip = document.querySelector(".tooltip");
            let a = new Intl.NumberFormat("en-IN", {
              // maximumSignificantDigits: 3,
            }).format(result);
            tooltip.innerHTML = a;

            let num = get[i].textContent;

            get[i].innerHTML = num.replace(tooltip.textContent, a);
          });
        });
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
      >
        Number Format
      </button>
      <div className="para">
        Aute ea sunt Rs1234 est nisi consequat cupidatat deserunt duis quis do
        ex esse. Duis esse tempor eu est. Cupidatat velit pariatur qui ipsum
        deserunt ad id commodo cupidatat enim laboris do.
      </div>
      <div className="para">
        Ex tempor dolore culpa aute sint proident ex adipisicing. Aliquip et
        ullamco reprehenderit Rs.3423 enim proident cupidatat anim non. Laboris
        eu incididunt id do dolor.
      </div>
      <div className="para">
        Ex tempor dolore Rs.3335545 culpa aute sint proident ex adipisicing.
        Aliquip et ullamco reprehenderit enim proident cupidatat anim non.
        Laboris eu incididunt id do dolor.
      </div>
    </div>
  );
}

export default App;
