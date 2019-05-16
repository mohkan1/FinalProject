//Preparing the code editor
function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

//Some fundemental settings like the theme and which programming languages
function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(``, 1); //1 = moves cursor to end




  document.getElementById('iframe').addEventListener('mouseover', function() {
      update();
  });

  editor.focus();

//The font size and some others setting to the code editor
  editor.setOptions({
      fontSize: "14pt",
      showLineNumbers: true,
      showGutter: true,
      vScrollBarAlwaysVisible: true,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();


function keyCode(event) {
  update();

}
