<template>
  <div class="flex lg:flex-row md:flex-col">
    <div class="hidden md:flex flex-4">
      <div class="lg:fixed ">
        <img class="lg:h-screen lg:w-full sm:w-screen sm:h-30"
             src="https://images.unsplash.com/photo-1586006348294-4a72699f75cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"/>
        <div class="flex flex-col" style="position: absolute; bottom: 15%; ">
          <span style="color:white; text-align: center; font-size: 2rem;font-family: lora,georgia,serif;">Diary of my journeys</span>
          <span class="px-16 py-4" style="color:white; text-align: center; font-size: 1rem;font-family: lora,georgia,serif;font-style: italic">The page was created to tell the story of my journeys, spreading knowledges and bring the beauty of the world to everyone. It may encourage people to pursue – to fight for their dreams.</span>
        </div>
      </div>
    </div>
    <div class="flex flex-6 h-full flex-col">
      <!--      header-->
      <button class="menuMd md:hidden  ">
        <div class="text-base pb-2 pt-2 px-4 border-b fixed bg-white w-full" >Menu</div>
        <div class="nav hidden md:flex flex-1 ">
          <ul class="bg-white fixed">
            <li>
              <NuxtLink class="link" to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/about">About Me</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/journeys">JOURNEYS</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/video">VIDEO</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/photos">PHOTOS</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/blog">BLOG</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>

      </button>
      <div class="nav hidden md:flex flex-1 ">
        <ul class="bg-white fixed">
          <li>
            <NuxtLink class="link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/about">About Me</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/journeys">JOURNEYS</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/video">VIDEO</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/photos">PHOTOS</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/blog">BLOG</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <!--      body-->
      <div class="lg:pt-16 pt-8 " v-for="(post, name, index) in posts">
        <div class="flex flex-col px-4 pb:4 lg:px-20 lg:pb-24 " v-if="post.type !=='post'">
          <div class="flex flex-row justify-center pt-8 pb-2">
            <div class="" v-for="tag in post.tag">
              <NuxtLink class="link px-2 py-2" :to="tag" style="font-weight: 300; font-size: 12px">#{{ tag }}</NuxtLink>
            </div>
          </div>
          <div class="w-20 h-0.5 bg-gray-100 self-center"/>
          <NuxtLink class="flex flex-row justify-center" :to="{path: '/' + post.id}"><span class="title text-center" > {{ post.title }}</span></NuxtLink>
          <div class="flex justify-center ">
            <div class="author">
              <span style="color: #bababa">Posted on <span style="color: #c8ab77">{{ $moment(post.publishedAt).format('DD/MM/YYYY') }}</span>&emsp;</span>
              <span style="color: #bababa"> by <span style="color: #c8ab77">{{ post.author }}</span>&emsp;</span>
              <span style="color: #c8ab77">  {{ post.comments }} Comments</span>
            </div>
          </div>
          <NuxtLink :to="{path: '/' + post.id}"><img class="py-8" :src="post.imgCover"/></NuxtLink>
          <span v-html="post.urlSound"></span>
          <span v-html="post.content"></span>
          <NuxtLink :to="{path: '/' + post.id}"><span class="border-b pb-2" style=" color: #c8ab77; font-style: italic;font-family: lora,georgia,serif;
    font-weight: 400;">Continue reading →</span></NuxtLink>
        </div>
        <div class="bg-gray-100 mt-16" style="height: 1px;"/>
      </div>
<!--      <a-pagination :total="500" :item-render="itemRender" />-->
    </div>
  </div>
</template>

<script >
// import 'ant-design-vue/dist/antd.css';
import {ArticlesService} from "~/services";
import {serviceOptions} from "~/services/serviceOptions";
import axios from 'axios';

const post = {
  type: 'post',
  title: '✈️ CHAP 4: Ngày đầu tiên “mắc kẹt” – Khám phá vài nét văn hoá ở Guwahati',
  author: 'Mai Hương',
  publishedAt: '2021-04-10',
  id: 'detail',
  comments: 10,
  imgCover: 'http://maihuong.photo/wp-content/uploads/2021/09/IMG_6875-1-940x590.png',
  briefContent: `<p style="box-sizing: border-box; font-weight: 400; margin: 0px 0px 1.8em; color: rgb(74, 74, 74); font-family: lora, georgia, serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Ng&agrave;y h&ocirc;m sau (CN 08/4/2017), 3 anh em đi kiếm đồ ăn s&aacute;ng, sau đ&oacute; đi một v&ograve;ng quanh Guwahati th&igrave; thấy c&oacute; mấy chuyện để kể như sau:</p>
<div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q" style="box-sizing: border-box; color: rgb(74, 74, 74); font-family: lora, georgia, serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div dir="auto" style="box-sizing: border-box;"><strong style="box-sizing: border-box; font-weight: 700;"><span class="pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu" style="box-sizing: border-box;"><img src="data:image/png;base64,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" alt="🌿" width="16" height="16" data-lazy-loaded="true" style="box-sizing: border-box; border: 0px; height: auto; max-width: 100%;"></span> 1, B&ograve; được đối xử như con người</strong></div>
</div>
<div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q" style="box-sizing: border-box; color: rgb(74, 74, 74); font-family: lora, georgia, serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div dir="auto" style="box-sizing: border-box;">
        <p class="p1" style="box-sizing: border-box; font-weight: 400; margin: 0px 0px 1.8em; text-align: justify;"><span class="s1" style="box-sizing: border-box;">Ở Ấn Độ, b&ograve; l&agrave; lo&agrave;i vật rất linh thi&ecirc;ng bởi ch&uacute;ng l&agrave; th&uacute; cưỡi của thần Shiva &ndash; vị thần tối cao trong Hindu gi&aacute;o. Tuyệt, m&igrave;nh nghĩ ng&agrave;i cưỡi b&ograve; đi long nhong chắc sẽ di chuyển với vận tốc tầm 4 c&acirc;y chuối / giờ qu&aacute;. Nghĩ đ&atilde; thấy sốt hết cả ruột.</span></p>
    </div>
</div>
<div class="o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q" style="box-sizing: border-box; color: rgb(74, 74, 74); font-family: lora, georgia, serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <p class="p1" style="box-sizing: border-box; font-weight: 400; margin: 0px 0px 1.8em;"><span class="s1" style="box-sizing: border-box;">Bữa đứng nh&ograve;m bạn b&ograve; ngo&agrave;i đường. M&igrave;nh d&ograve;m &ldquo;bạn&rdquo;, bạn d&ograve;m lại m&igrave;nh. Rồi m&igrave;nh cảm thấy v&ocirc; c&ugrave;ng th&egrave;m một t&ocirc; phở b&ograve; t&aacute;i made in Việt Nam (m&agrave; phải l&agrave; phở H&ugrave;ng ở S&igrave; G&ograve;n 7 mươi mấy ng&agrave;n ấy). C&ograve;n bạn th&igrave; v&ecirc;nh mặt nh&igrave;n lại m&igrave;nh kiểu muốn khoe l&agrave; &ldquo;Tau l&agrave; những ch&uacute; b&ograve; Ấn Độ được cấp thẻ căn cước đ&oacute; nha. M&agrave;y cứ ăn đồng loại tau đi rồi thần Shiva sẽ vả m&agrave;y lệch mặt&rdquo;. Theo t&agrave;i liệu m&igrave;nh đọc đc th&igrave; từ năm 2007, những ch&uacute; b&ograve; ở Ấn Độ thậm ch&iacute; c&ograve;n được cấp thẻ căn cước để được bảo vệ khi xuất chuồng.</span></p>
</div>`,
  tags: [{name: 'ẤN ĐỘ', url: '/tags/india'}, {name: 'PHOTOS', url: '/tags/photos'},]
}

export default {
  data() {
    return {
      posts: []
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getData()
  },
  methods: {
     async getData(){
      try{
        serviceOptions.axios = axios.create({
          baseURL: 'http://151.106.125.56:3000',
        })
        const articles = await ArticlesService.articlesControllerFindAll({})
        console.log(articles)
        this.posts = articles
      }catch (e) {
      }
    }
  },

}
</script>

<style>
.nav {
  justify-content: center;
}

ul {
}

li {
  font-family: Nunito sans-serif;
  float: left;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-top: 16px;
}

/*li a {*/
/*  display: block;*/
/*  text-align: center;*/
/*  padding: 16px;*/
/*  text-decoration: none;*/
/*}*/
.link {
  color: #333;
  text-transform: uppercase;
}

.link:hover {
  color: #e5d1ad;
  text-decoration: none;
}

.title {
  font-size: 2rem;
  font-family: lora, georgia, serif;
  font-weight: 300;
  color: #4a4a4a;
}

.author span{
  font-family: lora,georgia,serif;
  font-weight: 400;
}
.menuMd:hover .nav {
  display: block;
}
</style>
