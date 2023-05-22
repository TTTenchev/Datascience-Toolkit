document.addEventListener("DOMContentLoaded", function () {
  var data = [
    {
      x: "България",
      value: 7000000,
    },
    {
      x: "Германия",
      value: 83000000,
    },
    {
      x: "Франция",
      value: 67000000,
    },
    {
      x: "Испания",
      value: 47000000,
    },
    {
      x: "Великобритания",
      value: 66000000,
    },
    {
      x: "Италия",
      value: 60000000,
    },
    {
      x: "Русия",
      value: 144000000,
    },
    {
      x: "САЩ",
      value: 328000000,
    },
    {
      x: "Китай",
      value: 1393000000,
    },
    {
      x: "Индия",
      value: 1366000000,
    },
  ];

  let isPressedPC = false;

  var btnVisualizePC = document.getElementById("visualizePieChart");
  var cntPC = document.getElementById("pieChart");

  btnVisualizePC.addEventListener("click", function () {
    cntPC.classList.remove("display-none");
    if (!isPressedPC) {
      isPressedPC = true;

      var chart = anychart.pie();

      chart.data(data);

      chart.container("visualizorPieChart");

      chart.draw();
    }
  });

  var btnClosePC = document.getElementById("closePieChart");
  btnClosePC.addEventListener("click", function () {
    cntPC.classList.add("display-none");
  });

  let isPressedLC = false;
  var btnVisualizeLC = document.getElementById("visualizeLineChart");
  var cntLC = document.getElementById("lineChart");

  btnVisualizeLC.addEventListener("click", function () {
    cntLC.classList.remove("display-none");
    if (!isPressedLC) {
      isPressedLC = true;

      var chart = anychart.line();

      chart.line(data);

      chart.container("visualizorLineChart");

      chart.draw();
    }
  });

  btnCloseLC = document.getElementById("closeLineChart");
  btnCloseLC.addEventListener("click", function () {
    cntLC.classList.add("display-none");
  });
});
