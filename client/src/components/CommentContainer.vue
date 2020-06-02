<template>
  <b-container fluid class="bv-example-row">
    <hr class="comments-hr-line" />
    <h5 class="comments-heading">Comments</h5>
    <b-row class="comments-div">
      <b-form
        @submit="addComment"
        @input="getFormInput"
        :key="commentForm.clear"
        class="comments-form"
      >
        <b-form-textarea
          name="user-comment"
          required
          id="textarea"
          placeholder="Type up a sweet comment..."
          rows="3"
          max-rows="6"
          class="comments-textarea"
        />
        <b-form-input
          name="user-name"
          required
          placeholder="Enter your name"
          class="comments-input"
        />
        <b-button type="submit" class="comments-btn" squared
          >add comment</b-button
        >
      </b-form>
      <comments-list
        v-if="Object.keys(currentVideo).length > 0"
        :comments="currentVideo.comments"
      />
    </b-row>
  </b-container>
</template>

<script>
// Import Custom Components
import CommentsList from './CommentsList'

export default {
  name: 'CommentContainer',
  components: { 'comments-list': CommentsList },
  props: ['addComment', 'getFormInput', 'commentForm', 'currentVideo']
}
</script>

<style scoped lang="scss">
.comments {
  &-hr-line {
    left: 0;
    width: 43rem;
    margin-left: -1rem;
    border: 1px solid #d1d1d1;
  }
  &-heading {
    margin-left: -0.6em;
    margin-top: 1.2rem;
  }
  &-form {
    margin-left: 0.2em;
  }
  &-textarea {
    margin-left: 0rem;
    width: 42.5rem;
  }
  &-btn {
    width: 11rem;
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
  .comments {
    &-hr-line {
      width: 17rem;
    }
    &-textarea {
      margin-left: 0rem;
      width: 17rem;
    }
  }
}

// Mobile Medium
@media (width: 375px) {
  .comments {
    &-hr-line {
      width: 20rem;
    }
    &-textarea {
      margin-left: 0rem;
      width: 20rem;
    }
  }
}

// Mobile Large
@media (max-width: 425px) and (min-width: 376px) {
  .comments {
    &-hr-line {
      width: 23rem;
    }
    &-textarea {
      margin-left: 0rem;
      width: 23rem;
    }
  }
}

// Tablet
@media (max-width: 968px) and (min-width: 768px) {
  .comments {
    &-hr-line {
      width: 40rem;
    }
    &-textarea {
      margin-left: 0rem;
      width: 40rem;
    }
  }
}

// XL Desktop
@media (max-width: 2559px) and (min-width: 1440px) {
  .comments {
    &-heading {
      margin-left: -0.4em;
    }
    &-form {
      margin-left: 0.4em;
    }
    &-textarea {
      margin-left: 0rem;
      width: 60rem;
    }
    &-hr-line {
      width: 61rem;
    }
  }
}

// XXL Desktop
@media (min-width: 2560px) {
  .comments {
    &-heading {
      font-size: 1.7rem;
    }
    &-form {
      margin-top: 1.2rem;
      width: 80rem;
    }
    &-input::placeholder {
      font-size: 1.5rem;
    }
    &-textarea {
      margin-left: 0rem;
      width: 80rem;
    }
    &-textarea::placeholder {
      font-size: 1.5rem;
    }
    &-btn {
      width: 14rem;
      font-size: 1.7rem;
    }
    &-hr-line {
      width: 79rem;
    }
  }
}
</style>
