<template>
  <b-container class="current-video bv-example-row">
    <b-row class="current-video-div">
      <video class="current-video-lg-video" :alt="video.title" controls>
        <source :src="video.video" type="video/mp4" />
      </video>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CurrentVideo',
  props: ['video']
}
</script>

<style scoped lang="scss">
.current-video {
  font-family: 'brandon_grotesquemedium';
  display: flex;
  flex-direction: column;
  color: #000000;
  &-div {
    justify-content: space-between;
  }
}
video.current-video-lg-video {
  width: 43rem;
  height: 26rem;
}
div.videoContainer-votes.col {
  width: 0.5rem;
}
.comments {
  font-family: 'brandon_grotesquemedium';
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;
  &-textarea {
    margin-left: 1rem;
    max-width: 43.5rem;
  }
  &-btn {
    max-width: 11rem;
    background-color: #faa61a;
    border: none;
    margin-top: 1rem;
    font-family: 'brandon_grotesquelight';
    font-size: 1.2rem;
    color: #ffffffa8;
  }
  &-btn:hover {
    background-color: #e58c1b;
  }
}

//! Media Queries

// Mobile Small
@media (max-width: 374px) and (min-width: 320px) {
  video.current-video-lg-video {
    width: 17rem;
    height: 10rem;
  }
  .comments {
    &-heading {
      margin: 1.5rem 0 1.25rem -1rem;
    }
    &-textarea {
      margin: 0;
      width: 17rem;
    }
  }
}

// Mobile Medium
@media (max-width: 419px) and (min-width: 375px) {
  video.current-video-lg-video {
    width: 20rem;
    height: 10rem;
  }
}

// Mobile Large
@media (max-width: 767px) and (min-width: 420px) {
  video.current-video-lg-video {
    width: 23.5rem;
    height: 12rem;
  }
  div.current-video-next-videos.col {
    flex-direction: row;
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  video.current-video-lg-video {
    width: 40rem;
    height: 23rem;
  }
  .comments {
    &-heading {
      margin: 1.5rem 0 1.25rem -1rem;
    }
    &-textarea {
      margin: 0;
      width: 40rem;
    }
  }
}

// XL Desktop
@media (max-width: 2559px) and (min-width: 1440px) {
  video.current-video-lg-video {
    height: 35rem;
    width: 62rem;
  }
  .video-container-title {
    margin-left: -1rem;
  }
  .comments {
    &-heading {
      font-size: 1.3rem;
      margin: 1.5rem 0 1.25rem -1rem;
    }
    &-textarea {
      margin: 0;
      width: 85rem;
    }
  }
  #textarea {
    max-width: 65.2rem;
  }
}

// XXL Desktop
@media (min-width: 2560px) {
  .current-video {
    margin-left: 0;
  }
  .video-container-title {
    font-size: 2rem;
    margin-right: 1rem;
  }
  video.current-video-lg-video {
    height: 48rem;
    width: 85rem;
    margin-left: 0;
  }
  .comments {
    &-heading {
      font-size: 1.4rem;
      margin: 1.5rem 0 1.25rem -1rem;
    }
    &-textarea {
      margin: 0;
      width: 90rem;
    }
  }
}
</style>
