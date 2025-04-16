function savePlan() {
  const wellnessLook = document.getElementById('wellnessLook').value;
  const dailyHabits = document.getElementById('dailyHabits').value;
  const triggerList = document.getElementById('triggerList').value;
  const afterTriggered = document.getElementById('afterTriggered').value;
  const warningSigns = document.getElementById('warningSigns').value;
  const actionPlan = document.getElementById('actionPlan').value;

  const plan = {
    wellnessLook,
    dailyHabits,
    triggerList,
    afterTriggered,
    warningSigns,
    actionPlan
  };

  localStorage.setItem('wellnessPlan', JSON.stringify(plan));
  displaySavedPlan();
}

function displaySavedPlan() {
  const saved = JSON.parse(localStorage.getItem('wellnessPlan'));

  if (saved) {
    document.getElementById('displayWellnessLook').textContent = saved.wellnessLook;
    document.getElementById('displayDailyHabits').textContent = saved.dailyHabits;
    document.getElementById('displayTriggerList').textContent = saved.triggerList;
    document.getElementById('displayAfterTriggered').textContent = saved.afterTriggered;
    document.getElementById('displayWarningSigns').textContent = saved.warningSigns;
    document.getElementById('displayActionPlan').textContent = saved.actionPlan;
    document.getElementById('displayActions').textContent = saved.actionPlan;
  }
}

window.onload = function () {
  displaySavedPlan();
};
