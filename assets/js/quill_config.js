$(document).ready(function() {
  // Editor
  // https://quilljs.com/docs/quickstart/
  var toolbarOptions = [
    ['bold', 'italic', 'underline'],
    ['link', 'image'],       // toggled buttons
    [{ 'header': 1 }, { 'header': 2 }],           // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    placeholder: 'Enter your tournament details here...',
    theme: 'snow',
  });
  //Avoid Quick Search Toggle
  quill.on('selection-change', function (range, oldRange, source) {
    if (range === null && oldRange !== null) {
      $('body').removeClass('overlay-disabled');
    } else if (range !== null && oldRange === null) {
      $('body').addClass('overlay-disabled');
    }
  });

  var tdesc = quill.getContents();
})
