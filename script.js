function savePlan() {
  const wellnessLook = document.getElementById('wellnessLook').value;
  const dailyHabits = document.getElementById('dailyHabits').value;
  const routineTasks = document.getElementById('routineTasks').value;

  const plan = {
    wellnessLook,
    dailyHabits,
    routineTasks
  };

  localStorage.setItem('wellnessPlan', JSON.stringify(plan));
  displaySavedPlan();
}

function displaySavedPlan() {
  const saved = JSON.parse(localStorage.getItem('wellnessPlan'));

  if (saved) {
    document.getElementById('displayWellnessLook').textContent = saved.wellnessLook;
    document.getElementById('displayDailyHabits').textContent = saved.dailyHabits;
    document.getElementById('displayRoutineTasks').textContent = saved.routineTasks;
  }
}

window.onload = function () {
  displaySavedPlan();
};
