
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" version="1.0" exclude-result-prefixes="sitemap">
	<xsl:output method="html" encoding="UTF-8" indent="yes"></xsl:output>
	<xsl:template match="/">
		<html lang="ru-RU" prefix="og: http://ogp.me/ns#">
			<head>
				<base href="[(site_url)]">
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<meta name="cmsmagazine" content="d8e7426ec72ad3e4ea38b09ebf01284">
				<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
				<meta name="yandex-verification" content="[(yandex_verification)]">
				<meta name="color-scheme" content="only light">
				<meta name="theme-color" content="#ffffff">
				<title>[*titl*]</title>[*noIndex*]
				<meta name="title" content="[*pagetitle:notags:strip*]">
				<meta name="description" content="[*desc:notags:strip*]">
				<meta name="keywords" content="[*keyw:notags:strip*]">
				<meta name="author" content="[(site_name)]">
				<!-- Open Graph-->
				<meta name="og:url" content="[(site_url)][~[*id*]~]">
				<meta property="og:type" content="website">
				<meta name="og:title" content="[*pagetitle:notags:strip*]">
				<meta name="og:description" content="[*desc:notags:strip*]">
				<meta name="image" content="[*imageSoc*]">
				<meta name="vk:image" content="[[thumb? &input=`[*imageSoc*]` $options=`w=1144,h=509,f=jpg,zc=C`]]">
				<meta name="og:image" content="[[thumb? &input=`[*imageSoc*]` $options=`w=1144,h=509,f=jpg,zc=C`]]">
				<meta name="og:image:width" content="1144">
				<meta name="og:image:height" content="509">
				<meta name="og:image:type" content="image/jpeg">
				<meta name="twitter:card" content="summary_large_image">
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
				<link rel="icon" type="image/svg+xml" href="/favicon.svg">
				<link rel="shortcut icon" href="/favicon.ico">
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
				<meta name="apple-mobile-web-app-title" content="СП ДС «Василёк»">
				<link rel="manifest" href="/site.webmanifest">
				<link type="text/css" rel="stylesheet" href="assets/templates/projectsoft/css/bvi.min.css?04f70442776a8c3db0544a59877ab8fc">
				<link type="text/css" rel="stylesheet" href="assets/templates/projectsoft/css/main.min.css?04f70442776a8c3db0544a59877ab8fc">{{@FILE assets/templates/projectsoft/tpl/style.html}}
				<!-- RSS-->
				<link rel="alternate" type="application/rss+xml" title="RSS-лента [(site_name)]" href="rss.xml"><@IF:[*id:is(2)*]>
				<!-- Canonical-->
				<link rel="canonical" href="[(site_url)][~[*id*]~]"><@ENDIF>
			</head>
			<body>
				<div class="body">
					<header id="masthead" role="banner">{{@FILE assets/templates/projectsoft/tpl/header.html}}</header>
					<div class="main">
						<div class="primary">
							<div id="content" role="main">
								<article class="page page-[*id*] type-page clearfix" id="page-[*id*]"><@IF:[*id:neq(1)*]>
									<header class="entry-header">
										<h1 class="entry-title">Карта сайта</h1>
									</header><@ENDIF>
									<div class="entry-content">
										<p class="text">Количество URL: 
											<xsl:value-of select="count( sitemap:urlset/sitemap:url )"></xsl:value-of>
										</p>
										<table class="table table-bordered">
											<thead>
												<tr>
													<th class="loc">URL</th>
													<th class="lastmod">Последнее изменение</th>
													<th class="changefreq">Изменить частоту</th>
													<th class="priority">Приоритет</th>
												</tr>
											</thead>
											<tbody>
												<xsl:for-each select="sitemap:urlset/sitemap:url">
													<tr>
														<td class="loc"><a href="{sitemap:loc}">
																<xsl:value-of select="sitemap:loc"></xsl:value-of></a></td>
														<td class="lastmod">
															<xsl:value-of select="sitemap:lastmod"></xsl:value-of>
														</td>
														<td class="changefreq">
															<xsl:value-of select="sitemap:changefreq"></xsl:value-of>
														</td>
														<td class="priority">
															<xsl:value-of select="sitemap:priority"></xsl:value-of>
														</td>
													</tr>
												</xsl:for-each>
											</tbody>
										</table>
									</div>
								</article>
								[[multiTV? 
									&fromJson=`[(share)]` 
									&tvName=`share`
									&display=`all`
									&noResults=``
									&emptyOutput=`1`
								]]
							</div>
						</div>
						<div class="secondary" id="secondary" role="complementary">{{@FILE assets/templates/projectsoft/tpl/widgets.html}}</div>
						<div class="main-footer">{{@FILE assets/templates/projectsoft/tpl/sites_link.html}}</div>{{@FILE assets/templates/projectsoft/tpl/sendbot.html}}
					</div>{{@FILE assets/templates/projectsoft/tpl/footer.html}}
				</div>
				<script src="assets/templates/projectsoft/js/appjs.min.js?04f70442776a8c3db0544a59877ab8fc"></script>
				<script src="viewer/fancybox.min.js?04f70442776a8c3db0544a59877ab8fc"></script>
				<script src="assets/templates/projectsoft/js/main.min.js?04f70442776a8c3db0544a59877ab8fc"></script><!-- Yandex.Metrika counter --><script type="text/javascript" >(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym([(yandex_metrika)], "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });</script><noscript><div><img src="https://mc.yandex.ru/watch/[(yandex_metrika)]" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->
				<div class="preloader">
					<div class="loader"></div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>