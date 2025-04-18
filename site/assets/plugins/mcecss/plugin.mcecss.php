<?php
if (!defined('MODX_BASE_PATH')) {
	http_response_code(403);
	die('For'); 
}

$e =& $modx->event;
$params = $e->params;
$output = "";
switch($e->name){
	case "OnRichTextEditorInit":
		$output .= '<style>';
		$output .= '@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 100;
  src: url("/assets/templates/projectsoft/fonts/Roboto-ThinItalic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-ThinItalic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-ThinItalic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 300;
  src: url("/assets/templates/projectsoft/fonts/Roboto-LightItalic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-LightItalic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-LightItalic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Italic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Italic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Italic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 500;
  src: url("/assets/templates/projectsoft/fonts/Roboto-MediumItalic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-MediumItalic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-MediumItalic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 700;
  src: url("/assets/templates/projectsoft/fonts/Roboto-BoldItalic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-BoldItalic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-BoldItalic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 900;
  src: url("/assets/templates/projectsoft/fonts/Roboto-BlackItalic.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-BlackItalic.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-BlackItalic.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Thin.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Thin.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Thin.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Light.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Light.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Light.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Regular.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Regular.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Regular.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Medium.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Medium.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Medium.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Bold.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Bold.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Bold.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  src: url("/assets/templates/projectsoft/fonts/Roboto-Black.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/Roboto-Black.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/Roboto-Black.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Light"), local("OpenSans-Light"), url("/assets/templates/projectsoft/fonts/opensanslight.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensanslight.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensanslight.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Light Italic"), local("OpenSansLight-Italic"), url("/assets/templates/projectsoft/fonts/opensanslightitalic.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensanslightitalic.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensanslightitalic.ttf") format("truetype");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"), local("OpenSans"), url("/assets/templates/projectsoft/fonts/opensans.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensans.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensans.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("/assets/templates/projectsoft/fonts/opensansitalic.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensansitalic.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensansitalic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Semibold"), local("OpenSans-Semibold"), url("/assets/templates/projectsoft/fonts/opensanssemibold.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensanssemibold.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensanssemibold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Semibold Italic"), local("OpenSans-SemiboldItalic"), url("/assets/templates/projectsoft/fonts/opensanssemibolditalic.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensanssemibolditalic.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensanssemibolditalic.ttf") format("truetype");
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("/assets/templates/projectsoft/fonts/opensansbold.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensansbold.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensansbold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("/assets/templates/projectsoft/fonts/opensansbolditalic.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensansbolditalic.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensansbolditalic.ttf") format("truetype");
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Extrabold"), local("OpenSans-Extrabold"), url("/assets/templates/projectsoft/fonts/opensansextrabold.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensansextrabold.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensansextrabold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans Extrabold Italic"), local("OpenSans-ExtraboldItalic"), url("/assets/templates/projectsoft/fonts/opensansextrabolditalic.woff2") format("woff2"), url("/assets/templates/projectsoft/fonts/opensansextrabolditalic.woff") format("woff"), url("/assets/templates/projectsoft/fonts/opensansextrabolditalic.ttf") format("truetype");
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: "Ruslan Display";
  font-style: normal;
  font-weight: 400;
  src: url("/assets/templates/projectsoft/fonts/RuslanDisplayRegular.woff2?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff2"), url("/assets/templates/projectsoft/fonts/RuslanDisplayRegular.woff?92ffe7d05c8e97ca42d9f5301e3f05de") format("woff"), url("/assets/templates/projectsoft/fonts/RuslanDisplayRegular.ttf?92ffe7d05c8e97ca42d9f5301e3f05de") format("truetype");
}
.mce-container-body .mce-top-part {top: 0;position: sticky;}';
		$output .= '</style>';
		$e->output($output);
		break;
}
?>