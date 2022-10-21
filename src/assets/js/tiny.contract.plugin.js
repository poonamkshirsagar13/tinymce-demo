tinymce.PluginManager.add('contractPlugin', function (editor, url) {
    editor.ui.registry.addMenuButton('contractPlugin', {
        text: "Contract Templates",
        fetch: function (callback) {
            var items = [
                {
                    type: "menuitem",
                    "text": "Insert Employee Name",
                    onAction: function (_) {
                        editor.insertContent(mceContractFragment("#employee-name", "#007bff"));
                    }
                },{
                    type: 'menuitem',
                    text: 'Insert Employer Name',
                    onAction: function (_) {
                        editor.insertContent(mceContractFragment("#employer-name", "#D70026"));
                    }
                },
                {
                    type: 'menuitem',
                    text: 'Insert Date',
                    onAction: function (_) {
                        editor.insertContent(mceContractFragment("#date", "#000B29"));
                    }
                },
                {
                    type: 'menuitem',
                    text: 'Insert Job Description',
                    onAction: function (_) {
                        editor.insertContent(mceContractFragment("#job-description", "#01DF74"));
                    }
                },
                {
                    type: 'menuitem',
                    text: 'Insert Payment Amount',
                    onAction: function (_) {
                        editor.insertContent(mceContractFragment("#pay", "#F25C00"));
                    }
                },
            ]; //Create MenuItem[]
            callback(items);
        }
    });
});
function mceContractFragment(text, color) {
    color = typeof color === "undefined" ? "#007bff" : color;
    return "<span class='contract mceNonEditable' style='font-size : 10px; font-weight : bold; inline:block; background-color: "
        + color + "; color : #fff; padding : 3px; border-radius : 3px;'>"
        + text
        + "</span>";
}