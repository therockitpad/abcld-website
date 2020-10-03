document.getElementById('email-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await sendEmail();
});

async function sendEmail() {
  let emailForm = document.getElementById('email-form').elements;
  let emailDetails = {};
  for (let i = 0; i < emailForm.length; ++i) {
    if (emailForm[i].value) {
      emailDetails[emailForm[i].name] = emailForm[i].value;
    }
  }
  //   console.log(emailDetails);
  const { status } = await fetch('/', {
    method      : 'POST',
    mode        : 'same-origin',
    cache       : 'no-cache',
    credentials : 'same-origin',
    headers     : {
      'Content-Type' : 'application/json'
    },
    body        : JSON.stringify(emailDetails)
  });

  if (status === 200) {
    setButtonText('Email sent');
  } else {
    setButtonText('Error');
  }
}

function setButtonText(text) {
  const btn = document.getElementById('submit-button');
  btn.innerHTML = text;
  setTimeout(() => (btn.innerHTML = 'Send message'), 5000);
}
