/**
 * 渲染主页面的js
 */
layui.use(['layer','fsTab'], function(){
	var fsTab = layui.fsTab;
	//fsConfig = layui.fsConfig,
	//fsCommon = layui.fsCommon,
	//fsMenu = layui.fsMenu;

	//渲染tab
	fsTab.render();

	//新增tab
	function addTab(elem){
		fsTab.add(elem);
	}

	//手机设备的简单适配
	var treeMobile = $('.site-tree-mobile'),
		shadeMobile = $('.site-mobile-shade')

	treeMobile.on('click', function(){
		$('body').addClass('site-mobile');
	});

	shadeMobile.on('click', function(){
		$('body').removeClass('site-mobile');
	});



});
