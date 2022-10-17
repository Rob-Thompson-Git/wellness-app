const activityListEl = document.getElementById('list_of_activities')
const newFormHandler = async (event) => {
    event.preventDefault();
    alert("working")

    const exercise = document.querySelector('#activity-input').value.trim();
    const waterConsumed = document.querySelector('#water-input').value.trim();
    const mood_overall = document.querySelector('#mood-input').value.trim();
    const hours = document.querySelector('#sleep-input').value.trim();
  
    if (exercise) {
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
        alert('Failed to add activity');
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

    activityItem.textContent = data[0].exercise;

    activityListEl.appendChild(activityItem)
  })