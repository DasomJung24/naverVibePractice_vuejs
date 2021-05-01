<template>
  <div>
    <div class="topContent flex pd">
      <img
        src="https://music-phinf.pstatic.net/20210426_16/1619426911299QOBE6_JPEG/7.jpg"
      />
      <div class="topBox">
        <div class="topChip">GENRE</div>
        <p class="topText">New Release #39 :<br />위켄드 & 아리아나 그란데</p>
        <p class="topSub textGrey">
          'Save Your Tear' 리믹스로 돌아온 위켄드와 아리아나 그란데. 섹슈얼한
          매력을 극대화한 뉴이스트까지! 지금 주목해야 할 트렌디하고 멋진
          신곡들을 VIBE 매거진에서 확인하세요. 글: 박희아, 이대화
        </p>
        <p class="topSub mt-5">VIBE MAG 2021.04.26</p>
      </div>
    </div>
    <div class="pd">
      <p class="text">매거진 ></p>
      <div class="slide pt-10 flex">
        <font-awesome-icon
          icon="arrow-left"
          size="lg"
          class="arrow-l-1 po-absolute"
        />
        <div class="floatLeft mr-15" v-for="item in magazine" :key="item.id">
          <img height="350" width="350" :src="item.image" />
          <p class="itemTitle mt-5" v-html="item.title"></p>
          <p class="mt-5 textGrey">{{ item.date }}</p>
        </div>
        <font-awesome-icon
          icon="arrow-right"
          size="lg"
          class="arrow-r-1 po-absolute"
        />
      </div>
    </div>
    <div class="divide"></div>
    <div class="pd">
      <p class="text">News</p>
      <div class="slide pt-10 flex">
        <font-awesome-icon
          icon="arrow-left"
          size="lg"
          class="arrow-l-2 po-absolute"
        />
        <div class="floatLeft mr-15" v-for="item in magazine" :key="item.id">
          <div class="of-hidden">
            <img width="350" :src="item.image" />
          </div>
          <p class="itemTitle mt-5" v-html="item.title"></p>
          <p class="mt-5 textGrey">{{ item.date }}</p>
        </div>
        <font-awesome-icon
          icon="arrow-right"
          size="lg"
          class="arrow-r-2 po-absolute"
        />
      </div>
    </div>
    <div class="divide"></div>
    <div class="pd">
      <p class="text">내 취향 플레이리스트 ></p>
      <div class="pt-10 flex">
        <div class="floatLeft mr-15" v-for="item in magazine" :key="item.id">
          <img width="200" height="200" :src="item.image" />
          <p class="itemTitle mt-5" v-html="item.title"></p>
          <p class="mt-5 textGrey">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      magazine: [
        {
          id: 1,
          image:
            "https://music-phinf.pstatic.net/20210420_163/1618889084972oGVs0_JPEG/%B5%F0%B1%EB%C4%BF%B9%F6.jpg?type=w720",
          title: "이주의 디깅 #104<br>강다니엘",
          date: "2021.04.22",
        },
        {
          id: 2,
          image:
            "https://music-phinf.pstatic.net/20210420_163/1618889084972oGVs0_JPEG/%B5%F0%B1%EB%C4%BF%B9%F6.jpg?type=w720",
          title: "이주의 디깅 #104<br>강다니엘",
          date: "2021.04.22",
        },
        {
          id: 3,
          image:
            "https://music-phinf.pstatic.net/20210420_163/1618889084972oGVs0_JPEG/%B5%F0%B1%EB%C4%BF%B9%F6.jpg?type=w720",
          title: "이주의 디깅 #104<br>강다니엘",
          date: "2021.04.22",
        },
        {
          id: 4,
          image:
            "https://music-phinf.pstatic.net/20210420_163/1618889084972oGVs0_JPEG/%B5%F0%B1%EB%C4%BF%B9%F6.jpg?type=w720",
          title: "이주의 디깅 #104<br>강다니엘",
          date: "2021.04.22",
        },
        {
          id: 5,
          image:
            "https://music-phinf.pstatic.net/20210420_163/1618889084972oGVs0_JPEG/%B5%F0%B1%EB%C4%BF%B9%F6.jpg?type=w720",
          title: "이주의 디깅 #104<br>강다니엘",
          date: "2021.04.22",
        },
      ],
    };
  },
};
</script>
