<template>
  <b-container class="comment-container bv-example-row">
    <b-row class="comment-container-row">
      <b-col lg="2" class="comment-container-div-icon">
        <img
          v-if="user && icon"
          :src="icon"
          :alt="user"
          class="comment-container-user-icon"
        />
      </b-col>
      <b-col lg="9" sm="5" class="comment-container-div-details">
        <b-row class="comment-container-stats">
          <h5 class="comment-container-user-name">{{ user }}</h5>
        </b-row>
        <b-row class="comment-container-comment-row">
          <p class="comment-container-comment">{{ comment }}</p>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Comment',
  props: ['user', 'icon', 'comment']
}
</script>

<style scoped lang="scss">
div.comment-container-div-icon.col-lg-2 {
  width: 4rem !important;
}
.comment-container {
  height: max-content;
  display: flex;
  // height: 6rem;
  margin-left: 0;
  margin-top: 1rem;
  &-div-icon {
    // width: 1rem;
    margin: 0;
  }
  &-user-icon {
    width: 5rem;
  }
  &-div-details {
    width: 40rem;
  }
  &-timestamp {
    font-family: 'brandon_grotesquelight';
    padding-left: 0.5rem;
    color: #c3c3c3;
    font-size: 1.2rem;
  }
  &-comment {
    font-family: 'brandon_grotesquelight';
  }
}

//! Media Queries

// Mobile Small
@media (max-width: 374px) and (min-width: 320px) {
  .comment-container {
    height: 12rem;
    &-user-icon {
      width: 3.5rem;
    }
    &-stats {
      flex-direction: column;
      font-size: 1rem;
      margin-top: -3.5rem;
      align-content: space-evenly;
      margin-left: 1rem;
    }
    &-div-details {
      width: 15rem;
    }
    &-user-name {
      font-size: 1rem;
    }
    &-timestamp {
      font-size: 1rem;
      padding-left: 0rem;
    }
    &-comment {
      margin: 0.5rem 0 0 5rem;
      align-content: space-evenly;
    }
  }
}

// Mobile Medium
@media (width: 375px) {
  .comment-container {
    height: 12rem;
    &-user-icon {
      width: 3.5rem;
    }
    &-stats {
      flex-direction: column;
      font-size: 1rem;

      margin-left: 1rem;
    }
    &-div-details {
      width: 15rem;
    }
    &-user-name {
      font-size: 1rem;
    }
    &-timestamp {
      font-size: 1rem;
      padding-left: 0rem;
    }
    &-comment {
      margin: 0.5rem 0 0 2rem;
      align-content: space-evenly;
    }
  }
}

// Mobile Medium - Large
@media (max-width: 767px) and (min-width: 425px) {
  .comment-container {
    height: max-content;
    &-row {
      max-height: 17rem;
    }
    &-user-icon {
      width: 3.5rem;
    }
    &-stats {
      flex-direction: column;
      font-size: 1rem;
      margin: 0 0 0 0.5rem;
    }
    &-div-details {
      width: 18rem;
    }

    &-timestamp {
      font-size: 1rem;
      padding-left: 0rem;
    }
    &-comment {
      margin: 0.5rem 0 0 1.5rem;
    }
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  .comment-container {
    &-stats {
      flex-direction: row !important;
      margin: 0 0 0 2rem;
      flex-wrap: nowrap;
    }
    &-div-details {
      width: 44rem;
    }
    &-user-name {
      width: 50rem; //??
      padding-right: 0.5rem;
    }
    &-timestamp {
      width: 35rem; //??
      font-size: 1rem;
      padding-left: 0rem;
    }
    &-comment {
      margin: 0.5rem 0 0 3rem;
      align-content: space-evenly;
      width: 25rem !important;
    }
    &-comment-row {
      width: fit-content;
      margin-top: 0;
    }
  }
}

// XL Desktop
@media (min-width: 1440px) {
  .comment-container {
    &-user-icon {
      width: 5rem;
    }
    &-div-details {
      width: 60rem;
    }
  }
}
</style>
