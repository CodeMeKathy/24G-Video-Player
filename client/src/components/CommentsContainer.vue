<template>
  <b-container fluid class="comments-container bv-example-row">
    <b-row
      v-for="comment in comments"
      :key="comment.user"
      class="video-list-row"
    >
      <Comment
        :user="comment.user"
        :icon="comment.userIcon"
        :comment="comment.body"
      />
    </b-row>
  </b-container>
</template>

<script>
// Import Custom Components
import Comment from './Comment'

export default {
  name: 'CommentsContainer',
  components: {
    Comment
  },
  props: ['comments']
}
</script>
