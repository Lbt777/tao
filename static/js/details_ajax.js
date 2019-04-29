$(function() {
	$.ajax({
		type: 'get',
		url: 'http://127.0.0.1:3000/list',
		dataType: 'json',
		data: {
			start: 0,
			count: 1,
		},
		success: function(res) {
			if(res.status === 200) {
				// let movieLists = res.data.lists[4];
				let search = window.location.search;
				let name = search.split('=')[1]
				let index = name
				if(index == name) {
					let movieLists = res.data.lists[index];
					let html = ''
					// console.log(movie, index)
					html += `<div class="container">
												<div class="Route font-14">
													<a href="#">首页</a> >
													<a href="#"> ZEALER｜MEDIA</a> >
													<span href="#">${movieLists.name}</span>
												</div>
												<div class="title font-22">${movieLists.name}
													<div class="share-icon">
														<a href="#"></a>
														<a href="#"></a>
														<a href="#"></a>
													</div>
												</div>
												<div class="video">
													<img src="${movieLists.image}"/>
													<div class="play"></div>
												</div>
											</div>`
					let htmls = ''
					htmls += `<div class="introduce font-14" id="movieLists">
													<p class="font-16">视频介绍</p>
													 <p>${movieLists.introduce}</p>
												</div>`
					$("#movieList").html(html)
					$("#movieLists").html(htmls)
				}
				console.log(name)
				console.log(movieLists)

			}

		}
	})
})