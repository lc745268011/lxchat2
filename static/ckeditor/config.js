/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

// 直接将配置内容写在function函数内即可
CKEDITOR.editorConfig = function( config ) {
    config.uiColor = '#dcdcdc';
    config.height = 130;
    config.removePlugins = 'elementspath,resize'; // 移除编辑器底部状态栏显示的元素路径和调整编辑器大小的按钮
    //工具栏
    config.toolbar_normal =
        [
            ['TextColor','BGColor'],
            ['Bold','Italic','Strike'],
            ['JustifyLeft','JustifyCenter','JustifyRight'],
            ['NumberedList','BulletedList'],
            ['Format'],
            ['Image','Flash','Table'],
            ['Link','Unlink'],
            ['Blockquote'],
            ['Source','Maximize']
        ];
    config.toolbar_Full =
        [
            { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
            { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton','HiddenField' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
                    '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
            { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
            { name: 'colors', items : [ 'TextColor','BGColor' ] },
            { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
        ];
    config.allowedContent = true; // 是否允许使用源码模式进行编辑
    // config.toolbarStartupExpanded=false;//工具栏默认是否展开
    // config.toolbarCanCollapse=true;//工具栏是否可以被收缩
    config.forcePasteAsPlainText = false; // 是否强制复制过来的文字去除格式
    config.enterMode = CKEDITOR.ENTER_BR; // 编辑器中回车产生的标签CKEDITOR.ENTER_BR(<br>),CKEDITOR.ENTER_P(<p>),CKEDITOR_ENTER(回车)
    // 设置快捷键
    // 用于实现Ctrl + V进行粘贴
  /*  // 无此配置，无法进行快捷键粘贴
    config.keystrokes = [
        [CKEDITOR.CTRL + 86 /!* V *!/, 'paste']
    ];

    // 设置快捷键，可能与浏览器冲突plugins/keystrokes/plugin.js
    // 用于实现Ctrl + V进行粘贴
    // 此配置将会启动粘贴之前进行过滤，若无此配置，将会出现粘贴之后才弹出过滤框
    config.blockedKeystrokes = [
        CKEDITOR.CTRL + 86
    ];
*/
    // 图片上传相关
    config.filebrowserImageUploadUrl = './upload'; // 图片上传路径
    config.image_previewText = ' '; // 图片信息面板预览区内容的文字内容，默认显示CKEditor自带的内容
    config.removeDialogTabs = 'image:advanced;image:Link'; // 移除图片上传页面的'高级','链接'页签
    //添加中文字体
    config.font_names="宋体/SimSun;新宋体/NSimSun;仿宋_GB2312/FangSong_GB2312;楷体_GB2312/KaiTi_GB2312;黑体/SimHei;微软雅黑/Microsoft YaHei;幼圆/YouYuan;华文彩云/STCaiyun;华文行楷/STXingkai;方正舒体/FZShuTi;方正姚体/FZYaoti;"+ config.font_names;
}
