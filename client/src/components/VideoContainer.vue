<template>
  <b-container fluid class="video-container bv-example-row">
    <b-row>
      <b-col xl="9" lg="9">
        <current-video
          :key="currentVideo.title"
          v-if="Object.keys(currentVideo).length > 0"
          :video="currentVideo"
          :api="api"
        />
      </b-col>

      <b-col>
        <video-list
          v-if="videos.length > 0"
          :videos="videos"
          :changeCurrentVideo="changeCurrentVideo"
          :currentVideo="currentVideo"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Import Custom Components
import CurrentVideo from './CurrentVideo.vue'
import VideoList from './VideoList.vue'

export default {
  name: 'VideoContainer',
  components: {
    'current-video': CurrentVideo,
    'video-list': VideoList
  },
  props: [],
  data() {
    return {
      api: 'http://localhost:5000/',
      videos: [],
      currentVideo: {},
      componentKey: 0
    }
  },
  async created() {
    try {
      let res = await fetch(this.api)
      let jsonRes = await res.json()
      this.videos = jsonRes.videos
      this.currentVideo = this.videos[0]
    } catch (error) {
      error => console.error('Error occurred fetching data', error)
    }
  },
  methods: {
    // TODO: Add Comment
    changeCurrentVideo(event) {
      this.currentVideo = this.videos.find(
        video => video.thumb === event.target.src
      )
    }
  }
}
</script>

<style scoped lang="scss">
.video-container {
  margin: 0 auto;
  font-family: 'brandon_grotesquemedium';
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  color: #000000;
}
div.videoContainer-votes.col {
  width: 0.5rem;
}

//! Media Queries

// Mobile Small
@media (max-width: 374px) and (min-width: 320px) {
  .video-container {
    padding: 1.5rem;

    &-title {
      text-align: center;
      padding-top: 1.5rem;
      font-size: 1.5rem;
    }
  }
}

// Mobile Medium - Large
@media (max-width: 767px) and (min-width: 375px) {
  .video-container {
    padding: 1.5rem;

    &-title {
      text-align: center;
      padding-top: 1.5rem;
      font-size: 1.5rem;
    }
  }
  img.videoContainer-lg-video {
    width: 20rem;
  }
  div.video-container-next-videos.col {
    flex-direction: row;
  }
}
</style>
