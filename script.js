// CPL FUNCTION

function cpl() {
  let budget = parseInt(document.getElementById("budget").value);
  let leads = parseInt(document.getElementById("leads").value);
  let cpl = budget/leads;
  let cpl_result_txt = document.getElementById("cpl_result");
  return cpl_result_txt.textContent += "Цена Обращения: " + cpl + "$  |";
}

// CPC FUNCTION

function cpc() {
  let budget = parseInt(document.getElementById("budget").value);
  let clicks = parseInt(document.getElementById("clicks").value);
  let cpc = budget/clicks;
  let cpc_result_txt = document.getElementById("cpc_result");
  return cpc_result_txt.textContent += "Цена Клика: " + cpc + "$  |"
}

// CPS FUNCTION

function cps() {
  let budget = parseInt(document.getElementById("budget").value);
  let sales = parseInt(document.getElementById("sales").value);
  let cps = budget/sales;
  let cps_result_txt = document.getElementById("cps_result");
  return cps_result_txt.textContent += "Цена Заказа: " + cps + "$"
}
// CALCULATE ALL FUNCTION

function calculate_all() {
  let budget = parseInt(document.getElementById("budget").value);
  let leads = parseInt(document.getElementById("leads").value);
  let clicks = parseInt(document.getElementById("clicks").value);
  let sales = parseInt(document.getElementById("sales").value);

  let cpl = budget/leads;
  let cpl_result_txt = document.getElementById("cpl_result_all");

  let cpc = budget/clicks;
  let cpc_result_txt = document.getElementById("cpc_result_all");

  let cps = budget/sales;
  let cps_result_txt = document.getElementById("cps_result_all");

  let salesConversion = (sales*100)/leads;
  let salesConversion_result_txt = document.getElementById("sales_conversion_all");

  function cpl_all() {
    return cpl_result_txt.textContent += "Цена Обращения: " + cpl + "$ |";
  }
  function cpc_all() {
    return cpc_result_txt.textContent += "Цена Клика: " + cpc + "$ |";
  }
  function cps_all() {
    return cps_result_txt.textContent += "Цена Заказа: " + cps + "$ |";
  }
  function salesConversion_all() {
    return salesConversion_result_txt.textContent += "Конверсия в продажу " + salesConversion + "%";
  }
  cpl_all();
  cpc_all();
  cps_all();
  salesConversion_all();

  // CREATINGA AN ANALYZ BUTTON

  function createAnalyzBtn() {
    let btnDiv = document.getElementById("analyz_button");
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Анализировать показатели";
    //btn.style.textAlign = "center";
    //btn.classList.add("analyz_btn");
    btn.setAttribute("id","analyz_btn")
    btnDiv.appendChild(btn);
  }


  function styleAnalyzBtn() {
    let analyzButton = document.getElementById("analyz_button").childnodes;
    analyzButton.style.justifyContent = "center";
  }
  createAnalyzBtn();
  styleAnalyzBtn();
}

//DELETING RESULTS
function deleteResults() {
  document.getElementById("cpl_result_all").innerHTML = "";
  document.getElementById("cpc_result_all").innerHTML = "";
  document.getElementById("cps_result_all").innerHTML = "";
  document.getElementById("sales_conversion_all").innerHTML = "";
  let buttonZone = document.getElementById("analyz_btn");
  function deleteButton() {
    buttonZone.remove();
  }
  document.getElementById("sales_conversion_all").innerHTML = "";
  deleteButton();
}

// ANALYZ RESULTS

function analyzResults() {
  let cpl = document.getElementById("cpl_result_all");
  let cpc = document.getElementById("cpc_result_all");
  let cps = document.getElementById("cps_result_all");
  let salesConv = document.getElementById("sales_conversion_all");
  function checkCPL() {
    if (cpl > 2) {

    } else {

    }
  }
}
