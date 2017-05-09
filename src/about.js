Vue.component('v-about', {
    template: `<div v-show="show">
		<div class="other qian">
			<div class="o-bg">
				<h1 style="margin-top:40px;">{{title}}</h1>
				<div class="line1"> 2017年1月30日是我们认识的第一天，到今天已与小仙女相识<br>

				<span class="line2"> {{day}} 天 {{hour}} 时 {{min}} 分 {{mins}} 秒</span><br>

                往后余生，风雪是你，平淡是你，清贫是你，荣华是你，心底温柔是你，目光所至，也是你。

				</div>
			</div>
		</div>
	</div>`,
    props: ['show'],

    methods: {
        computeTime: function() {

			var _this = this;

			setInterval(function(){
				var nowTime = +new Date(),
	                // startTime = new Date(1485777600000); // 2017-01-30-20-00-00
	                startTime = new Date(1485705600000); // 2017-01-30-00-00-00

	            var sumTime = nowTime - startTime,
					day = Math.floor(sumTime / 86400000),
					dayMis = 86400000*day,
					hour =  Math.floor((sumTime - dayMis)/3600000),
					hourMis = hour*3600000,
					min = Math.floor((sumTime - dayMis - hourMis)/60000);
					minMis = min*60000,
					mis =  Math.floor((sumTime - dayMis - hourMis -minMis)/1000);

				// console.log(day, hour,min,mis);
				_this.day = day;
				_this.hour = hour;
				_this.min = min;
				_this.mins = mis;
			}, 100);





        }
    },
    mounted: function() {
		// setInterval(this.computeTime(), 100);
        this.computeTime();
    },
    data: function() {
        return {
            title: "纪念日／Anniversary",
            data: {


            },
			day: 0,
			hour: 0,
			min: 0,
			mins: 0
        }
    }
});
