<template>
  <b-container class="video-list bv-example-row">
    <b-row class="video-list-row-container">
      <b-col lg="3" class="video-list-col">
        <b-row
          v-for="video in videos"
          :key="video.title"
          class="video-list-row"
        >
          <img
            @click="changeCurrentVideo"
            :src="video.thumb"
            :alt="video.title"
            class="video-list-sm-video"
            :class="{
              active:
                currentVideo.thumb && currentVideo.thumb === video.thumb
                  ? true
                  : false
            }"
          />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'VideoList',
  props: ['videos', 'changeCurrentVideo', 'currentVideo']
}
</script>

<style scoped lang="scss">
.video-list {
  font-family: 'brandon_grotesquemedium';
  display: flex;
  flex-direction: column;
  color: #000000;
}
img.video-list-sm-video {
  margin-bottom: 0.8rem;
  width: 15rem;
  height: 7rem;
}
.video-list-col.col-lg-3 {
  box-sizing: content-box;
}
div.video-list-col.col-lg-3 {
  box-sizing: content-box;
  margin-top: 0.8rem;
}
.active {
  border: 3px solid #faa61a;
}

//! Media Queries

// Mobile Small
@media (max-width: 374px) and (min-width: 320px) {
  .video-list-row-container {
    flex-direction: row;
  }
  img.video-list {
    &-sm-video {
      width: 4rem;
      height: 2.5rem;
    }
  }
}

// Mobile Medium - Large
@media (max-width: 425px) and (min-width: 375px) {
  img.video-list {
    &-sm-video {
      width: 4rem;
      height: 2.5rem;
    }
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  img.video-list {
    &-sm-video {
      width: 10rem;
      height: 5.5rem;
    }
  }
}

// XL Desktop
@media (min-width: 1440px) {
  .video-list {
    &-sm-video {
      width: 18rem;
      height: 9.5rem;
    }
  }
}
</style>
