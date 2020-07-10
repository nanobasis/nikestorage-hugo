/*
  Installation:

  1) Configure Google Form to submit responses to a Google Sheet
  2) From Google Sheet, go to Tools => Script editor...
  3) In Code.gs, copy & paste this script
  4) Menu File => New => Html file named 'GoogleSheetsEmailer'
  5) Copy contents of GoogleSheetsEmailer.html to newly created file
  6) Go to menu Edit => Current project's triggers
  7) Click 'Add a new trigger'
    a) Run: respondToFormSubmit
    b) Events: From spreadsheet, On form submit
*/

/*
  respondToFormSubmit:

  Responds to a form submission event if an onFormSubmit trigger has been
  enabled
*/

// TODO: edit this to desired e-mail
var EMAIL_TO = '';

function respondToFormSubmit(e) {
  var subject = '';

  var em = e.namedValues['E-mail Address'];
  var replyTo = em && em != '' ? em : 'noreply@nikestorage.com';

  var fn = e.namedValues['Full Name'];
  if (fn && fn != '') {
    replyTo = fn + ' <' + replyTo + '>';
    subject += fn;
  }

  var sbj = e.namedValues['Subject'];
  if (sbj && sbj != '') {
    if (subject.length > 0) { subject += ' : '; }
    subject += sbj;
  }

  var template = HtmlService.createTemplateFromFile('GoogleSheetsEmailer');

  template.fullname = fn;
  template.email = em;
  template.details = e.namedValues['Details'];
  template.phone = e.namedValues['Phone'];

  var message = template.evaluate();

  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject + ' : Nike Storage Contact Form',
    replyTo: replyTo,
    htmlBody: message.getContent()
  });
}
