import CodeMirror = require('codemirror');

var myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

var myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript"
});

var myTextArea: HTMLTextAreaElement;
var myCodeMirror3: CodeMirror.Editor = CodeMirror(function (elt) {
    myTextArea.parentNode.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });

var myCodeMirror4: CodeMirror.Editor = CodeMirror.fromTextArea(myTextArea);

var doc: CodeMirror.Doc = new CodeMirror.Doc('text');
var doc2: CodeMirror.Doc = CodeMirror(document.body).getDoc();

var lintStateOptions: CodeMirror.LintStateOptions = {
    async: true,
    hasGutters: true
};

var lintOptions: CodeMirror.LintOptions = {
    async: true,
    hasGutters: true,
    getAnnotations: (content: string,
                     updateLintingCallback: CodeMirror.UpdateLintingCallback,
                     options: CodeMirror.LintStateOptions,
                     codeMirror: CodeMirror.Editor) => {}
};

var updateLintingCallback: CodeMirror.UpdateLintingCallback = (codeMirror: CodeMirror.Editor,
                                                               annotations: CodeMirror.Annotation[]) => {};

var annotation: CodeMirror.Annotation = {
    from: {
        ch: 0,
        line: 0
    },
    to: CodeMirror.Pos(1),
    message: "test",
    severity: "warning"
};

myCodeMirror.getValue();
myCodeMirror.getValue("foo")
myCodeMirror.setValue("bar");

myCodeMirror.on(
  "renderLine",
  (instance: CodeMirror.Editor, line: CodeMirror.LineHandle, element: HTMLElement) => { }
);

CodeMirror.registerHelper("lint", "javascript", {});
