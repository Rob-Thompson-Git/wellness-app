const newFormHandler = async (event) => {
  event.preventDefault();

  const sleep = document.querySelector('#sleep').value.trim();

  if (sleep) {
    const response = await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify({sleep}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create sleep');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/user/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-user-form')
  .addEventListener('input', newFormHandler);

document
  .querySelector('.wellness')
  .addEventListener('click', delButtonHandler);
