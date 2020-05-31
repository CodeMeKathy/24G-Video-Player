<template>
  <b-container class="current-video-status">
    <b-row class="current-video-status-row">
      <b-col class="current-video-views">{{ views }} views</b-col>
      <div class="current-video-div">
        <b-col class="current-video-votes">
          <a href="#">
            <img
              @click="incrementLikes"
              src="../assets/thumbs_up.svg"
              alt="thumbs up"
            />
          </a>
          {{ likes }}
        </b-col>
        <b-col class="current-video-votes">
          <a href="#">
            <img
              @click="incrementDislikes"
              src="../assets/thumbs_down.svg"
              alt="thumbs_down"
            />
          </a>
          {{ dislikes }}
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'VideoStatus',
  props: ['likes', 'dislikes', 'views', 'incrementLikes', 'incrementDislikes']
}
</script>

<style scoped lang="scss">
.current-video-status {
  display: flex;
  margin: 0;
  &-row {
    width: 46rem;
  }
}

.current-video {
  &-div {
    display: flex;
    flex-direction: row;
  }
  &-views {
    padding: 0;
  }
  &-votes {
    width: 5.5rem;
    margin: 0;
    color: #faa61a;
  }
}

//! Media Queries

// XL Desktop
@media (min-width: 1440px) {
  .current-video-status {
    display: flex;
    margin: 0;
    &-row {
      width: 65rem;
    }
  }
  .current-video {
    &-div {
      place-content: flex-end;
    }
    &-votes {
      width: 3.2rem;
      padding-right: 0;
    }
  }
}
</style>
