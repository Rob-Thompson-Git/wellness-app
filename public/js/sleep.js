const newFormHandler = async (event) => {
  event.preventDefault();
//  alert("hello");
  const sleep = document.querySelector('#sleep-input').value.trim();
  

  if (hours, quality) {
    const response = await fetch(`/api/sleep`, {
      method: 'POST',
      body: JSON.stringify({ hours, quality }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to add sleep');
    }
  }
};

document
.querySelector('.sleep-form')
.addEventListener('submit', newFormHandler);