<template>
    <div class="goods-list">
       <div class="goods-item">
           <img src="https://img10.360buyimg.com/n7/jfs/t1/35222/10/3302/114643/5cb823ccE6588181f/8c96ff40f906151f.jpg" alt="">
           <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥899</span>
                   <span class="old">￥999</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩66件</span>
               </p>
           </div>
       </div>

       <div class="goods-item">
        <img src="https://img11.360buyimg.com/n7/jfs/t22996/204/2461217821/255565/7506b8b8/5b7fc8a7Nb63f33c6.jpg" alt="">
        <h1  class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥899</span>
                <span class="old">￥999</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩66件</span>
            </p>
        </div>
    </div>


    <div class="goods-item">
        <img src="https://img14.360buyimg.com/n7/jfs/t1/69202/9/537/298511/5cebc5ffE9d00f980/68dae120cc1540a9.jpg" alt="">
        <h1  class="title">小米（Mi）小米Note 16G双网通版</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥899</span>
                <span class="old">￥999</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩66件</span>
            </p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }
    
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }
    
    .goods-item img {
        width: 100%;
    }
    
    .title {
        font-size: 14px
    }
    
    .info {
        background-color: #eee;
    }
    
    .info p {
        margin: 0;
        padding: 5px;
    }
    
    .price .now {
        color: red;
        font-weight: 700;
        font-size: 16px
    }
    
    .price .old {
        text-decoration: line-through;
        font-weight: 700;
        margin-left: 10px;
    }
    
    .info .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>