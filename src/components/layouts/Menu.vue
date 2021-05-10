<template>
  <div class="menu">
    <div class="menuTitle">
      <font-awesome-icon
        icon="search"
        size="2x"
        class="floatRight mr-30 mt-30 searchBtn"
        @click="search"
      />
      <h1 class="vibe"><span>NAVER</span>VIBE</h1>
    </div>
    <div class="menuBody">
      <div class="user">
        <font-awesome-icon icon="user-circle" size="3x" />
        <h2>user</h2>
      </div>
      <ul class="topUl">
        <li
          class="red"
          @click="$router.push({ name: 'Today' }).catch(() => {})"
        >
          <font-awesome-icon icon="headphones" size="lg" /> 투데이
        </li>
        <li @click="$router.push({ name: 'Chart' }).catch(() => {})">
          <font-awesome-icon icon="trophy" size="lg" /> 차트
        </li>
        <li><font-awesome-icon icon="compact-disc" size="lg" /> DJ 스테이션</li>
        <li><font-awesome-icon icon="sticky-note" size="lg" /> VIBE MAG</li>
        <li>
          <font-awesome-icon icon="calendar-check" size="lg" /> 이달의 노래
        </li>
      </ul>
      <ul class="ulPd">
        <li style="color: rgb(60, 60, 60); font-size: 17px;">보관함</li>
        <li>믹스테잎</li>
        <li>노래</li>
        <li>아티스트</li>
        <li>앨범</li>
        <li>플레이리스트</li>
        <li>받은노래</li>
        <li>구매한 MP3</li>
      </ul>
      <ul class="menuList ulPd">
        <li>#내돈내듣</li>
        <li>ON STAGE</li>
        <li>서비스 소개</li>
        <li>멤버십 구독</li>
        <li>VIBE 사용자 리뷰</li>
        <li>커밍쑨VIBE</li>
      </ul>
    </div>
    <div class="btn">
      <button class="desktopBtn">데스크톱앱 설치</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    search() {
      this.$store.commit("changeSearch");
    },
  },
};
</script>
