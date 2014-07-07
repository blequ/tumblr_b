<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">

<!-- 

 .ooooo.   .oooo.o  .ooooo.   .oooo.   oo.ooooo.   .ooooo.  
d88' `88b d88(  "8 d88' `"Y8 `P  )88b   888' `88b d88' `88b 
888ooo888 `"Y88b.  888        .oP"888   888   888 888ooo888 
888    .o o.  )88b 888   .o8 d8(  888   888   888 888    .o 
`Y8bod8P' 8""888P' `Y8bod8P' `Y888""8o  888bod8P' `Y8bod8P' 
                                        888                 
                  by blinkanditsover   o888o     


        __________________________________________________
        
        Escape 2.3.6 Theme by blinkanditsover
        http://themecloud.co/themes/escape
        Support: support@twistr.co.uk or  @theme_cloud                         
    	__________________________________________________
        
        
-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>{Title}{block:SearchPage}, {lang:Search results for SearchQuery}{/block:SearchPage}{block:PostSummary}, {PostSummary}{/block:PostSummary}</title>
{block:Description}<meta name="description" content="{MetaDescription}" />{/block:Description}
<link rel="shortcut icon" href="{Favicon}" />
<link rel="apple-touch-icon" href="{PortraitURL-128}"/>
<link rel="alternate" type="application/rss+xml" href="{RSS}" />


<meta name="color:Background" content="#e2e2e2"/>
<meta name="color:Blog Title" content="#000000"/>
<meta name="color:Links" content="#f88559"/>
<meta name="color:Links Border" content="#e1e1e1"/>
<meta name="color:Links Hover" content="#ffffff"/>
<meta name="color:Music player" content="#e2e2e2"/>
<meta name="color:Pagination" content="#e2e2e2"/>
<meta name="color:Post Background" content="#FFFFFF"/>
<meta name="color:Post Border" content="#f88559"/>
<meta name="color:Post Title" content="#ffffff"/>
<meta name="color:Sidebar Background" content="#e2e2e2"/>
<meta name="color:Sidebar Border" content="#cccccc"/>
<meta name="color:Sidebar Description" content="#666666"/>
<meta name="color:Sidebar Links" content="#f88559"/>
<meta name="color:Text" content="#333333"/>

<meta name="if:1 Column" content="0" />
<meta name="if:Facebook Comment Permalink Page" content="1"/>
<meta name="if:Infinite Scroll" content="1"/>
<meta name="if:Photoset As Slider" content="0"/>
<meta name="if:Post Gradient" content="1" />
<meta name="if:Post Large Size" content="0"/>
<meta name="if:Post Medium Size" content="1"/>
<meta name="if:Sidebar background" content="0"/>
<meta name="if:Show Audio Title" content="0"/>
<meta name="if:Show Captions on Home Page" content="1"/>
<meta name="if:Show Photo Hover Buttons" content="1"/>
<meta name="if:Title Padding" content="1"/>
<meta name="if:Show Scroll To Top" content="0"/>

<meta name="image:Background" content=""/>
<meta name="image:Logo" content=""/>

<meta name="text:Disqus ID" content=""/>
<meta name="text:Instagram ID" content=""/>

<link rel="stylesheet" href="http://static.tumblr.com/2w7y46r/tpCltl37a/pictos_base.css">
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Bebas Neue">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:700italic' rel='stylesheet' type='text/css'>

<script type="text/javascript" language="javascript" src="http://assets.tumblr.com/javascript/tumblelog.js?1037"></script>

<!-- ESCAPE CSS CORE -->
<style>
/* CSS Document */
/* CSS RESET */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dd,dl,dt,li,ol,ul,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;}table{border-collapse:collapse;border-spacing:0;}ol,ul{list-style:none;list-style-type: none;}q:before,q:after,blockquote:before,blockquote:after{content:"";}

*{
    outline: none;
    -moz-outline: none;
}
.left{float:left;} .right{float:right;} .clear{clear: both;}
.social_icons a{margin: 0px 10px 0 0;}

#tumblr_controls {
	top: 17px !important;
	right: 107px !important;
}

#menu_links{margin:10px 0px;}
#menu_links li{overflow:hidden;}
#tc_sidebar h3 span{
	font-size: 0.85em;
	font-weight:normal;
	margin-left: 5px;
}
#tc_posts_container{
	margin:0px auto;
	position:relative;
	float:left;
	left:285px;
	top:40px;
	width: 82%;
    padding-bottom:40px;
    {block:IfNot1Column}
		opacity:0;
	{/block:IfNot1Column}
}

.tc_posts div.padding{padding:10px !important;}

.tc_posts:hover .permalink_links{
	opacity:0.6;
	-webkit-transition: opacity 0.4s ease-out;
	-moz-transition: opacity 0.4s ease-out;
	transition: opacity 0.4s ease-out;
	-o-transition: opacity 0.4s ease-out;
}

.permalink_links span{
	margin:0px 3px;
	font-size:1.2em;
}

.permalink_links_highlight a{margin-left: 5px;border:0;}
.permalink_links_highlight a:first-child{margin-left:0px;}

a.heart_icon:hover{
	color:#ff0000 !important;
}

.permalink_links span{
	margin:0px 3px;
	font-size:1.2em;
}

.tc_photo{
	position:relative;
}

.photos{
	width:100%;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	margin-bottom: -5px; /* fix photos bottom */
}



.noteCount{
	font-size: 1em !important;
}

.pictos{font-family: PictosRegular;}

.audioplayercontainer{
	position:relative;
	min-height: 70px;
	height: auto !important;
	height: 70px; /* ie*/
}

.audioplayerinto{
	width: 20px;
	height: 30px;
	overflow: hidden;
	margin: 9px 15px 4px 8px;
}
.audioimage{
	width:100%;
	margin-bottom:-5px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
}

.titleAudio_container{
	position:relative;
	min-height: 40px;
}

.trackLabel{
	font-size: 1.2em;
}
.caption_audio{padding: 0px 10px 10px;}
.caption h3, 
.caption h4, .caption h5, .caption h6{
	margin: 5px 0px;
}

.caption h1{font-size: 2.5em; margin: 10px 0px;line-height: 1.4em;}
.caption h2{font-size: 2em;  margin: 8px 0px; line-height: 1.2em;}
.caption h3{font-size: 1.5em; line-height: 1.2em;}
.caption h4{font-size: 1.3em;}
.caption h5{font-size: 1.2em;}
.caption h6{font-size: 1em;}

.caption blockquote {overflow:hidden;}
.caption p{margin-top:5px;font-size:0.9em; overflow:hidden;}
.caption p:first-child{margin-top: 0px;}

.caption ul, .caption ol{
	margin: 10px 0px;
}

.caption ul li{
	list-style: disc;
	margin-top:5px;
	margin-left: 15px;
}
.caption ol li{
	list-style:decimal;
	margin-top:5px;
	margin-left: 20px;
}
.caption ul li:first-child, .caption ol li:first-child{margin-top:0px;}

	.photosetPost{
		position:relative;
		width:100%;
		overflow:hidden;
		text-align:center;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
	
	.photosetCircle_content{
		text-align:center;
		position:absolute;
		bottom:0px;
		width: 100%;
		height: 25px;
	}
	
	.photosetCircle{
		display:inline-block;
		width: 10px;
		height: 10px;
		background-color: #000; /* for ie */
		background-color: rgba(0,0,0,0.5) !important;
		margin-right:10px;
		cursor: pointer;
		
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
	}
	.prevNext:hover{text-decoration:none;}
.permalinkPage .permaThings{margin-bottom:5px;}
.permalinkPage .permaThings a{border:0;}
.permalinkPage .permaThings .pictos{margin-right:8px;font-size:1.1em;}

.perma_notes .clear {
	margin:0;
	padding:0;
	height:0px;
}

.perma_notes a{border:0;} 
.perma_notes .avatar {
	border:none;
	margin:0;
	padding:0;
	width: 32px;
	height: 32px;
}

.perma_notes ol {
	margin:0;
	padding:0;
}

.perma_notes li {
	margin:0;
	padding:0;
	width:32px;
	list-style:none;
	border:none;
	float:left;
	margin: 0px 2px 2px;
	margin-bottom:4px;
	height:32px;
}

.perma_notes .note .action {
	display:none;
	visibility:hidden;
	margin:0;
	padding:0;
	
} 

.perma_notes .note a:hover{border:0 !important;}
.more_box{
	width:30px;
	height:30px;
	color:red;
	margin:0;
	padding:0;
	float:left;
}	
</style>

<!-- END ESCAPE CSS CORE-->


<style>
::selection      { background:{color:links}; color:{color:post background}; /* Safari and Opera */ }
::-moz-selection  { background:{color:links}; color:{color:post background}; /* Firefox */ }

a{
    color:{color:Links};
    text-decoration:none;
    border-bottom: 1px dotted {color:Links Border};
    
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
} 
a:hover{border-bottom: 1px solid; color:{color:Links Hover} !important;}
a:visited{color:{color:Links};}
blockquote{
    margin: 10px 0px;
    padding-left: 10px;
    border-left: 3px solid {color:Links} !important;
    font-weight: normal !important;
}

body{
    background-color:{color:Background};
    {block:ifbackgroundimage}background-image:url('{image:background}');{/block:ifbackgroundimage}
    font-family: helvetica neue, arial, sans serif !important;
    line-height: 1.2em;
    color:{color:Text};
    font-size: 100%;
    overflow-x:hidden;
    background-attachment:fixed;
    word-wrap: break-word;
}

#tc_container{
	font-size:0.8em;
	{block:IndexPage}
		{block:IfNot1Column}
			width:100%;
		{/block:IfNot1Column}
	    {block:If1Column}
	    	width: 300px !important;
			{block:IfPostMediumSize}
				width: 460px !important;
			{/block:IfPostMediumSize}
			{block:IfPostLargeSize}
				width: 560px !important;
			{/block:IfPostLargeSize}
	    {/block:If1Column}
	{/block:IndexPage}
	{block:PermalinkPage}
		width:100%;
	{/block:PermalinkPage}
}

#menu_links li a {
    font-weight:bold;
	border-bottom:1px solid {color:Sidebar Border};
	color: {color:Sidebar Links};
	display:block;
	width:85%;
    overflow:hidden;
    font-size:12px;
	padding: 5px 20px 5px 0;
	border-left:0px solid {color:Links};
            text-transform:capitalize;

}
#menu_links li:first-child a{
	border-top:1px solid{color:Sidebar Border};
        text-transform:capitalize;

}
#menu_links a:hover{
	padding-left: 10px;
        width:79%;

	border-left-width: 5px;
	color: {color:Sidebar Links} !important;
}
#tc_description{
	color:{color:Sidebar Description};
	line-height:1.4em;
	padding-right:15px;
	margin:10px auto;
    margin-bottom:15px;
}
#tc_sidebar{
	position:fixed;
    {block:ifnotfixedsidebar}
    position:absolute;
    {/block:ifnotfixedsidebar}
	top: 25px;
	width:270px;
    padding-top:20px;
    {block:ifsidebarbackground}
    {block:iflogoimage}
    padding-top:40px;
    {/block:iflogoimage}
    {/block:ifsidebarbackground}
    height: 96%;
    overflow:auto;
	color: {color:Sidebar Text};
	{block:ifsidebarbackground}
    top: 0px;
    height: 100%;
    background-color: {color:Sidebar Background};
	{/block:ifsidebarbackground}
	{block:ifnotsidebarbackground}
        border-right:1px solid {color:Sidebar Border};

	background-color: none;
	{/block:ifnotsidebarbackground}
	border-opacity:0.7;
	overflow-x:hidden;
}
#tc_sidebar h1{
	font-weight: normal;
	font-size: 3.3em;
	color:{color:Blog Title};
	margin-bottom:15px;
	padding-bottom:5px;
    width:225px;
}

#tc_sidebar h3{
	font-size: 1em;
	font-weight: bold;
	color: {color:Sidebar Links};
}
#tc_sidebar h3 span a{
	color:{color:Sidebar Description} !important;
}

.tc_posts{
	position:relative;
	float: left;
	margin: 10px 10px 10px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	-moz-box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
	{block:IndexPage}
	width: 260px;
	{block:IfPostMediumSize}
	width: 410px;
	{/block:IfPostMediumSize}
	{block:IfPostLargeSize}
	width: 510px;
	{/block:IfPostLargeSize}
    {/block:IndexPage}
	box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
	border: 1px solid {color:Post Background};
	background-color: {color:Post Background};
	-webkit-transition: all 0.4s ease;
	-moz-transition: all 0.4s ease;
	transition: all 0.4s ease;
	-o-transition: all 0.4s ease;
}

{block:IndexPage}
.tc_posts:hover{
	-moz-box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
	-webkit-box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
	box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
	}
{/block:IndexPage}

/* text, link, quote posts */

{block:IfTitlePadding}
.padding-title{
	padding: 3px;
	}
{/block:IfTitlePadding}

a.linkTitle{
	color:{color:Post Title} !important;
	border:0;
}
a.linkTitle:hover{
	color:{color:Post Title} !important;
}

h2.title{
	position:relative;
	color: {color:Post Title};
	font-size: 1.6em;
	line-height: 1.3em;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.0);
	background-color: {color:Post Border};
	padding: 15px;
	margin-top: 0px;
	margin-bottom: 5px;
	-webkit-border-top-left-radius: 3px;
	-webkit-border-top-right-radius: 3px;
	-moz-border-radius-topleft: 3px;
	-moz-border-radius-topright: 3px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
} 


h2.link a{
	color: {color:Post Title};
	border-bottom: 0;
}

h2.title:after{
	content: "";
	position: absolute;
	bottom: -18px;
	left: 20px;
	border: 10px solid transparent;
	border-top-color: {color:Post Border};
	display: block;
	width: 0;
}

ul.chat li{
	padding:10px 0px;
	border-top: 1px solid {color:Links Border};
}
ul.chat li:first-child{border-top: 0;}
.even .label{color:{color:Post Border};}

/* posts */

.permalink_links{
	text-align:left;
	margin-bottom: 7px;
	margin-left: 10px;
	margin-right: 10px;
	opacity:0.5;
	filter:alpha(opacity=50);
	color:{color:text};
    bottom: 0px;
}
.permalink_links a{
	text-transform: uppercase;
	font-size:0.8em;
	border-bottom: none;
	color:{color:text};
	font-weight: bold;
	letter-spacing: 1px
}

.trackLabel{color:{color:Links} !important;}

/* photo post */

.permalink_links a, .prevNext{
	text-transform: uppercase;
	font-size:0.8em;
	border-bottom: none;
	color:{color:text};
	font-weight: bold;
	letter-spacing: 1px
}
.tc_post_controls{
    position:absolute;
	top: 0px;
	left: 0px;
	width:100%;
	height:100%;
	opacity: 0;
	filter:alpha(opacity=0);
	box-shadow: inset 0 0 75px black;
	-webkit-transition: opacity 0.4s ease-out;
	-moz-transition: opacity 0.4s ease-out;
	transition: opacity 0.4s ease-out;
	-o-transition: opacity 0.4s ease-out;
	
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
}
.tc_post_controls_background{
	position:absolute;
	width:100%;
	height:100%;
	top:0px;
	left:0px;
    {block:ifpostgradient}
	background: #1e5799;
	background: -moz-linear-gradient(-45deg, #1e5799 0%, #81468c 31%, #efa2bc 75%, #ffac89 100%);
	background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#1e5799), color-stop(31%,#81468c), color-stop(75%,#efa2bc), color-stop(100%,#ffac89));
	background: -webkit-linear-gradient(-45deg, #1e5799 0%,#81468c 31%,#efa2bc 75%,#ffac89 100%);
	background: -o-linear-gradient(-45deg, #1e5799 0%,#81468c 31%,#efa2bc 75%,#ffac89 100%);
	background: -ms-linear-gradient(-45deg, #1e5799 0%,#81468c 31%,#efa2bc 75%,#ffac89 100%);
	background: linear-gradient(135deg, #1e5799 0%,#81468c 31%,#efa2bc 75%,#ffac89 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#ffac89',GradientType=1 );
    {/block:ifpostgradient}
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	opacity: 0.8;
	filter:alpha(opacity=80);
	z-index: 100;
}


.tc_post_controls_container a:first-child{margin-left:0px;}

.tc_post_controls_container a.heart_icon:hover{
	color:#ff0000 !important;
}

.tc_posts:hover .tc_post_controls{
	opacity: 1;
	filter:alpha(opacity=100);
}

.tc_posts:hover .tc_post_controls_container{
	opacity: 1;
	filter:alpha(opacity=100);
	top: 50%;
}
.tc_post_controls_container a{
	position:relative;
	color:{color:Post Title};
	display: inline-block;
	font-size: 1.6em;
	background-color: {color:post border};
	height: 40px;
	width: 40px;
	margin-left:5px;
	line-height:40px;
	-moz-border-radius: 20px;
	-webkit-border-radius: 20px;
	border-radius: 20px;
	border-bottom: 0 !important;
	z-index: 103;
}

.tc_post_controls_container a:hover{
	color:{color:Post Title}!important;
}
.tc_post_controls_container{
    color:#fff;
    position: absolute;
    top: 80%;
	margin-top: -21px;
	text-align: center;
	left: 50%;
	margin-left: -71px;
	-webkit-transition: all 0.3s ease;
	-moz-transition: all 0.3s ease;
	transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	z-index: 101;
}
/* audio post */
.audioplayerout{
	background-color: {color:Music player};
	-webkit-border-radius: 50px;
	-moz-border-radius: 50px;
	border-radius: 50px;
	position:absolute;
	{block:IfShowAudioTitle}
	right: 10px;
	top: 10px;
	{/block:IfShowAudioTitle}
	{block:IfNotShowAudioTitle}
	left: 50%;
	margin-left: -21px;
	top: 50%;
	margin-top: -21px;
	{/block:IfNotShowAudioTitle}
}

.artistLabel{color: {color:Post Border};font-size: 1.4em;}

.caption_audio div.borderTop{
	padding-top:10px;
	border-top:1px solid {color:Links Border};
}

/* CAPTION HTML ELEMS */

{block:indexpage}
.caption h1{font-size: 1.5em; margin: 10px 0px;line-height: 1.4em;}
.caption h2{font-size: 1.2em;  margin: 8px 0px; line-height: 1.3em;}
.caption h3{font-size: 1em; line-height: 1.2em;}
.caption h4{font-size: 1em;}
.caption h5{font-size: 1em;}
.caption h6{font-size: 1em;}
{/block:indexpage}

.caption img{
	margin:0px auto;
	height:auto;
	{block:IndexPage}
		max-width: 240px;
		width:expression(document.body.clientWidth > 240? "240px": "auto" );
		{block:IfPostMediumSize}
			max-width: 390px;
			width:expression(document.body.clientWidth > 390? "390px": "auto" );
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			max-width: 490px;
			width:expression(document.body.clientWidth > 490? "490px": "auto" );
		{/block:IfPostLargeSize}
	{/block:IndexPage}
	{block:PermalinkPage}
		max-width: 490px;
		width:expression(document.body.clientWidth > 500? "500px": "auto" );
	{/block:PermalinkPage}
}

/* video post */

.videoPost{
	overflow:hidden;
	{block:IndexPage}
		width: 250px;
		{block:IfPostMediumSize}
			width: 400px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			width: 500px;
		{/block:IfPostLargeSize}
	{/block:IndexPage}
	margin:0px auto -4px;
}
.videoPost embed, .videoPost iframe{
	width:100%;
}

.highlight .videoPost{width:100% !important;}

/* answer post */

.askerIcon{
	border-bottom:1px solid {color:Links Border};
	padding-left: 8px;
	padding-bottom: 10px;
	margin-bottom: 5px;
}
.askerIcon img{vertical-align:middle;}
.askerIcon span{
	margin-left: 5px;
	font-size: 0.8em;
	color: {color:Text};
}

/* photoset post */

	.photosetCircle:hover{
		background-color: {color:Post Background} !important;
	}

{block:IfNotPhotosetAsSlider}
.photoSet{
	{block:IndexPage}
		width: 250px;
		{block:IfPostMediumSize}
			width: 400px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			width: 500px;
		{/block:IfPostLargeSize}
	{/block:IndexPage}
	//overflow:hidden;
	margin:3px auto 0px;
}
{/block:IfNotPhotosetAsSlider}

.photoSet{
	{block:PermalinkPage}
		width: 500px;
		margin: 3px auto -3px;
	{/block:PermalinkPage}
}

.tc_caption_bubble_display{
	position:relative;
	padding:15px;
	padding-top:10px;
	z-index:500;
	margin-top: -8px;
	background-color: {color:Post Background};

	/* fix bottom corners */
	-webkit-border-bottom-right-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	-moz-border-radius-bottomright: 5px;
	-moz-border-radius-bottomleft: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;

}
.tc_caption_bubble_display:after {
	content:"";
	position:absolute;
	top:-18px;
	left:20px;
	border:10px solid transparent;
	border-bottom-color: {color:Post Background};
	/* reduce the damage in FF3.0 */
	display:block; 
	width:0;
}

.indexTags{position:absolute;bottom:0px;}
.indexTags a.atag{margin-right: 10px;color:{color:Text}!important;border:0;}


{block:IfInfiniteScroll}
#pagin{display: none;}
{/block:IfInfiniteScroll}

#infscr-loading{
	bottom: 30px;
	position: fixed;
	left: 115px;
	width:43px;
	height:20px;
}
#infscr-loading div{
	display: none !important;
	visibility: hidden !important;
	opacity: 0 !important;
}

.highlightcaption{display:none;z-index: 9999;}

/* instagram */
{block:IfInstagramID}
	#instagram_content{
		position:relative;
		margin-top: 30px;
		margin-left: 11px;
		width:200px;
		height:200px;
		border:7px solid #ffffff;
	 	-webkit-transform: rotate(1deg);
		-moz-transform: rotate(1deg);
		-o-transform: rotate(1deg);
	}
	
	#paperclip{
		position:absolute;
		top:20px;
        border:0px solid; 
		left:-40px;
		width:72px;
		height:59px;
		background: url(http://static.tumblr.com/dbek3sy/0rIm7cxy6/paperclip.png) no-repeat;
		-webkit-transform: rotate(-1deg);
		-moz-transform: rotate(-1deg);
		-o-transform: rotate(-1deg);
	}
    
	#shadow{
		background: url(http://static.tumblr.com/fftf9xi/0rMllgsfy/corner-shadow.png) no-repeat;
		width:169px;
		height:110px;
		position:absolute;
		top:118px;
		left:61px;
		z-index:-1;
	}
{/block:IfInstagramID}


/* permalink notes */

h4{font-weight: bold;font-size:1.3em;}
.prevNext{
    border:0;
	color:{color:Text};
}

.tags{color:{color:Links Hover};}

.perma_notes {width:100%;}


.more_notes_link{
	width:30px;
	height:30px;
	font-size:16px;
	background-color:{color:Post Border};
	color:{color:Post Title};
}

.more_notes_link_container{
	margin:0;
	padding:0;
	width:30px;
	height:30px;
	list-style:none;
	border:none;
	float:left;
	margin-right:4px;
	margin-bottom:4px;
	background-color:{color:Post Border};
	color:{color:Post Title};
}

.quote_icon{
	position:relative;
    font-size:6em;
    width:20px;
    height:20px;
    opacity:0.2;
}

.quoteIcon1{
	left:-16px;
	top:20px;
}
.quoteIcon2{
	left:-24px;
	top:24px;
}

.linkIcon{
	bottom: 0;
	font-size: 6em;
	height: 65px;
	overflow: hidden;
	position: absolute;
	right: 0;
	width: 80px;
	z-index: 0;
	opacity: 0.2;
}
.linkIcon span{
	position: absolute;
	left: 0px;
	bottom: 0px;
}


.note more_notes_link_container li a{color:{color:Sidebar Links};}
.perma_notes blockquote{display:none;}

.tipsy {padding: 5px; font-size: 10px;}
.tipsy-inner {
	padding: 5px 8px 4px 8px; 
	background-color: {color:Post Border}; 
	color: {color:Post Title}; 
	max-width: 200px;
	width:expression(document.body.clientWidth > 200? "200px": "auto" );
	text-align: center;
}
.tipsy-inner {-moz-border-radius:3px; -webkit-border-radius:3px;}
.tipsy-north {background-position: top center;}
.tipsy-south {background-position: bottom center;}
.tipsy-east {background-position: right center;}
.tipsy-west {background-position: left center;}

{block:IfDisqusID}
	/* disqus */
	#dsq-global-toolbar{margin-top:0px !important;}
	.dsq-reply{margin-top: 10px !important;}
	.dsq-comment:first-child{margin-bottom:0px !important;}
	#dsq-footer{display:none;}
	.post-content .post-message p{font-size: 0.9em !important;}
{/block:IfDisqusID}
#pagin {
    margin:0;
    margin-left: 65px;
	padding: 0;
	list-style: none;
	margin-left:290px;
    padding-top:40px;
    padding-bottom:40px;
    margin-bottom:40px;
}

#pagin li {
	float: left;
	margin-right: 10px;
}

#pagin li a {
	display: block;
	text-decoration: none;
	color: {color:pagination};
    border:1px dotted {color:pagination};
	font: bold 15px Arial, sans-serif;
	padding: 10px 16px;

	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
    text-decoration:none !important;    

}

#pagin li a.current {
	color: white;
background-color:{color:pagination};
border:1px solid {color:pagination};

}

#pagin li a:hover {
text-decoration:none !important;
color: {color:pagination} !important;
}

#pagin li a:active,#pagin li a.current:active {
	
}

#pagin li a.current:hover {
text-decoration:none !important;
color: {color:Post Title} !important;
}

.hide{
    
   }

#gifLoad{
	position:absolute;
	left:300px;
	top: 50px;
}

#back-top{
    position:fixed;
    right:15px;
    bottom:0px;
    height:20px;
    width:40px;
    background-color:{color:post border};
    padding-top:5px;
    color:white;
    z-index:3000;
    display:none;
     text-decoration:none !important;
    border:none !important;
}

#back-top a{
    display:block;
    cursor:pointer;
    text-align:center;
    color:{color:post title};
    font-family:verdana, sans serif;
     text-decoration:none !important;
    border:none !important;
}
    
#back-top a:hover {
    text-decoration:none !important;
	border:none !important;
 	color:{color:post title} !important;
}

/*++++++++++ .highlightposts ++++++++++*/
{block:IfNot1Column}

	.tc_posts.highlight{
		width: 542px;
		{block:IfPostMediumSize}
			width: 842px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			width: 1042px;
		{/block:IfPostLargeSize}
		float:left;
	}

	/* highlight audio */
	
	/* if not audio album image */ 
	.tc_posts.highlight.audioPost .audioplayercontainer, 
	.tc_posts.highlight.audioPost .audioHighlight,
	.tc_posts.highlight.audioPost .audioimage{width:100%}
	
	.tc_posts.highlight.audioPost.albumYep .permalink_links{
		margin:0px;
		padding: 0px 10px 10px 10px;
		width: 96%;
	}
	
	/* if audio album image */ 
	.tc_posts.highlight.audioPost.albumYep .audioplayercontainer, 
	.tc_posts.highlight.audioPost.albumYep .audioHighlight,
	.tc_posts.highlight.audioPost.albumYep .audioimage{
		width: 268px;
		{block:IfPostMediumSize}
			width: 417px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			width: 517px;
		{/block:IfPostLargeSize}
		float:left;
	}
	
	.tc_posts.highlight.audioPost.albumYep .permalink_links{
		float:left;
		margin:0px;
		padding: 0px 10px 10px 10px;
		width: 249px;
		{block:IfPostMediumSize}
			width: 400px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			width: 500px;
		{/block:IfPostLargeSize}
	}
	
	.tc_posts.highlight.audioPost .audioHighlight .tc_caption_bubble_display{margin-top:0px !important;}
	
	.tc_posts.highlight.audioPost.albumYep .audioimage{margin-bottom:3px;}
	
	/* highlight video */
	
	.tc_posts.highlight .videoPost iframe,
	.tc_posts.highlight .videoPost embed{
		height: 380px;
		{block:IfPostMediumSize}
			height: 680px;
		{/block:IfPostMediumSize}
		{block:IfPostLargeSize}
			height: 880px;
		{/block:IfPostLargeSize}
	}

{/block:IfNot1Column}

#circleG{
width:46.666666666666664px;
    position:absolute;
    left:300px;
	top: 50px;
}

.circleG{
background-color:#FFFFFF;
float:left;
height:10px;
margin-left:5px;
width:10px;
-webkit-animation-name:bounce_circleG;
-webkit-border-radius:7px;
-webkit-animation-duration:1.9500000000000002s;
-webkit-animation-iteration-count:infinite;
-webkit-animation-direction:linear;
-moz-animation-name:bounce_circleG;
-moz-border-radius:7px;
-moz-animation-duration:1.9500000000000002s;
-moz-animation-iteration-count:infinite;
-moz-animation-direction:linear;
opacity:0.3;
-o-animation-name:bounce_circleG;
border-radius:7px;
-o-animation-duration:1.9500000000000002s;
-o-animation-iteration-count:infinite;
-o-animation-direction:linear;
-ms-animation-name:bounce_circleG;
-ms-animation-duration:1.9500000000000002s;
-ms-animation-iteration-count:infinite;
-ms-animation-direction:linear;
opacity:0.3}

#circleG_1{
-webkit-animation-delay:0.39s;
-moz-animation-delay:0.39s;
-o-animation-delay:0.39s;
-ms-animation-delay:0.39s;
}

#circleG_2{
-webkit-animation-delay:0.91s;
-moz-animation-delay:0.91s;
-o-animation-delay:0.91s;
-ms-animation-delay:0.91s;
}

#circleG_3{
-webkit-animation-delay:1.17s;
-moz-animation-delay:1.17s;
-o-animation-delay:1.17s;
-ms-animation-delay:1.17s;
}

@-webkit-keyframes bounce_circleG{
0%{
opacity:0.3}

50%{
opacity:1;
background-color:#000000}

100%{
opacity:0.3}

}

@-moz-keyframes bounce_circleG{
0%{
opacity:0.3}

50%{
opacity:1;
background-color:#000000}

100%{
opacity:0.3}

}

@-o-keyframes bounce_circleG{
0%{
opacity:0.3}

50%{
opacity:1;
background-color:#000000}

100%{
opacity:0.3}

}

@-ms-keyframes bounce_circleG{
0%{
opacity:0.3}

50%{
opacity:1;
background-color:#000000}

100%{
opacity:0.3}

</style>
<link href="http://www.themecloud.co/themes/escape/common.css" rel="stylesheet" type="text/css">
</head>

<body>
<!-- FB comments -->
<div id="fb-root"></div>
<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function replaceIfFlash(version,element_id,replacement_string){
        document.getElementById(element_id).innerHTML=replacement_string;
	}
	function renderVideo(element_id,src,width,height,flashvars){
	    var agent=navigator.userAgent.toLowerCase();var is_iphone=(agent.indexOf("iphone")!=-1);if(is_iphone){document.getElementById(element_id).innerHTML='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="'+width+'" height="'+height+'" codebase="http://www.apple.com/qtactivex/qtplugin.cab"><param name="src" value="'+src+'"><param name="qtsrc" value="'+src+'"><param name="autoplay" value="false"><embed src="'+src+'" qtsrc="'+src+'" width="'+width+'" height="'+height+'" pluginspage="http://www.apple.com/quicktime/"></embed></object>'}else{replaceIfFlash(10,element_id,'<embed type="application/x-shockwave-flash" src="http://assets.tumblr.com/swf/video_player.swf?22" bgcolor="#000000" quality="high" class="video_player" allowfullscreen="true" height="'+height+'" width="'+width+'" flashvars="file='+encodeURIComponent(src)+(flashvars?"&"+flashvars:"")+'"></embed>')}	
	}
	
</script>

<div style="height:10px; width:100%; position:fixed; top:0; background-color:{color:Post Border}; z-index:10000000;"></div>


<div id="tc_container">

<div id="tc_sidebar" class="left">
	<div style="padding:10px;padding-left: 20px;">
		{block:ifnotlogoimage}    <a href="/"><h1 class="bebasTitle" style="padding-top:25px;" {block:ifsidebarbackground}margin-top:30px;{/block:ifsidebarbackground}">{Title}</h1></a>{/block:ifnotlogoimage}
		{block:iflogoimage}<a href="/" style="border-bottom:0;"><img style="max-width:100%; padding-bottom:20px; display: block;margin-left: auto;margin-right: auto; "src="{image:logo}"/></a>{/block:iflogoimage}

		{block:Description} 
			<h3>About</h3>
			<div id="tc_description">
				{Description}
				
			</div>
		{/block:Description}
		
		<ul id="menu_links">
			{block:AskEnabled}<li><a href="/ask">Message</a></li>{/block:AskEnabled}
			{block:SubmissionsEnabled}<li><a href="/submit">Submit</a></li>{/block:SubmissionsEnabled} 
            <li><a href="/archive">Archive</a></li>
            <li><a href="/rss">RSS</a></li>
			<li><a href="http://themecloud.co/themes/escape/">Theme</a></li>
			
			{block:HasPages} 
				{block:Pages} 
					<li><a href="{URL}" >{Label}</a></li>
				{/block:Pages}
			{/block:HasPages}
		</ul>
<!-- BEGIN: Powered by Supercounters.com -->
<left><script type="text/javascript" src="http://widget.supercounters.com/texthit.js"></script><script type="text/javascript">var sc_texthit_var = sc_texthit_var || [];sc_text_hit(527159,"Visits","#F88559");</script><br><noscript><a href="http://www.supercounters.com/">Free tumblr hit counter</a></noscript>
</left>
<!-- END: Powered by Supercounters.com -->


        
		{block:IfInstagramID}
			<h3>Instagram <span><a href="http://statigr.am/{text:Instagram ID}" target="_blank">@{text:Instagram ID}</a></span></h3>
			<div id="instagram_content">
				<div id="paperclip"></div>
					<img src="http://www.themecloud.co/inst.asp?u={text:Instagram ID}" style=" overflow:hidden; width:200px; height: 200px">
				<div id="shadow"></div>
			</div>
		{/block:IfInstagramID}
        
	</div>	
</div>

{block:IndexPage}
<div id="circleG">
<div id="circleG_1" class="circleG">
</div>
<div id="circleG_2" class="circleG">
</div>
<div id="circleG_3" class="circleG">
</div>
</div>
    
    
{/block:IndexPage}

<div id="tc_posts_container" class="left">

{block:Posts}
<div class="tc_posts {block:indexpage}{block:HasTags}{block:Tags}{tag} {/block:Tags}{/block:HasTags} done{/block:indexpage}  {block:Audio}audioPost {block:AlbumArt}albumYep{/block:AlbumArt} {/block:Audio} " id="tc_post_{PostID}" style="{block:PermalinkPage}width:700px;{block:Date}width:510px !important;{/block:Date}{/block:PermalinkPage}">

{block:Text}
	{block:Title}
		<div class="padding-title">
			<h2 class="title"><a href="{Permalink}" class="linkTitle">{Title}</a></h2>
		</div>
	{/block:Title}
	<div class="caption padding">{Body}</div>
	
	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Text}


{block:Answer}
	<div class="padding-title">
		<h2 class="title"><a href="{Permalink}" class="linkTitle">Q:<i> {Question}</i></a></h2>
	</div>
	<div class="padding">
		<div class="askerIcon">
			<img width="24px" src="{AskerPortraitURL-24}"/> <span><i>Asked {Asker}</i></span>
		</div>
		<div class="caption" style="padding-top:10px;">
			{Answer}
		</div>
	</div>
	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Answer}

{block:Link}
    <div class="padding-title">
    	<h2 class="title link">
			<a href="{URL}" {Target}>{Name}<span class="pictos" style="font-weight:normal;"> ;</span></a>
		</h2>
	</div>
	<div class="caption padding">{Description}</div>

	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{block:Link}


{block:Photo}
	<div class="padding-title">
		<div class="tc_photo {block:IfNotShowcaptionsonhomepage}tc_photo_round_bottom{/block:IfNotShowcaptionsonhomepage} done">
			{block:IndexPage}
                {block:ifShowPhotoHoverButtons}
				<div class="tc_post_controls">
					<div class="tc_post_controls_container">
						<a href="http://www.themecloud.co/themes/Escape/reblog.asp?q={ReblogURL}" class="pictos reblogIcon">1</a>
						<a class="pictos heart_icon" href="javascript:void(0);" rel="{ReblogURL}" id="{PostID}">k</a>
						<a href="{Permalink}" class="noteCount"><span class="RoundThatShit">{NoteCount}</span></a>
					</div>
					<div class="tc_post_controls_background"></div>
				</div>
                {/block:ifShowPhotoHoverButtons}
			{/block:IndexPage}
            {block:ifNotShowPhotoHoverButtons}
            <a href="{Permalink}">
            {/block:ifNotShowPhotoHoverButtons}
				{block:IndexPage}
					{block:IfNotPostLargeSize}
						{block:IfNotPostMediumSize}
							<img border="0" class="preload photos photoPost" src="{PhotoURL-250}"/>
						{/block:IfNotPostMediumSize}
					{/block:IfNotPostLargeSize}
					{block:IfNotPostLargeSize}
						{block:IfPostMediumSize}
							<img border="0" class="preload photos photoPost" src="{PhotoURL-400}"/>
						{/block:IfPostMediumSize}
					{/block:IfNotPostLargeSize}
					{block:IfPostLargeSize}
							<img border="0" class="preload photos photoPost" src="{PhotoURL-500}"/>
					{/block:IfPostLargeSize}
					<span class="highresPhoto" style="display:none;">{PhotoURL-HighRes}</span>
				{/block:IndexPage}
				{block:permalinkpage}{LinkOpenTag}<img border="0" class="preload photos" src="{PhotoURL-HighRes}"/>	{LinkCloseTag}{/block:permalinkpage}
			{block:ifNotShowPhotoHoverButtons}
            </a>
            {/block:ifNotShowPhotoHoverButtons}
		</div>
	</div>
	{block:IndexPage}
		{block:IfShowcaptionsonhomepage} 
			{block:Caption} 
				<div class="caption padding tc_caption_bubble_display">
					{Caption}
				</div>
			{/block:Caption}
		{/block:IfShowcaptionsonhomepage}
	{/block:IndexPage}
	{block:PermalinkPage}
		{block:Caption}
			<div class="caption padding tc_caption_bubble_display">
				{Caption}
			</div>
		{/block:Caption}
	{/block:PermalinkPage}
{/block:Photo}

{block:Photoset}
	<div class="padding-title">
		{block:IndexPage}
			{block:IfPhotosetAsSlider}
				<div class="photosetPost done" rel="{PostID}">
					{block:Photos} 
						<img class="photos" src="{PhotoURL-500}" id="" />
					{/block:Photos}
					<div class="photosetCircle_content"></div>
				</div>
			{/block:IfPhotosetAsSlider}
			
			{block:IfNotPhotosetAsSlider}
				<div class="photoSet">
					{block:IfNotPostMediumSize}{block:IfNotPostLargeSize}{Photoset-250}{block:IfNotPostLargeSize}{/block:IfNotPostMediumSize}
					{block:IfPostMediumSize}{block:IfNotPostLargeSize}{Photoset-400}{/block:IfNotPostLargeSize}{block:IfPostMediumSize}
					{block:IfPostLargeSize}{Photoset-500}{/block:IfPostLargeSize}
				</div>
				<div class="photosetPost done" rel="{PostID}" style="display:none;">
					{block:Photos} 
						<img class="photos" src="{PhotoURL-500}"/>
					{/block:Photos}
					<div class="photosetCircle_content"></div>
				</div>
			{/block:IfNotPhotosetAsSlider}
			
		{/block:IndexPage}
		
		{block:PermalinkPage}
			<div class="photoSet">{Photoset-500}</div>
			{block:Caption}
				<div class="caption padding tc_caption_bubble_display">
					{Caption}
				</div>
			{/block:Caption}
		{/block:PermalinkPage}
	</div>
	{block:IndexPage}
		{block:IfShowcaptionsonhomepage} 
			<div class="caption padding tc_caption_bubble_display">
				{block:Caption}
					{Caption}
				{/block:Caption}
			</div>
		{/block:IfShowcaptionsonhomepage}
	
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Photoset}


{block:Quote}
	<div class="padding-title">
		<h2 class="title">
			<div class="quote_icon quoteIcon1 left">“</div>
			<a href="{Permalink}" class="linkTitle">{Quote}</a>
			<div class="quoteIcon2 quote_icon right">”</div>
			<div class="clear"></div>
		</h2>
	</div>
	{block:Source}
		<div class="caption padding"><i><b> - {Source}</b></i></div>
	{/block:Source}


	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Quote}


{block:Chat}
	{block:Title}
		<div class="padding-title">
			<h2 class="title"><a href="{Permalink}" class="linkTitle">{Title}</a></h2>
		</div>
	{/block:Title}
	<div style="padding: 0px 10px;">
		<ul class="chat">
			{block:Lines}
				<li class="{Alt} user_{UserNumber}">
					{block:Label}
						<span class="label">{Label}</span>
					{/block:Label}
				<span class="caption">{Line}</span>
				</li>
			{/block:Lines}
		</ul>
	</div>

	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Chat}

{block:Audio}
	{block:IfNotShowAudioTitle}
		<div class="audioplayercontainer">
			{block:AlbumArt}
				<div class="padding-title">
					<img class="audioimage" src="{AlbumArtURL}" alt="{block:Artist}{Artist}{/block:Artist}{block:TrackName} - {TrackName}{/block:TrackName}" />
				</div>
			{/block:AlbumArt}
			<div class="audioplayerout">
				<div class="audioplayerinto done" id="{postID}">
					{AudioPlayerWhite}
				</div>
			</div>
			<div class="clear"></div>
		</div>
	{/block:IfNotShowAudioTitle}
	{block:IfShowAudioTitle}
		{block:AlbumArt}
			<div class="padding-title">
				<img class="audioimage" src="{AlbumArtURL}" alt="{block:Artist}{Artist}{/block:Artist}{block:TrackName} - {TrackName}{/block:TrackName}" />
			</div>
		{/block:AlbumArt}
	{/block:IfShowAudioTitle}
	<div class="audioHighlight">
		{block:IfShowAudioTitle}
			<div class="titleAudio_container padding {block:AlbumArt}tc_caption_bubble_display{/block:AlbumArt}">
				{block:Artist}<span class="artistLabel"><b>{Artist}</b></span>{/block:Artist}
				<br>
				{block:TrackName}<span class="trackLabel"><b>{TrackName}</b></span>{/block:TrackName}
				
				<div class="audioplayerout">
					<div class="audioplayerinto done" id="{postID}">
						{AudioPlayerWhite}
					</div>
				</div>
			</div>
		{/block:IfShowAudioTitle}
		
		{block:Caption}
			<div class="caption {block:IfShowAudioTitle}caption_audio{/block:IfShowAudioTitle}{block:IfNotShowAudioTitle}padding tc_caption_bubble_display{/block:IfNotShowAudioTitle}">
			{block:IfShowAudioTitle}
			<div class="borderTop"></div>
		{/block:IfShowAudioTitle}
			{Caption}
			</div>
		{/block:Caption}
	
	</div>
	
	{block:IndexPage}
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Audio}

{block:Video}
	<div class="padding-title">
		{block:IndexPage}
			<div class="videoPost done" id="{postID}">
				{block:IfNotPostMediumSize}{block:IfNotPostLargeSize}{Video-250}{block:IfNotPostLargeSize}{/block:IfNotPostMediumSize}
				{block:IfPostMediumSize}{block:IfNotPostLargeSize}{Video-400}{/block:IfNotPostLargeSize}{block:IfPostMediumSize}
				{block:IfPostLargeSize}{Video-500}{/block:IfPostLargeSize}
			</div>
		{/block:IndexPage}
		{block:PermalinkPage}
			<div class="videoPost" id="{postID}">{Video-500}</div>
			
			{block:Caption}
				<div class="caption padding {block:IndexPage}tc_caption_bubble_display{/block:IndexPage}">
					{Caption}
				</div>
			{/block:Caption}
		{/block:PermalinkPage}
	</div>
	{block:IndexPage}
		{block:IfShowcaptionsonhomepage}
			<div class="caption padding {block:IndexPage}tc_caption_bubble_display{/block:IndexPage}">
				{block:Caption}
					{Caption}
				{/block:Caption}
			</div>
		{/block:IfShowcaptionsonhomepage}

		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	{/block:IndexPage}
{/block:Video}

{block:IndexPage}

<div class="highlightcaption">
	<div class="padding" style="padding-top:0px !important;">
		<div class="permalink_links">
			<span class="pictos" style="font-weight:500; font-size:12px;">t</span><a href="{Permalink}"> {TimeAgo}</a>
			<div class="right">
				<span class="pictos" style="font-weight:normal; font-size:12px;">w</span>
				<a href="{Permalink}">{NoteCountWithLabel}</a>
			</div>
		</div>
	</div>	
</div>
{/block:IndexPage}

<div class="clear"></div>
<div class="tc_shadow {block:IfShowcaptionsonhomepage}{block:Caption}tc_caption_shadow{/block:Caption}{/block:IfShowcaptionsonhomepage}"></div>

</div> <!-- .tc_posts -->

{block:PermalinkPage}
{block:Date}
	<div class="left" style="width:420px;">
		<div class="tc_posts permalinkPage" style="width:420px;">
			<div style="padding:10px;">
				<div class="left"><h4 style="margin-bottom:20px;">{block:NoteCount}{NoteCountWithLabel}{/block:NoteCount}</h4></div>
				{block:PermalinkPagination}
					<div id="paginationPost" class="right">
						{block:NextPost}<a class="prevNext" style="margin-right:7px;" href="{NextPost}"><span class="pictos">[</span> Prev Post</a>{/block:NextPost}
						{block:PreviousPost}<a class="prevNext" href="{PreviousPost}"> Next Post <span class="pictos">]</span></a>{/block:PreviousPost}
					</div>
				{/block:PermalinkPagination}
				<div class="clear"></div>
					<div class="permaThings">
						<span class="pictos">\</span><span>This was posted {TimeAgo}</span>
						</br>
					</div>
		
				{block:RebloggedFrom}
					<div class="permaThings">
						<span class="pictos">1</span><span>This was reblogged from <a href="{ReblogParentURL}">{ReblogParentName}</a></span>
						</br>
					</div>
				{/block:RebloggedFrom} 
				
				{block:HasTags}
					<div class="permaThings">
						<span class="pictos">z</span>This has been tagged with: {block:Tags}<a href="{TagURL}" class="tags">{Tag}</a>, {/block:Tags}
					</div>
				{/block:HasTags}
				
				{block:ContentSource}
					<div class="permaThings">
						<span class="pictos">R</span><a href="{SourceURL}" id="sourceUrl">{SourceURL}</a></span> 
						</br>
					</div>
				{/block:ContentSource}
				
				{block:PostNotes}
					<div class="perma_notes" style="margin-top:20px;">
						{PostNotes}
						<div class="clear"></div>
					</div>
				{/block:PostNotes}
			</div>
		</div><!-- tc_posts -->



		{block:IfFacebookCommentPermalinkPage}
			<div class="tc_posts" style="width:420px;margin-top:20px;">
				<div style="padding:10px;">
					<h4 style="margin-bottom:10px;">Facebook comments</h4>
					<fb:comments href="{Permalink}" num_posts="5" width="400"></fb:comments>
				</div>
			</div>
		{/block:IfFacebookCommentPermalinkPage}
		
		{block:IfNotFacebookCommentPermalinkPage}
			{block:IfDisqusID}
			<div class="tc_posts" style="width:420px;margin-top:20px;">
				<div style="padding:10px;">
					<script type="text/javascript">
						var disqus_url = "{Permalink}"; 
						var disqus_title ="{block:PostTitle}{PostTitle}{/block:PostTitle}";
					</script>
					<div id="disqus_thread"></div>
					<script type="text/javascript">
						(function() {
							var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
							dsq.src = 'http://{text:Disqus ID}.disqus.com/embed.js';
							(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
						})();
					</script>
					<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript={text:Disqus ID}" {Target}>comments powered by Disqus.</a></noscript>
					<script type="text/javascript">
						var disqus_shortname = '{text:Disqus ID}';
						(function () {
						  var s = document.createElement('script'); s.async = true;
						  s.src = 'http://{text:Disqus ID}.disqus.com/count.js';
						  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
						}());
					</script>
				</div>
			</div>
			{/block:IfDisqusID}
		{/block:IfNotFacebookCommentPermalinkPage}
		
		
		

	</div>
{/block:Date}
{/block:PermalinkPage}


{/block:Posts} 

</div>
<div class="clear"></div>
</div> <!-- #tc_container -->

{block:IndexPage}
	{block:Pagination}
		<ul id="pagin">
			{block:PreviousPage}
				<li><a href="{PreviousPage}">Previous</a></li>
			{/block:PreviousPage}
			{block:JumpPagination length="5"}
				{block:CurrentPage}
					<li><a class="current" href="{URL}"><strong>{PageNumber}</strong></a></li>
				{/block:CurrentPage}
				{block:JumpPage}
					<li><a href="{URL}">{PageNumber}</a></li>
				{/block:JumpPage}
			{/block:JumpPagination}
			{block:NextPage}
				<li><a id="nextPage" href="{NextPage}">Next</a></li>
			{/block:NextPage}
		</ul>
	{/block:Pagination}
    {block:IfShowScrollToTop}
    <div id="back-top"><a href="#top">^</a></div>
    {/block:IfShowScrollToTop}
{/block:IndexPage}

<!-- js codes -->

<script src="http://escape.tcs3.co.uk/themes/escape/getjs.asp?id=306478&fn=core2"></script>
<script src="http://cufon.shoqolate.com/js/cufon-yui.js" type="text/javascript"></script>
<script src="http://static.tumblr.com/dbek3sy/8HIm3i3kn/bebas-neue.cufonfonts.js" type="text/javascript"></script>

<script type="text/javascript">
	// JavaScript Document
	var $content = $("#tc_posts_container");
    $(function(){
		Cufon.replace('h1.bebasTitle', { fontFamily: 'Bebas Neue', hover: true }); 
		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});
	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
	});
	
	function repairAudioPlayer(){
		$('.audioplayerinto.done').each(function(){
			var audioID = $(this).attr("id");
			var $audioPost = $(this);
			$.ajax({
				url: '/api/read/json?id=' + audioID,
				dataType: 'jsonp',
				timeout: 50000,
				success: function(data){
					var color = "{color:Music player}";
					$audioPost.html(data.posts[0]["audio-player"].replace("color=FFFFFF", "color=" + color.replace("#", "")));
				}
			});
			$(this).removeClass("done");
		});
	};

	function repairVideoPlayer(){
		$('.videoPost.done').each(function(){
			var videoID = $(this).attr("id");
			var $videoPost = $(this);
			var videoWidth = "-250";
			{block:IfPostMediumSize}
				videoWidth = "-500";
			{/block:IfPostMediumSize}
			{block:IfPostLargeSize}
				videoWidth = "-500";
			{/block:IfPostLargeSize}
		if($videoPost.find("div#tumblr_video_container_"+videoID).length){
				$.ajax({
					url: '/api/read/json?id=' + videoID,
					dataType: 'jsonp',
					timeout: 50000,
					success: function(data){
						$videoPost.html(data.posts[0]["video-player"+videoWidth]);
						{block:IfNot1Column}
							$content.masonry();
						{/block:IfNot1Column}
					}
				});
			}
			$videoPost.removeClass("done");
		});
	}
	
</script>

{block:PermalinkPAge}
<script>
	$(function(){
		$content.animate({opacity:1},500);
	});
</script>
{/block:PermalinkPAge}

{block:IndexPage}

{block:IfInfiniteScroll}<script type="text/javascript" src="http://static.tumblr.com/dbek3sy/Qyblrgjfn/jqueryinfintescroll.js"></script>{/block:IfInfiniteScroll}

<script type="text/javascript">
// core js?

	var colWidth = 260;
	{block:IfPostMediumSize}
		var colWidth =  410;
	{/block:IfPostMediumSize}
	{block:IfPostLargeSize}
		var colWidth = 510;
	{/block:IfPostLargeSize}

$(function(){
	Cufon.replace('h1.bebasTitle', { fontFamily: 'Bebas Neue', hover: true }); 
	
	{block:IfNot1Column}
		if($('.tc_posts.highlight.done').length){highLightPost();}
	{/block:IfNot1Column}
	if($('.audioplayerinto.done').length){repairAudioPlayer();}
	{block:IfPhotosetAsSlider}
    	if($(".photosetPost.done").length){photoSet();}
    {/block:IfPhotosetAsSlider}
    if($('.RoundThatShit').length){RoundThatShit();}
	
	
	/* photoset */
	$(".photosetCircle").live("click", function(){
		var classCircle = $(this).attr("id");
		var $parent = $(this).parent().parent();
		$parent.find("img").hide();
		$parent.find("img.photoN_"+classCircle).fadeIn(200);
		{block:IfNot1Column}
			$content.masonry({isAnimated: false});
		{/block:IfNot1Column}
		return false;
	});
	
	/* heart like */
	$(".heart_icon").live("click", function() {
		var noteCount = $(this).parent().find(".noteCount");
		var noteCountText = parseInt(noteCount.text())+1;
		var reblogIcon = $(this).parent().find(".reblogIcon");
		
		var $this = $(this);
		var id_post = $this.attr('id');
		var reblog_key = $this.attr('rel').slice(-8);
		var like_url = 'http://www.tumblr.com/like/'+reblog_key+'?id='+id_post;
		$('#likeIframe').attr('src', like_url);
		$(this).animate({left: "25px", opacity: 0},200);
		noteCount.animate({right: "24px"},200);
		reblogIcon.animate({left: "25px"},200);
		
		if((noteCount.text().indexOf("k") == -1) && (noteCount.text().indexOf("m") == -1)){
			noteCount.text(noteCountText);
		}
	});

});

function photoSet(){
	$(".photosetPost.done").each(function(){
		$thisIMG = $(this).find("img");
		$thisIMG.each(function(e){
			$(this).addClass("photoN_"+e);
			if(e >= 1){
				$(this).hide();
			}
			$(this).parent().find(".photosetCircle_content").append("<a class='photosetCircle' id='"+e+"'></a>");
		});
		$(this).removeClass("done");
	});
}

function HidePosts(){
    $(".hide").each(function(){
        var selector = $(this).attr('data-option-value');
        var $removable = $content.find( selector );
        $content.masonry( 'remove', $removable);
    }).removeClass("hide");
}
{block:IfNot1Column}

	function highLightPost(){
		$('.tc_posts.highlight.done').css("width",(colWidth*2)+22);
		var $highlight = $("#"+$('.tc_posts.highlight.done').attr("id"));
		
		/*image posts*/
		if($highlight.find(".photoPost").length){
			var $findHighres = $highlight.find(".highresPhoto").text();
			
			$highlight.find(".photoPost").attr("src", $findHighres);
		}
	
        /*video posts*/
		if($highlight.find(".videoPost").length){
			/* if spotify */
			var spotify = $highlight.find(".videoPost iframe").attr("src");
			if(spotify.indexOf("spotify") > 1){
				$highlight.find(".videoPost").css({"height":"90px","overflow":"hidden"}).html("<iframe src='"+spotify+"' width='"+((colWidth*2)+80)+"' frameborder='0' allowtransparency='true'></iframe>");
			}
		}
		/* photoset */
		if($highlight.find(".photoSet").length){
			$highlight.find(".photoSet").remove();
			photoSet();
			$highlight.find(".photosetPost").show();
		}
        $highlight.removeClass("done");
	}
	
{/block:IfNot1Column}

	function RoundThatShit(){
		$(".RoundThatShit").each(function(){
			iNumber = $(this).html();
			if (iNumber.toString().length >= 7) {
				$(this).html(Math.round(iNumber / 1000000) + "m");
			}
			else if (iNumber.toString().length >= 4){
				$(this).html(Math.round(iNumber / 1000) + "k");
			}
			else{
				$(this).html(iNumber); 
			}
		}).removeClass("RoundThatShit");
	}


	var IfNot1Column= false;
	{block:IfNot1Column}
		IfNot1Column= true;
	{/block:IfNot1Column}
	
	var IfPhotosetAsSlider = false;
	{block:IfPhotosetAsSlider}
		IfPhotosetAsSlider = true;
	{/block:IfPhotosetAsSlider}

</script>

{block:IfNot1Column}
<script>
	var containerWidth = $content.width();
	var iScroll = 0;
	//var containerWidth = ($("#tc_container").width() - $("#tc_sidebar").width()) - 10
	$(window).load(function(){
		/* masonry + infinitescroll */
		//alert(colWidth + 22)
		$content.masonry({
			itemSelector: ".tc_posts",
			isAnimated: IfNot1Column,
			columnWidth: colWidth + 22
		}),
		$content.infinitescroll({
			navSelector : '#pagin',
			nextSelector : '#pagin a#nextPage',
			itemSelector : '.tc_posts',
			loading: {
			finishedMsg: '',
			img: 'http://static.tumblr.com/dbek3sy/4fUm7il5k/ajax-loader.gif'
			},
			bufferPx : 600,
			debug : false,
		},
		// call masonry as a callback.
		function(newElements){
			var $newElems = $( newElements );
			$newElems.hide();
			
			//if($('.tc_posts.hide.done').length){HidePosts();}
			if($('.tc_posts.highlight.done').length){highLightPost();}
			if((IfPhotosetAsSlider == true)&&($(".photosetPost.done").length)){photoSet();}
			if($('.audioplayerinto.done').length){repairAudioPlayer();}
			if($('.videoPost.done').length){repairVideoPlayer();}
			if($('.RoundThatShit').length){RoundThatShit();}
			
			iScroll = iScroll + 1;
			$newElems.imagesLoaded(function(){
				$content.masonry(
					'appended',
					$newElems,
					true,
					function(){
						$newElems.fadeIn(300);
						if($content.css("opacity") == 0){
							$("#gifLoad").remove();
							$content.animate({opacity:1},500);
						}
					}
				);
			});
			if(iScroll <= 2){
				if (IfNot1Column == true){
					$content.infinitescroll('retrieve');
				}
			}
		});
		if(iScroll <= 2){
			if (IfNot1Column == true){
			$content.infinitescroll('retrieve');
			}
		}
	});
	
	$(document).ready(function(){
		if ($("#purchase_theme").length){
			var newa = document.createElement('a');
			newa.setAttribute("href","http://themecloud.co/themes/escape/");
			newa.setAttribute("id","purchase_theme");
			var newimg = document.createElement('img');
			newimg.setAttribute("src","http://static.tumblr.com/thpaaos/dHHkt0jor/install_theme.png");
			newimg.setAttribute("style","position:absolute; right:10px; top:20px;z-index:99999999;");
			newimg.setAttribute("border","0");
			newa.appendChild(newimg);
			document.body.appendChild(newa);
		}
		setInterval("showpostsnow()", 3000);
	});
	var ldone = "1";
	function showpostsnow()	{
		if (ldone == "2")	{
			$("#tc_posts_container").css("opacity","1");
			ldone = "3";
		}
		if (ldone == "1"){
			ldone = "2";
		}
	} 
	
</script>
{/block:IfNot1Column}

{block:If1Column}
	<script>
		$content.infinitescroll({
			navSelector : '#pagin',
			nextSelector : '#pagin a#nextPage',
			itemSelector : '.tc_posts',
			loading: {
				finishedMsg: '',
				img: 'http://static.tumblr.com/dbek3sy/4fUm7il5k/ajax-loader.gif'
			},
			bufferPx : 600,
			debug : false,
		},
		function(newElements){
			var $newElems = $(newElements);
			$newElems.hide();
	
			if (IfPhotosetAsSlider == true){
				if($(".photosetPost.done").length){photoSet();}
			}
			if($('.audioplayerinto.done').length){repairAudioPlayer();}
			if($('.videoPost.done').length){repairVideoPlayer();}
			if($('.RoundThatShit').length){RoundThatShit();}
			
			$newElems.appendTo($content);
			$newElems.show();
		});
	</script>
{/block:If1Column}

<script>
	$(function(){
	    ChangePostsCont();
	});
	
	function ChangePostsCont(){
		var x = 100-((($("#tc_sidebar").width() + 15) /  $(window).width()) * 100);
		x = Math.round(x);
		$content.width(x + "%");
	}
	$(window).resize(function() {
		ChangePostsCont();
	});
</script>

{/block:IndexPage}

{block:PermalinkPage} 
<script src="http://www.themecloud.co/themes/narnia/jquery.tipsy.js"></script> 
<script>
    function SetUpNotes(){
		$("ol.notes li.like a").tipsy({opacity:0.95,title:function(){return this.getAttribute("original-title") + " liked this"}});
		$("ol.notes li.reblog a").tipsy({opacity:0.95,title:function(){return this.getAttribute("original-title") + " reblogged this"}}); 
		$("ol.notes li.answer").tipsy({opacity:0.95,title:function(){return "\"" + $(this).find(".answer_content").html() + "\"";}}); 
		$("ol.notes li.reply").tipsy({opacity:0.95,title:function(){return "\"" + $(this).find(".answer_content").html() + "\"";}}); 
		$(".notes .source_tumblelog").hide();
		$(".notes .clear").hide();
		$('ol.notes img').each(function(){
		    var t=$(this);
			$('.more_notes_link').html("+");
		    this.src = this.src.replace("_16","_30");
		});
		$('.more_notes_link').click(function(){
			setTimeout('SetUpNotes()', 1500);
		});
	}

	$(function(){
		SetUpNotes();
		repairAudioPlayer();
		var sourceUrl = $("#sourceUrl").text();
		if(sourceUrl.length >= 45){
			$("#sourceUrl").text(sourceUrl.substring(0,45));
		}
	});

</script>
{/block:PermalinkPage} 

<script src="http://www.themecloud.co/themes/escape/common.js"></script>

<!-- Song Player http://playlist.me -->
<script type="text/javascript" src="http://playlist.me/w/script.js" data-config="{'skin':'skins/black/skin.css','volume':88,'autoplay':true,'shuffle':true,'repeat':1,'placement':'bottom','showplaylist':false,'playlist':
[
{'title':'Innamoratevi - Roberto Benigni','url':'www.youtube.com/watch?v=5TN_bz7N7v0'},
{'title':'Song to say goodbye - Placebo','url':'www.youtube.com/watch?v=e7bxXjQL3cY'},
{'title':'Eyes on fire - Blue Foundation','url':'www.youtube.com/watch?v=8IHFVn0sv14'},
{'title':'Lionheart - Emancipator','url':'www.youtube.com/watch?v=gbv-yqqmLH0'},
{'title':'Its been a long time - Cake','url':'www.youtube.com/watch?v=o9HjvIHsEhM'},
{'title':'The Man Who Sold The World - Nirvana','url':'www.youtube.com/watch?v=fregObNcHC8'},
{'title':'Stand by me - Mona','url':'www.youtube.com/watch?v=eCVlOQ3AZrc'},
{'title':'You & Me - Disclosure','url':'www.youtube.com/watch?v=GT6J33_-LNw'},
{'title':'Behind Blue Eyes - Limp Bizkit','url':'www.youtube.com/watch?v=i-kO1jKE3DM'},
{'title':'My way - Chara','url':'www.youtube.com/watch?v=bAOlnqNFvh4'},
{'title':'Running To The Edge Of The World - Marilyn Manson','url':'www.youtube.com/watch?v=_bacm20rFO4'},
{'title':'Giorgio By Moroder - Daft Punk','url':'www.youtube.com/watch?v=5m4ZkEqQrn0'},
{'title':'Delicate - Damien Rice','url':'www.youtube.com/watch?v=dRPwFAoQwxc'},
{'title':'Lament - Adam Hurst','url':'www.youtube.com/watch?v=anQGUMdHrAI'},
{'title':'Lamb of God - Marilyn Manson','url':'www.youtube.com/watch?v=GxXm4IlzRQ8'},
{'title':'At the same time - Hindi Zahra','url':'www.youtube.com/watch?v=r3Gj9u2lTRg'},
{'title':'La Llorona - Chavela Vargas','url':'www.youtube.com/watch?v=0gQ31m4Yt0s'}
]
}" ></script><noscript><a href="http://playlist.me/songs/">playlist</a></noscript>
<!-- playlist.me script end -->

<input type="hidden" name="post_padding" id="post_padding" value="10" />
<input type="hidden" name="tag_page" id="tag_page" value="" />
<iframe id="likeIframe" src="" style="width:1px;height:1px;position:absolute;left:-9999px;"></iframe>
</body>
</html>
