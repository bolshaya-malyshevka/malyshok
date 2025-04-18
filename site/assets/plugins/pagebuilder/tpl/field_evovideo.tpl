<style>
	code {
		display: block;
		color: #e83e8c !important;
	}
</style>
<?php
$site_url = MODX_SITE_URL;
$includeOnce_evotv = <<<EOD
<style>
.iframe_block {
	padding-top:10px;
	position: relative;
	max-width: 600px;
}
.embed {
	overflow: hidden;
}
.embed-responsive {
	position: relative;
	display: block;
	height: 0;
	padding: 0;
	overflow: hidden;
}
.embed-responsive-16by9 {
	padding-bottom: 56.25%;
}
.embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	border: 0;
}
.evovideo_image {
	display: block;
	max-width: 300px;
}
.evovideo_frame {
	max-width: 300px;
}
</style>

<script>
if (!window.setEvoVideo) { 
    // safe to use the function
    let EvoVideoID = 0;
	window.setEvoVideo = function(e){
		window.top.console.log(e);
		var el = e.target,
			parent = el.parentElement,
			span = parent.querySelector(".evovideo_image"),
			div = parent.querySelector(".block_iframe"),
			errorLoad = function(e){
				e.preventDefault();
				this.onerror = null;
				this.parentElement.innerHTML = "";
				return !1;
			},
			img, iframe;
		if(span && div) {
			span.innerHTML = div.innerHTML = "";
			let data = new FormData();
			data.append('link_evovideo', el.value);
			let xhr = new XMLHttpRequest();
			xhr.open('POST', '/assets/tvs/EvoVideo/EvoVideo.index.php', true);
			xhr.onloadend = function() {
				if (xhr.status == 200) {
					let vd = JSON.parse(xhr.response);
					window.top.console.log(vd);
					if(vd.video){
						div.innerHTML = vd.video;
					}
					if(vd.image){
						let re = /^assets/i;
						if ((m = re.exec(vd.image)) !== null) {
							span.innerHTML = '<img src="/' + vd.image +'?hash=' + (new Date().getTime()) + '">';
						}else{
							span.innerHTML = '<img src="' + vd.image +'">';
						}
					}
				} else {
					window.top.console.log("Ошибка " + this.status);
				}
			}
			xhr.onerror = function() {
				window.top.console.log("Ошибка запроса " + el.value);
			};
			xhr.send(data);
		}
	};
	document.addEventListener('input', function(e){
		if(e.target.dataset.evovideo == "contentblocks"){
			setEvoVideo(e);
		}
	});
	document.addEventListener('change', function(e){
		if(e.target.dataset.evovideo == "contentblocks"){
			setEvoVideo(e);
			documentDirty=true;
		}
	});
	document.addEventListener('paste', function(e){
		if(e.target.dataset.evovideo == "contentblocks"){
			setEvoVideo(e);
			documentDirty=true;
		}
	});
}
</script>
EOD;
echo $includeOnce_evotv;
?>
<div class="field type-<?= $field['type'] ?> <?= $layout ?>" data-field="<?= $name ?>">
<?php if (!empty($field['caption'])): ?> 
	<div class="field-name"><?= $field['caption'] ?></div>
<?php endif; ?>
<?php
$output_YTv = <<<EOD
<input class="contentblocks_{$name}" type="text" name="contentblocks_{$name}" value="{$value}" style="width: 100%;" data-evovideo="contentblocks" onfocus="setEvoVideo(event)"/>
&nbsp;<span class="evovideo_image"></span><br />
<div class="iframe_block evovideo_frame">
	<div class="block_iframe"></div>
</div>
<script>

</script>
EOD;
echo $output_YTv;
?>
	<!--input type="text" name="contentblocks_<?= $name ?>" value="<?= htmlentities($value) ?>"-->

	<?php if (!empty($field['note'])): ?> 
		<div class="field-note"><?= $field['note'] ?></div>
	<?php endif; ?>
	<!--div class="check-list <?= $layout ?>-layout">
		<pre><code><?= print_r($name, true); ?></code></pre>
		<pre><code><?= print_r($data, true); ?></code></pre>
	</div -->

<?php if (!empty($field['note'])): ?> 
	<div class="field-note"><?= $field['note'] ?></div>
<?php endif; ?>
</div>