const activityListEl = document.getElementById('list_of_activities')
const newFormHandler = async (event) => {
    event.preventDefault();
    alert("working")

    const exercise = document.querySelector('#activity-input').value.trim();
    const waterConsumed = document.querySelector('#water-input').value.trim();
    const mood_overall = document.querySelector('#mood-input').value.trim();
    const hours = document.querySelector('#sleep-input').value.trim();
  
    if (exercise, waterConsumed, hours, mood_overall) {
      const response = await fetch(`/api/activity`, {
        method: 'POST',
        body: JSON.stringify({ exercise, waterConsumed, hours, mood_overall }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to add activities');
      }
    }
  };

  document
  .querySelector('.activity-form')
  .addEventListener('submit', newFormHandler);

  fetch('/api/activity')
  .then(res=>res.json())
  .then(data => {
    console.log(data);
    const activityItem = document.createElement('li');
    const waterItem = document.createElement('li');
    const moodItem = document.createElement('li');
    const sleepItem = document.createElement('li');

    activityItem.textContent = data[0].exercise;
    waterItem.textContent = data[0].waterConsumed;
    moodItem.textContent = data[0].mood_overall;
    sleepItem.textContent = data[0].hours;

    activityListEl.appendChild(waterItem);
    activityListEl.appendChild(moodItem);
    activityItemEl.appendChild(sleepItem);
    activityListEl.appendChild(activityItem);

  })