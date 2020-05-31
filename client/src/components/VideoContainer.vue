<template>
  <b-container fluid class="video-container bv-example-row">
    <b-row>
      <b-col xl="9" lg="9">
        <current-video
          v-if="Object.keys(currentVideo).length > 0"
          :key="currentVideo.title"
          :video="currentVideo"
          :addComment="addComment"
          :incrementLikes="incrementLikes"
          :incrementDislikes="incrementDislikes"
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
    async updateVideo(body) {
      const response = await fetch(`${this.api}${this.currentVideo._id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })

      const jsonData = await response.json()
      const updatedVideo = jsonData.video

      if (response.ok && updatedVideo)
        Object.assign(this.currentVideo, updatedVideo)

      // Replace the currentVideo in the videos array after any updating
      let videoToSwap = this.videos.find(
        video => video._id === this.currentVideo._id
      )
      let videoToSwapIndex = this.videos.indexOf(videoToSwap)
      console.log('currentVideoIndex', videoToSwapIndex)
      this.videos.splice(videoToSwapIndex, 1, updatedVideo)
    },
    // Increment likes
    incrementLikes() {
      this.currentVideo.meta.likes += 1

      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    // Increment dislikes
    incrementDislikes() {
      this.currentVideo.meta.dislikes += 1
      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    changeCurrentVideo(event) {
      this.currentVideo = this.videos.find(
        video => video.thumb === event.target.src
      )
      // Increment video views
      this.currentVideo.meta.views += 1
      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    addComment(event) {
      event.preventDefault()

      const form = event.target
      const formData = new FormData(form)
      let user = ''
      let body = ''

      for (const [inputName, value] of formData) {
        if (inputName === 'user-name') user = value
        if (inputName === 'user-comment') body = value
      }

      let newComment = { user, body, dateCreated: Date.now() }

      this.updateVideo(
        JSON.stringify({
          comments: [...this.currentVideo.comments, newComment]
        })
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
