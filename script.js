// POKAZATELI

// let budget = parseInt(document.getElementById("budget").value);
// let leads = parseInt(document.getElementById("leads").value);
// let clicks = parseInt(document.getElementById("clicks").value);
// let sales = parseInt(document.getElementById("sales").value);

// let cpl = budget/leads;
// let cpc = budget/clicks;
// let cps = budget/sales;
// let salesConversion = (sales*100)/leads;

// CPL FUNCTION
/*
function cpll() {
  let cpl_result_txt = document.getElementById("cpl_result");
  return cpl_result_txt.textContent += "Цена Обращения: " + cpl + "$  |";
}

// CPC FUNCTION

function cpcc() {
  let cpc_result_txt = document.getElementById("cpc_result");
  return cpc_result_txt.textContent += "Цена Клика: " + cpc + "$  |"
}

// CPS FUNCTION

function cpss() {
  let cps_result_txt = document.getElementById("cps_result");
  return cps_result_txt.textContent += "Цена Заказа: " + cps + "$"
}
// CALCULATE ALL FUNCTION

*/

function calculate_all() {
  let budget = parseInt(document.getElementById("budget").value);
      let leads = parseInt(document.getElementById("leads").value);
      let clicks = parseInt(document.getElementById("clicks").value);
      let sales = parseInt(document.getElementById("sales").value);

      let cpl = budget/leads;
      let cpc = budget/clicks;
      let cps = budget/sales;
      let salesConversion = (sales*100)/leads;
  function cpl_all() {
    let budget = parseInt(document.getElementById("budget").value);
    let leads = parseInt(document.getElementById("leads").value);
    let clicks = parseInt(document.getElementById("clicks").value);
    let sales = parseInt(document.getElementById("sales").value);
    let cpl = budget/leads;
    let cpl_result_txt = document.getElementById("cpl_result_all");
    return cpl_result_txt.textContent += "Цена Обращения: " + cpl + "$ |";
  }
  function cpc_all() {
    let budget = parseInt(document.getElementById("budget").value);
    let leads = parseInt(document.getElementById("leads").value);
    let clicks = parseInt(document.getElementById("clicks").value);
    let sales = parseInt(document.getElementById("sales").value);
    let cpc = budget/clicks;
    let cpc_result_txt = document.getElementById("cpc_result_all");
    return cpc_result_txt.textContent += "Цена Клика: " + cpc + "$ |";
  }
  function cps_all() {
    let budget = parseInt(document.getElementById("budget").value);
    let leads = parseInt(document.getElementById("leads").value);
    let clicks = parseInt(document.getElementById("clicks").value);
    let sales = parseInt(document.getElementById("sales").value);
    let cps = budget/sales;
    let cps_result_txt = document.getElementById("cps_result_all");
    return cps_result_txt.textContent += "Цена Заказа: " + cps + "$ |";
  }
  function salesConversion_all() {
    let budget = parseInt(document.getElementById("budget").value);
    let leads = parseInt(document.getElementById("leads").value);
    let clicks = parseInt(document.getElementById("clicks").value);
    let sales = parseInt(document.getElementById("sales").value);
    let salesConversion = (sales*100)/leads;
    let salesConversion_result_txt = document.getElementById("sales_conversion_all");
    return salesConversion_result_txt.textContent += "Конверсия в продажу " + salesConversion + "%";
  }
  cpl_all();
  cpc_all();
  cps_all();
  salesConversion_all();
  function checkCPL() {
    if (cpl > 2) {
      document.getElementById("cpl_analyz").textContent = "Цена обращения ВЫСОКАЯ!";
      var img = document.createElement("img");
      img.src = "red_circle.svg";
      var src = document.getElementById("res_circle_cpl");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cpl")
    } else {
      document.getElementById("cpl_analyz").textContent = "Цена обращения В НОРМЕ!";
      var img = document.createElement("img");
      img.src = "green_circle.svg";
      var src = document.getElementById("res_circle_cpl");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cpl")
    }
  }
  function checkCPC() {
    if (cpc > 0.04) {
      document.getElementById("cpc_analyz").textContent = "Цена клика ВЫСОКАЯ!";
      var img = document.createElement("img");
      img.src = "red_circle.svg";
      var src = document.getElementById("res_circle_cpc");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cpc")
    } else {
      document.getElementById("cpc_analyz").textContent = "Цена клика В НОРМЕ!";
      var img = document.createElement("img");
      img.src = "green_circle.svg";
      var src = document.getElementById("res_circle_cpc");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cpc")
    }
  }
  function checkCPS() {
    if (cps > 6) {
      document.getElementById("cps_analyz").textContent = "Цена заказа ВЫСОКАЯ!";
      var img = document.createElement("img");
      img.src = "red_circle.svg";
      var src = document.getElementById("res_circle_cps");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cps")
    } else {
      document.getElementById("cps_analyz").textContent = "Цена заказа В НОРМЕ!";
      var img = document.createElement("img");
      img.src = "green_circle.svg";
      var src = document.getElementById("res_circle_cps");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_cps")
    }
  }
  function checkSalesConv() {
    if (salesConversion < 30) {
      document.getElementById("salesconv_analyz").textContent = "Конверсия в продажу НИЗКАЯ!";
      var img = document.createElement("img");
      img.src = "red_circle.svg";
      var src = document.getElementById("res_circle_salesConv");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_salesConv")
    } else {
      document.getElementById("salesconv_analyz").textContent = "Конверсия в продажу В НОРМЕ!";
      var img = document.createElement("img");
      img.src = "green_circle.svg";
      var src = document.getElementById("res_circle_salesConv");
      src.appendChild(img);
      img.setAttribute("id","res_crcl_salesConv")
    }
  }
  checkCPL();
  checkCPC();
  checkCPS();
  checkSalesConv();
// SOLVING PROBLEMS
  const solveProblems = () => {

    // Getting answers
    
    // let cplAnswer = document.getElementById("cpl_analyz");
    // let cpcAnswer = document.getElementById("cpc_analyz");
    // let cpsAnswer = document.getElementById("cps_analyz");
    // let salesConvAnswer = document.getElementById("salesconv_analyz");
    
    // Ready for solving
    document.getElementById("cpl_solve_heading").textContent = "Что делать с Ценой обращения?";
    document.getElementById("cpc_solve_heading").textContent = "Что делать с Ценой клика?";
    document.getElementById("cps_solve_heading").textContent = "Что делать с Ценой заказа?";
    document.getElementById("salesConv_solve_heading").textContent = "Что делать с Конверсией в продажу?";
    
    function solveCpl() {
    
      if (cpl > 2) {
        document.getElementById("cpl_solve_description").textContent = "Проверить можно ли снизить цену клика, Проверить разнообразие типов контента в ленте, Возможнo проблема ассортимента";
      } else {
        document.getElementById("cpl_solve_description").textContent = "Ничего.";
      }
    }
    function solveCpc() {
      
      if (cpc > 0.04) {
        document.getElementById("cpc_solve_description").textContent = "Проверить СРМ, Тестировать новые креативы";
      } else {
        document.getElementById("cpc_solve_description").textContent = "Ничего.";
      }
    }
    function solveCps() {
      
      if (cps > 6) {
        document.getElementById("cps_solve_description").textContent = "Проверить цену клика и цену обращения, Проверить конверсию в продажу";
      } else {
        document.getElementById("cps_solve_description").textContent = "Ничего.";
      }
    }
    function solveSalesConv() {
      
      if (salesConversion < 30) {
        document.getElementById("salesConv_solve_description").textContent = "Проверить цену клика и цену обращения, Проверить конверсию в продажу";
      } else {
        document.getElementById("salesConv_solve_description").textContent = "Ничего.";
      }
    }
    solveCpl();
    solveCpc();
    solveCps();
    solveSalesConv();
  }
  solveProblems();
}
  // CREATINGA AN ANALYZ BUTTON

  // function createAnalyzBtn() {
  //   let btnDiv = document.getElementById("analyz_button");
  //   let btn = document.createElement("BUTTON");
  //   btn.innerHTML = "Анализировать показатели";
  //   btn.onclick = function analyzResults() {
  //     let budget = parseInt(document.getElementById("budget").value);
  //     let leads = parseInt(document.getElementById("leads").value);
  //     let clicks = parseInt(document.getElementById("clicks").value);
  //     let sales = parseInt(document.getElementById("sales").value);

  //     let cpl = budget/leads;
  //     let cpc = budget/clicks;
  //     let cps = budget/sales;
  //     let salesConversion = (sales*100)/leads;
  //     function checkCPL() {
  //       if (cpl > 2) {
  //         document.getElementById("cpl_analyz").textContent = "Цена обращения ВЫСОКАЯ!";
  //         var img = document.createElement("img");
  //         img.src = "red_circle.svg";
  //         var src = document.getElementById("res_circle_cpl");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cpl")
  //       } else {
  //         document.getElementById("cpl_analyz").textContent = "Цена обращения В НОРМЕ!";
  //         var img = document.createElement("img");
  //         img.src = "green_circle.svg";
  //         var src = document.getElementById("res_circle_cpl");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cpl")
  //       }
  //     }
  //     function checkCPC() {
  //       if (cpc > 0.04) {
  //         document.getElementById("cpc_analyz").textContent = "Цена клика ВЫСОКАЯ!";
  //         var img = document.createElement("img");
  //         img.src = "red_circle.svg";
  //         var src = document.getElementById("res_circle_cpc");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cpc")
  //       } else {
  //         document.getElementById("cpc_analyz").textContent = "Цена клика В НОРМЕ!";
  //         var img = document.createElement("img");
  //         img.src = "green_circle.svg";
  //         var src = document.getElementById("res_circle_cpc");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cpc")
  //       }
  //     }
  //     function checkCPS() {
  //       if (cps > 6) {
  //         document.getElementById("cps_analyz").textContent = "Цена заказа ВЫСОКАЯ!";
  //         var img = document.createElement("img");
  //         img.src = "red_circle.svg";
  //         var src = document.getElementById("res_circle_cps");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cps")
  //       } else {
  //         document.getElementById("cps_analyz").textContent = "Цена заказа В НОРМЕ!";
  //         var img = document.createElement("img");
  //         img.src = "green_circle.svg";
  //         var src = document.getElementById("res_circle_cps");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_cps")
  //       }
  //     }
  //     function checkSalesConv() {
  //       if (salesConversion < 30) {
  //         document.getElementById("salesconv_analyz").textContent = "Конверсия в продажу НИЗКАЯ!";
  //         var img = document.createElement("img");
  //         img.src = "red_circle.svg";
  //         var src = document.getElementById("res_circle_salesConv");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_salesConv")
  //       } else {
  //         document.getElementById("salesconv_analyz").textContent = "Конверсия в продажу В НОРМЕ!";
  //         var img = document.createElement("img");
  //         img.src = "green_circle.svg";
  //         var src = document.getElementById("res_circle_salesConv");
  //         src.appendChild(img);
  //         img.setAttribute("id","res_crcl_salesConv")
  //       }
  //     }
  //     checkCPL();
  //     checkCPC();
  //     checkCPS();
  //     checkSalesConv();
  //   }
  //   btn.setAttribute("id","analyz_btn")
  //   btnDiv.appendChild(btn);
  // }


//   function styleAnalyzBtn() {
//     let analyzButton = document.getElementById("analyz_button").childnodes;
//     analyzButton.style.justifyContent = "center";

//   createAnalyzBtn();
//   styleAnalyzBtn();
// }

//DELETING RESULTS
function deleteResults() {
  document.getElementById("cpl_result_all").innerHTML = "";
  document.getElementById("cpc_result_all").innerHTML = "";
  document.getElementById("cps_result_all").innerHTML = "";
  document.getElementById("sales_conversion_all").innerHTML = "";
  // let buttonZone = document.getElementById("analyz_btn");
  // function deleteButton() {
  //   buttonZone.remove();
  // }
  // deleteButton();
  document.getElementById("cpl_analyz").innerHTML = "";
  document.getElementById("cpc_analyz").innerHTML = "";
  document.getElementById("cps_analyz").innerHTML = "";
  document.getElementById("salesconv_analyz").innerHTML = "";

  function delete_cpl_circle() {
    document.getElementById("res_crcl_cpl").src = "";
    let cpl_circle = document.getElementById("res_crcl_cpl");
    cpl_circle.removeAttribute('id');
  }
  function delete_cpc_circle() {
    document.getElementById("res_crcl_cpc").src = "";
    let cpc_circle = document.getElementById("res_crcl_cpc");
    cpc_circle.removeAttribute('id');
  }
  function delete_cps_circle() {
    document.getElementById("res_crcl_cps").src = "";
    let cps_circle = document.getElementById("res_crcl_cps");
    cps_circle.removeAttribute('id');
  }
  function delete_salesConv_circle() {
    document.getElementById("res_crcl_salesConv").src = "";
    let salesConv_circle = document.getElementById("res_crcl_salesConv");
    salesConv_circle.removeAttribute('id');
  }
  delete_cpl_circle();
  delete_cpc_circle();
  delete_cps_circle();
  delete_salesConv_circle();
}


//ADDING ADVICES FOR SOLVING EVERY PROBLEM



