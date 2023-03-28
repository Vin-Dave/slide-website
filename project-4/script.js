window.addEventListener("load", function () {
  navigator.getBattery().then(function (battery) {
    updateBatteryLevel(battery);

    battery.addEventListener("levelchange", function () {
      updateBatteryLevel(battery);
    });
  });

  function updateBatteryLevel(battery) {
    var batteryLevel = battery.level * 100;
    var batteryLevelElement = document.querySelector(".battery-level");
    var batteryPercentageElement = document.querySelector(
      ".battery-percentage"
    );
    batteryLevelElement.style.width = batteryLevel + "%";
    batteryPercentageElement.innerHTML = batteryLevel + "%";
  }
});
