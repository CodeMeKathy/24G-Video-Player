<template>
  <b-container fluid class="video-container bv-example-row">
    <h5 class="video-container-title">{{ currentVideo.title }}</h5>
    <b-row class="video-container-row">
      <b-col>
        <current-video
          v-if="Object.keys(currentVideo).length > 0"
          :key="currentVideo.title"
          :video="currentVideo"
        />
      </b-col>
      <b-col class="video-container-list-col">
        <video-list
          v-if="videos.length > 0"
          :videos="videos"
          :changeCurrentVideo="changeCurrentVideo"
          :currentVideo="currentVideo"
        />
      </b-col>
    </b-row>
    <b-row>
      <video-status
        v-if="Object.keys(currentVideo).length > 0"
        :views="currentVideo.meta.views"
        :likes="currentVideo.meta.likes"
        :dislikes="currentVideo.meta.dislikes"
        :incrementLikes="incrementLikes"
        :incrementDislikes="incrementDislikes"
      />
    </b-row>
    <comment-container
      :commentForm="commentForm"
      :addComment="addComment"
      :getFormInput="getFormInput"
      :currentVideo="currentVideo"
    />
  </b-container>
</template>

<script>
// Import Custom Components
import CurrentVideo from './CurrentVideo.vue'
import VideoList from './VideoList.vue'
import CommentContainer from './CommentContainer'
import VideoStatus from './VideoStatus'

export default {
  name: 'VideoContainer',
  components: {
    'current-video': CurrentVideo,
    'video-list': VideoList,
    'comment-container': CommentContainer,
    'video-status': VideoStatus
  },
  props: [],
  data() {
    return {
      api: `${
        process.env.NODE_ENV === 'production'
          ? 'https://sparkle-octo.herokuapp.com/'
          : 'http://localhost:5003/'
      }`,
      videos: [],
      currentVideo: {},
      componentKey: 0,
      commentForm: { user: '', body: '', date: '', clear: false }
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
    getFormInput() {
      if (event.target.name == 'user-name')
        this.commentForm.user = event.target.value
      if (event.target.name == 'user-comment')
        this.commentForm.body = event.target.value
    },
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
      this.videos.splice(videoToSwapIndex, 1, updatedVideo)
    },
    // Increment Likes
    incrementLikes() {
      this.currentVideo.meta.likes += 1
      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    // Increment Dislikes
    incrementDislikes() {
      this.currentVideo.meta.dislikes += 1
      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    changeCurrentVideo(event) {
      this.currentVideo = this.videos.find(
        video => video.thumb === event.target.src
      )
      // Increment Video Views
      this.currentVideo.meta.views += 1
      this.updateVideo(JSON.stringify(this.currentVideo))
    },
    // Add Video Comment
    addComment(event) {
      event.preventDefault()
      this.commentForm.date = Date.now()

      let newComment = {
        user: this.commentForm.user,
        userIcon:
          'https://github.com/CodeMeKathy/24G-Video-Player/blob/master/client/src/assets/placeholder_avatar.png?raw=true',
        body: this.commentForm.body,
        dateCreated: this.commentForm.date
      }

      this.commentForm = {
        user: '',
        body: '',
        date: '',
        clear: !this.commentForm.clear
      }

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
  color: #393c3e;
  &-title {
    font-size: 1.5rem;
  }
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
    &-row {
      flex-direction: column;
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
      font-size: 1.75rem;
    }
    &-row {
      flex-direction: column;
    }
  }
  img.videoContainer-lg-video {
    width: 20rem;
  }
  div.video-container-next-videos.col {
    flex-direction: row;
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  .video-container {
    &-row {
      flex-direction: column;
    }
    &-list-col {
      flex-direction: row;
    }
  }
}

// Large Desktop
@media (min-width: 1440px) {
  .video-container-list-col {
    margin-top: -0.9rem;
    margin-left: 12rem;
  }
}

// XL Desktop
@media (max-width: 2559px) and (min-width: 1441px) {
  .video-container-list-col {
    margin-top: -0.9rem;
  }
}

// XXL Desktop
@media (min-width: 2560px) {
  .video-container {
    &-title {
      font-size: 2.4rem;
    }
    // &-list-col {
    //   background-color: purple;
    //   margin-left: -75rem;
    // }
  }
  .video-container-list-col {
    margin-top: 0.1rem;
    margin-left: -45rem;
  }
}
</style>
