<template>
<div>
<!-- <el-carousel :interval="0" arrow="always">
    <el-carousel-item v-for="(item,index) in image" :key="index">
     	<template v-if="typeof item === 'object'">
					<img :src="$renderImage(item.img_path)" @click="target(index,item)">
				</template>
				<template v-if="typeof item === 'string'" >
					<img :src="$renderImage(item)" @click="target(index)">
				</template>
    </el-carousel-item>
  </el-carousel> -->
	<div style="position:relative;" :class="['slider-box']">
		<ul class="slider"  :class="[{'is-animating':isAni}]" :style="{width:2*slideWidth+'px'}">
			<li class="slide-item" v-for="(item,index) in image" :key="index" :style="{width:slideWidth+'px',transform:`translate3d(${(index-nowActive)*slideWidth+20}px,0,0)`}">
				<template v-if="typeof item === 'object'">
					<img :src="$renderImage(item.img_path)" @click="target(index,item)" :title="item.title">
				</template>
				<template v-if="typeof item === 'string'" >
					<img :src="$renderImage(item)" @click="target(index)" :title="item.title">
				</template>
			</li>
		</ul>
    <div class="buttons">
      <span>
			<em v-for="(item,index) in image" @click="target(index)"  :class="{active:index==nowActive}" :key="index"></em>
      </span>
		</div>
    	<div class="control">
				<em @click="prePic"></em>
				<em @click="nextPic"></em>
			</div>
	</div>
</div>
</template>
<script>
	export default {
		name: 'slider',
		props: {
			interval: {
				default: 2000
			},
			autoRoll: {
				default: true
			},
			direction: {
				default: 'left'
			}
		},
		mounted: function() {
			let _this = this;
			_this.$nextTick(function() {
				_this.getbanner()
			})
		},
		data() {
			return {
				move: ['left', 'center', 'right'],
				timer: null,
				width: null,
        image: [1,1,1],
        slideWidth:428,
        nowActive:0,
        isAni:true
			}
    },
    watch:{
      nowActive(val){
        console.log(val)
        // if(val==this.image.length-2){
        //   setTimeout(()=>{
        //      this.isAni=false
        //      this.nowActive=0;
        //      this.$nextTick(()=>{
        //        this.isAni=true
        //      })
        //   },500)
        // }
      }
    },
		beforeDestroy() {
			clearInterval(this.timer);
			this.timer = null;
		},
		methods: {

      calcStyle(type){
        if(type=="next"){
           this.image.map((sitem,sindex)=>{
             let disc=0;
              if(sindex==this.image.length-this.nowActive-1){
                  disc=-(this.slideWidth+20);
                }else if(sindex==this.nowActive){
                  disc=0;
                }else{
                  disc=this.slideWidth*sindex+20
                }
                sitem.translate=disc;
           })
        }
      },
			/*获取banner列表*/
			getbanner() {
				 const Arr= [{"id":"838","title":"防沉迷","description":"防沉迷","position":"200","width":"520","height":"210","img_path":"//pic.zuhaowan.com/images/gg_img/2020-06-08/5edd9c84cccf2.jpg","img_path2":"","word":null,"url":"/user/bindSfz","add_time":"2020-06-08 10:04:20","rank":"28","rel":"0","statistics_id":"0","stime":"2019-12-03 14:32:23","etime":"2020-12-01 00:00:00","type":"0","status":"1","ads_userid":"0","hot_game":"","back_path":null,"doman":"余梦垚","platform":"2","ads_type":"1","hd_id":"0","extra":"","user_type":"0","login_status":"0","ins":""},{"id":"1177","title":"至尊VIP强势来袭","description":"至尊VIP强势来袭","position":"200","width":"520","height":"210","img_path":"//pic.zuhaowan.com/images/gg_img/2020-05-21/5ec5fa30bd90f.jpg","img_path2":null,"word":null,"url":"https://www.zuhaowan.com/shareCard/vipLottery","add_time":"2020-05-21 11:49:33","rank":"40","rel":"1","statistics_id":"0","stime":"2020-04-30 09:44:26","etime":"2020-08-31 15:00:00","type":"0","status":"1","ads_userid":"0","hot_game":"","back_path":null,"doman":"郑鹏伟","platform":"2","ads_type":"1","hd_id":"0","extra":"","user_type":"0","login_status":"2","ins":""},{"id":"1357","title":"雷神加速器","description":"雷神加速器","position":"200","width":"520","height":"210","img_path":"//pic.zuhaowan.com/images/gg_img/2020-06-30/5efb1028e79d4.jpg","img_path2":"","word":null,"url":"https://www.zuhaowan.com/zuhao-1000/","add_time":"2020-06-30 18:13:54","rank":"54","rel":"0","statistics_id":"0","stime":"2020-06-30 17:34:13","etime":"2020-07-31 16:00:00","type":"0","status":"1","ads_userid":"0","hot_game":"","back_path":null,"doman":"李白粉","platform":"2","ads_type":"1","hd_id":"0","extra":"","user_type":"0","login_status":"0","ins":""},{"id":"679","title":"租几送几","description":"租几送几","position":"200","width":"520","height":"210","img_path":"//pic.zuhaowan.com/images/gg_img/2019-10-09/5d9d4280d47d4.jpg","img_path2":"","word":null,"url":"/search?gameId=17?orderType=zs","add_time":"2020-05-26 11:44:18","rank":"400","rel":"0","statistics_id":"0","stime":"2019-10-09 10:14:43","etime":"2021-03-31 00:00:00","type":"0","status":"1","ads_userid":"0","hot_game":"","back_path":null,"doman":"余梦垚","platform":"2","ads_type":"1","hd_id":"0","extra":"","user_type":"0","login_status":"0","ins":""}];
            Arr.map((item,index)=>{
              let disc=0;
              if(index==Arr.length-1){
                  disc=-(this.slideWidth+20);
                }else if(index==this.nowActive){
                  disc=0;
                }else{
                  disc=this.slideWidth*index+20
                }
              item.translate=disc;
            })
            this.image=Arr;
			},
			//下一页
			nextPic(event) {
        this.nowActive++;
        // this.calcStyle("next")
        // const arr=JSON.parse(JSON.stringify(this.image));
        // const last=arr.pop()
        // this.image.pop()
        // console.log(this.image)
				// this.timer && clearInterval(this.timer)
				// let temp = this.move.pop()
				// this.move.unshift(temp)
				// this.lR();
			},
			//上一页
			prePic(event) {
        this.nowActive--;
				// this.timer && clearInterval(this.timer)
				// let temp = this.move.shift()
				// this.move.push(temp)
				// this.lR();
			},
			//left or right
			lR() {
				if (this.autoRoll && this.autoRoll.toString() == "true") {
					if (this.direction === 'left') {
						this.timer = setInterval(this.nextPic, this.interval)
					} else {
						this.timer = setInterval(this.prePic, this.interval)
					}
				}
			},
			//点击图片或者点击指示器
			target(pos, item) {
        console.log(pos)
        this.nowActive=pos
				// this.timer && clearInterval(this.timer)
				// if (this.move[pos] === 'center' && item) {
				// 	this.toSearch(item)
				// }
				// const num = this.image.length
				// for (let i = 0; i < num; i++) {
				// 	this.move[i] = 'wait'
				// }
				// this.move[pos] = 'center'
				// this.move[pos + 1 < num ? pos + 1 : 0] = 'right'
				// this.move[pos - 1 === -1 ? num - 1 : pos - 1] = 'left'
				// this.move = this.move.concat()
				// this.lR();


			},
			//banner跳转
			toSearch(item) {
				
			},
      $renderImage(url){
        return url
      }
		}
	}
</script>
<style scoped lang="less">
.slider-box{
  width: 100%;
  overflow: hidden;
  position: relative;
}
	.slider {
		perspective: 1200px;
    width: 100%;
    height: 140px;
		position: relative;
  }
  .is-animating{
     transition: transform 0.4s ease-in-out;
  }
  .slide-item{
     margin-right: 20px;
     border-radius: 6px;
     position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      z-index: 0;
      transition: transform 0.4s ease-in-out;
     img{
       width: 100%;
       display: block;
     }
  }
	.control em:first-child,
	.control em:last-child {
		position: absolute;
		display: block;
        width: 30px;
        height: 30px;
        text-align: center;
		background-size: cover;
		z-index: 11;
		cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        top:50%;
        margin-top: -15px;
        opacity: 0.5;
        &:hover{
            opacity: 1;
        }
	}
    .control em:first-child{
        background-image: url('../assets/image/left.png');
        left: 0px;
    }

    .control em:last-child {
        background-image: url('../assets/image/right.png');
        right: 0px;
    }

    li {
		// list-style-type: none;
		// position: absolute;
		// top: 0px;
		// -webkit-transition: all .4s ease-in-out;
		// transition: all .4s ease-in-out;
		// font-size: 0;
		// border-radius: 4px;
		// overflow: hidden;
	}

	li img {
		width: 520px;
		height: 210px;
	}
	li.set-loading{
		width: 520px;
		height: 210px;
		text-align: center;
		background-color: #f0f0f0;
		line-height: 210px;
		img[lazy="loading"]{
			width: 100px;
			height: 100px;
			vertical-align: middle;
		}
	}

	li.left,
	li.right {
		// transform: scale(0.905);
		z-index: 10;
	}

	li.left {
		/*left: -2.2%;*/
		left: 0%;
		margin-left: -24.7px;
	}

	li.left .mongolia,
	li.right .mongolia {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 2;
		cursor: pointer;
	}

	li.center {
		left: 50%;
		margin-left: -260px;
		z-index: 20;
		cursor: pointer;
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
		-webkit-box-shadow:0px 10px 20px rgba(15,16,17,0.4);
		box-shadow:0px 10px 20px rgba(15,16,17,0.4);
	}

	li.right {
		/* right: -2.2%; */
		left: 100%;
		margin-left: -494.7px;
	}

	li.wait {
		left: 50%;
		margin-left: -260px;
		transform: scale(0.7);
	}

	.buttons {
		text-align: center;
		width: 100%;
    bottom:0;
    top:auto;
    z-index: 20;
    position: absolute;
    left: 0;
    right: 0;
    em {
		display: inline-block;
		width: 5px;
    height: 5px;
    background:rgba(255,255,255,0.4);
		// background-color: rgb(225, 225, 226);
		border-radius: 50%;
		margin: 0 5.5px;
    cursor: pointer;
    &.active{
      background-color: #fff;
    }
	}
    span{
      display: inline-block;
      background:rgba(0,0,0,0.4);
      border-radius:6px;
      padding: 4px 2px;
    }
  }
  

	.control {
		// text-align: center;
		// width: 100%;
		// top: 50%;
		// margin-top: -40px;
    //     height: 80px;
		// display: none;
	}

	.slider:hover .control {
		display: inline-block;
	}


	em.center {
    // background-color: rgb(246, 57, 57);
    background-color: #fff;
	}

	.tag {
		display: inline-block;
		padding: 5px;
		background-color: rgb(198, 47, 47);
		position: absolute;
		right: 0px;
		bottom: 15px;
		border-top-left-radius: 10px;
		font-size: 0.5rem;
		border-bottom-left-radius: 10px;
		color: white;
	}
</style>
