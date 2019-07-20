<template>
    <div>
         <ul class="mui-table-view">
        	<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        		<router-link :to="'/home/newsInfo/'+item.id">
        			<img class="mui-media-object mui-pull-left" :src="item.img_url">
        			<div class="mui-media-body">
        				{{item.title}}
        				<p class="mui-ellipsis"><span>发表时间:{{item.add_time |dateFormat}} </span><span>点击:{{item.click}}次</span></p>
        			</div>
        		</router-link>
            </li>
         </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                newsList:[]
            }
        },
        created() {
            this.getnewsList()
        },
        methods: {
            getnewsList(){
                this.$http.get('api/getnewsList').then(result=>{
                    console.log(result);
                    if(result.body.status ===0){
                        this.newsList=result.body.message
                    }else{
                        Toast('数据加载失败 ')
                    }             
                })
            }
        },
    }
</script>

<style  scoped>
 .mui-table-view li h1 {
      font-size: 14px;
 }
  .mui-table-view li  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>