<template>
  <div class="player">
    <div class="leftPlay">
      <div class="musicIcon">
        <font-awesome-icon icon="music" size="lg" class="music" />
      </div>
      <div class="playerText">
        <span>오늘 뭐 듣지?</span>
        <p>재생 버튼을 눌러주세요</p>
      </div>
    </div>
    <div class="centerPlay">
      <font-awesome-icon icon="random" size="lg" class="textGrey" />
      <font-awesome-icon icon="angle-double-left" size="2x" class="white" />
      <font-awesome-icon icon="play" size="2x" class="red" />
      <font-awesome-icon icon="angle-double-right" size="2x" class="white" />
      <font-awesome-icon icon="sync-alt" size="lg" class="textGrey" />
    </div>
    <div class="rightPlay">
      <span class="textGrey">00:00 /00:00</span>
      <font-awesome-icon icon="volume-up" size="lg" class="textGrey" />
      <div class="playBar"></div>
      <div class="listPlay">
        <font-awesome-icon icon="list" size="2x" class="textGrey mr-30" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
