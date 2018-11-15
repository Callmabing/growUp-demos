<template>
    <li class="goods-list">
        <router-link to="/detail" class="goods-list-link"><!-- 页面跳转 -->
            <div class="goods-list-pic">
                <img :src="img" alt="">
            </div>
            <div class="goods-list-desc">
                <div class="goods-list-name" >{{ title }}</div>
                <div class="goods-list-price" >{{ price|dTofixed|dCurrency }}</div>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    props: ['price', 'title', 'img'] /**props是获取父组件数据使用的 */
}
</script>

<style scoped>
.goods-list {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    background: white;
}
.goods-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
}

.goods-list-link {
    display: block;
    padding: 0.5rem 0;
    width: 100%;
    margin: 0rem;
    text-align: center;
    background-color: #fff;
}
.goods-list:nth-of-type(even) .goods-list-link {
    margin-left: 0;
}
.goods-list:nth-of-type(odd) .goods-list-link {
    margin-right: 0;
}
.goods-list-pic {
    padding: 0.5rem;
}
.goods-list-pic > img {
    width: auto;
    height: 4rem;
}
.goods-list-desc {
    padding: 0 0.5rem;
}
.goods-list-name,.goods-list-price {
    width: 50%;
    height: 1.5rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;/* 文字超出部分显示省略号 */
}
.goods-list-price {
    color: #ff8000;
    float: left;
}
</style>

