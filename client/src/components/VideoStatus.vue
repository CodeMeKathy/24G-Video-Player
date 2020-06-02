<template>
  <b-container class="current-video-status">
    <b-row class="current-video-status-row">
      <b-col class="current-video-views">{{ views }} views</b-col>
      <div class="current-video-div">
        <b-col class="current-video-votes">
          <img
            @click="incrementLikes"
            src="../assets/thumbs_up.svg"
            alt="thumbs up"
            class="current-video-img"
          />

          {{ likes }}
        </b-col>
        <b-col class="current-video-votes">
          <img
            @click="incrementDislikes"
            src="../assets/thumbs_down.svg"
            alt="thumbs_down"
            class="current-video-img"
          />

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
  margin: 0;
  display: flex;
  &-row {
    width: 44.5rem;
  }
}

.current-video {
  &-div {
    display: flex;
    flex-direction: row;
  }
  &-views {
    padding: 0;
    margin-left: 1.1rem;
  }
  &-votes {
    width: 3.7rem;
    margin: 0;
    color: #faa61a;
    justify-self: flex-end;
    padding-right: 0;
  }
  &-img {
    height: 1rem;
    padding-right: 0.2rem;
  }
}

//! Media Queries

// Mobile Medium - Large
@media (max-width: 425px) and (min-width: 375px) {
  .current-video {
    &-status-row {
      width: 23.8rem;
    }
    &-views {
      // font-size: 1.6rem;
      width: 20rem;
    }
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  .current-video {
    &-status-row {
      width: 41.5rem;
    }
  }
}

// XL Desktop
@media (max-width: 2559px) and (min-width: 1440px) {
  .current-video-status {
    display: flex;
    margin: 0;
    &-row {
      width: 62.8rem;
    }
  }
  .current-video {
    &-div {
      place-content: flex-end;
    }
    &-votes {
      width: 4rem;
      padding-right: 0;
    }
  }
}

// XXL Desktop
@media (min-width: 2560px) {
  .current-video-status {
    display: flex;
    margin: 0;
    width: 65rem;
    &-row {
      width: 65rem;
    }
  }
  .current-video {
    &-div {
      place-content: flex-end;
    }
    &-status-row {
      width: 82rem;
    }
    &-views {
      font-size: 1.6rem;
      width: 89rem;
    }

    &-votes {
      font-size: 1.6rem;
      width: 5.5rem;
      padding-right: 0;
    }
    &-img {
      height: 1.5rem;
    }
  }
}
</style>
