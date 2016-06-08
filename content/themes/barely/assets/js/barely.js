(function(){

	$(".accordion-link").on("click",function(e){
		e.preventDefault();
		var $target = $(e.target);

		var target = $target.data("target");

		//history.pushState(null, null, e.target.href)
	});

	$("article").on("click",".toggler",function(e){

		e.preventDefault();

		var $this = $(this);
		var $target= $($this.data("target"));

		$target.find(".intro").toggle(500,function(){
			if ($(this).css('display')!="none")
				$this.html('Show more&nbsp;<i class="fa fa-arrow-right"></i>')
			else
				$this.html('<i class="fa fa-arrow-left"></i>&nbsp;Show less')

		});
		$target.find(".content").toggle(500,function(){
			if ($(this).css('display')!="none")
				$this.html('<i class="fa fa-arrow-left"></i>&nbsp;Show less')
			else
				$this.html('Show more&nbsp;<i class="fa fa-arrow-right"></i>')
		});

		
	});

	$("#search-field").ghostHunter({
    		results: "#results",
    		onKeyUp: true,
    		result_template : '<div class="search-item"><a href="{{link}}"><h3>{{title}}</h3><span>{{pubDate}}</span><p>{{description}}</p></a>',
    		displaySearchInfo : false   		
    	});
    

})(jQuery)