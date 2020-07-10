// support Google Forms

const contactForm = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSf5HT1FO3GmCjicSxQRurm_hSHBQiDCZrtGv2TxNwXIE0PNoQ/formResponse',
  entries: [
    ['input', 'fullname', 'entry.1118677073'],
    ['input', 'phone', 'entry.1692574032'],
    ['input', 'email', 'entry.1396212673'],
    ['select', 'subject', 'entry.1665926538'],
    ['textarea', 'details', 'entry.58246989']
  ]
};

$(function(){

  $('#contact-form').attr('action', contactForm.action);

  for (const i of Object.keys(contactForm.entries)) {
    const sel = contactForm.entries[i][0];
    const id = contactForm.entries[i][1];
    const newid = contactForm.entries[i][2];

    $("label[for='" + id + "']").attr('for', newid);
    $(sel + "[name='" + id + "']").attr('name', newid);
  }

  $('#contact-form').on('submit', function(e) {
    $('#contact-form *').fadeOut(500);
    $('#contact-form').prepend('Success! We will get back to you shortly...');
  });
  
});
