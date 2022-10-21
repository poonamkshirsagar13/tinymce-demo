import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-textEdit';
  
  name = 'Angular & TinyMCE';
  tinyMceConfig: any;

  ngOnInit() {
    this.configureTinyMce();
  }
  
  configureTinyMce() {
    this.tinyMceConfig = {
      branding: false,
      /**
       * This is needed to prevent console errors
       * if you're hosting your own TinyMCE
       */
      // content_css: 'assets/tinymce/skins/ui/oxide/content.min.css',
      height: 400,
      image_advtab: true,
      imagetools_toolbar: `
      rotateleft rotateright |
      flipv fliph | 
      editimage imageoptions`,
      importcss_append: !0,
      inline: false,
      menubar: true,
      paste_data_images: !0,
      /**
       * This is needed to prevent console errors 
       * if you're hosting your own TinyMCE
       */
      // skin_url: 'assets/tinymce/skins/ui/oxide',
      plugins: 'link contractPlugin',
      toolbar: `
        link contractPlugin | 
        insertText |
        copy undo redo formatselect |
        bold italic strikethrough forecolor backcolor |
        link | alignleft aligncenter alignright alignjustify |
        numlist bullist outdent indent |
        removeformat`,
      setup: (editor:any) => {
        editor.ui.registry.addButton('insertText', {
          text: 'Press Me To Insert Text!',
          onAction: () => {
            editor.insertContent('<strong>Hello World! My Name is Poonam</strong>');
          }
        });
      }
    };
  }


}
