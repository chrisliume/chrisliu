Vue.component('v-article', {
	template: `<div v-show="show">
		<div class="other">
			<ul class="menu">
				<li v-for="(_ar, key, index) in article">
					<a :href="'#name'+ index">{{key}}</a>
				</li>
			</ul>
			<div class="a-right">
				<div v-for="(_ar, key, index) in article" :key="index">
					<a :name="'name'+index" class="a-title">{{key}}</a>
					<a v-for="ari of _ar" :href="ari.url" target="_blank">
					{{ari.name}}
					</a>
				</div>
			</div>
		</div>
	</div>`,
	props: ['show'],
	data: function () {
		var data = {
			article:{
				"JavaScript": [{
									name: "JavaScript 标准参考",
									url:"http://javascript.ruanyifeng.com/"
								},
								{
									name: "ECMAScript 6",
									url:"http://es6.ruanyifeng.com/"
								},
								{
									name: "jQuery api",
									url:"http://caibaojian.com/jquery/"
								},
								{
									name: "No JQuery! 原生 JavaScript 操作 DOM",
									url:"https://juejin.im/entry/58eb2ac761ff4b006b586c8a"
								}
					],
				"css相关布局": [{
					name: "移动端常见问题总结",
					url:"https://github.com/hoosin/mobile-web-favorites"
				},{
					name:"css五种方式实现Footer置底",
					url:"http://liaokeyu.com/%E6%8A%80%E6%9C%AF/2017/01/06/%E8%AF%91-CSS%E4%BA%94%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0Footer%E7%BD%AE%E5%BA%95.html"
				},{
					name: "常见的布局方式",
					url:"https://segmentfault.com/a/1190000008789039tps://segmentfault.com/a/1190000005870557"
				},{
					name: "FLex布局方法--移动最优布局",
					url:"http://www.zcfy.cc/article/understanding-flexbox-everything-you-need-to-know-freecodecamp-2471.html"
				},{
					name:"sass语法知识",
					url:"https://www.w3cplus.com/sassguide/syntax.html"
				}],
				"分享类": [{
					name: "掘金",
					url:"https://juejin.im/timeline/frontend"
				},{
					name:"segmentfault头条",
					url:"https://segmentfault.com/news/frontend"
				}]
			},
		}
		return data
	},
	methods:{

	}
});
