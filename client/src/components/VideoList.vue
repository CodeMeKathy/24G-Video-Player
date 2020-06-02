<template>
  <b-container class="video-list bv-example-row">
    <b-row class="video-list-row-container">
      <b-col class="video-list-col">
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
  margin-top: 0.9rem;
  &-col {
    margin-left: 14.5rem;
  }
}
img.video-list-sm-video {
  margin-bottom: 1.3rem;
  width: 13.8rem;
  height: 7.5rem;
}
.active {
  border: 3px solid #faa61a;
}

//! Media Queries

// Mobile Small
@media (max-width: 374px) and (min-width: 320px) {
  .video-list {
    &-col {
      display: inline-flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0;
    }
    &-row-container {
      flex-direction: row;
    }
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
  // .video-list,
  // .video-list-row-container,
  // .video-list-row {
  //   flex-direction: column;
  // }
  .video-list-col {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
  }
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
  .video-list-col {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
  }
}

// Large Desktop
@media (min-width: 1440px) {
  img.video-list {
    &-sm-video {
      width: 19rem;
      height: 10rem;
      margin-bottom: 2.5rem;
    }
  }
}

// XL Desktop
@media (max-width: 2559px) and (min-width: 1441px) {
  img.video-list {
    &-sm-video {
      width: 19rem;
      height: 10rem;
      margin-bottom: 2.3rem;
    }
  }
}

// XXL Desktop
@media (min-width: 2560px) {
  .video-list {
    margin-top: 1.4rem;
  }
  img.video-list {
    &-sm-video {
      width: 30rem;
      height: 14rem;
      margin-bottom: 2.3rem;
    }
  }
}
</style>
