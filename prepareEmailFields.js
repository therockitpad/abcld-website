module.exports = function prepareEmailFields(body) {
  const { name, email, services, message } = body;
  console.log(body);
  if (!(name && email && services)) throw new Error('Empty fields');
  const subject = `For ${name}`;
  const text = `
Name: ${name}
Email: ${email}
Services: ${services}

${message}
`;

  return {
    from    : process.env.SENDER_MAIL,
    to      : process.env.TO_MAIL,
    subject : subject,
    text    : text
  };
};
