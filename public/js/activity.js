const newFormHandler = async (event) => {
    event.preventDefault();
   alert("hello");
    const exercise = document.querySelector('#activity-input').value.trim();
    
  
    if (exercise) {
      const response = await fetch(`/api/activity`, {
        method: 'POST',
        body: JSON.stringify({ exercise }),
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