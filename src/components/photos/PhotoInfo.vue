<template>
    <div class="photoinfo-container">
        <h3 class="title">{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time |dateFormat}}</span>
            <span>点击：{{ photoinfo.click}}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs mui-clearfix">
            <vue-preview :slides="list"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论 --> 
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue';
    export default {
        data() {
            return {
                id: this.$route.params.id,
                photoinfo: {},
                list: []
            }
        },
        created() {
            this.getPhotoInfo()
            this.getThumbs()
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.photoinfo = result.body.message[0]
                    }
                })
            },
            getThumbs() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.list = result.body.message
                        this.list.forEach(item => {
                            item.w = 600
                            item.h = 400
                            item.msrc = item.src
                        })
                    }
                })
            }
        },
        components: {
            'cmt-box': comment
        }

    }
</script>

<style>
    .photoinfo-container {
        padding: 3px
    }
    
    .photoinfo-container .title {
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    
    .content {
        font-size: 13px;
        line-height: 30px;
    }
    
    .thumbs {
        width: 92%;
        margin: 20px auto;
    }
    
    .thumbs figure {
        float: left;
        width: 100px;
        margin: 0;
        margin-left: 10px
    }
    
    .thumbs figure img {
        width: 100%;
        box-shadow: 0 0 8px #999;
    }
</style>