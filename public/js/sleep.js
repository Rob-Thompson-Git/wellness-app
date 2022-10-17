const newFormHandler = async (event) => {
  event.preventDefault();

  const sleep = document.querySelector('#sleep').value.trim();

  if (sleep) {
    const response = await fetch(`/api/sleep`, {
      // should this go to api/user or to api/sleep
      method: 'POST',
      body: JSON.stringify({sleep}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/sleep');
    } else {
      alert('Failed to create sleep');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/sleep/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete sleep');
//     }
//   }
// };

document
  .querySelector('.sleep-form')
  .addEventListener('input', newFormHandler);

// document - this is for delete - would need to add {{if}} to hb
//   .querySelector('.wellness')
//   .addEventListener('click', delButtonHandler);
