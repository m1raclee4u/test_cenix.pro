<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import editPost from "./editPost.vue";
import addPost from "./addPost.vue";

export default {
  data() {
    return {
      checkedPost: null,
      searchText: null,
    };
  },
  components: { editPost, addPost },
  computed: {
    ...mapGetters("posts", ["getPosts"]),
    filterPosts() {
      if (this.searchText) {
        return this.getPosts.filter(
          (p) => p.name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0
        );
      } else {
        return this.getPosts;
      }
    },
  },
  methods: {
    ...mapActions({
      removeProduct: "posts/removePost",
    }),
    removeClickPostHandler(post) {
      this.removeProduct(post);
    },
    openPopUp(post) {
      this.checkedPost = post;
      this.$store.commit("posts/SET_VISIBLE_EDIT_POP_UP");
    },
  },
  mounted() {
    if (this.$store.getters["posts/getPosts"].length === 0) {
      this.$store.dispatch("posts/fetchPosts");
    }
  },
};
</script>

<template>
  <div class="posts">
    <edit-post
      v-if="this.$store.state.posts.isVisibleEditPopUp === true"
      :checkedPost="checkedPost"
    />
    <add-post v-if="this.$store.state.posts.isVisibleAddPopUp === true" />
    <header>
      <p>Всего постов: {{ getPosts.length }}</p>
      <div class="search">
        <label for="search">Поиск</label>
        <input v-model="searchText" type="text" name="search" id="search" />
      </div>
    </header>
    <TransitionGroup name="list" tag="div" class="posts">
      <div v-for="post in filterPosts" :key="post.id" class="post">
        <p @click="openPopUp(post)">
          {{ post.name }}
        </p>
        <div class="post_buttons">
          <img
            class="post_button"
            src="../../assets/img/edit-svgrepo-com.svg"
            alt=""
            @click="openPopUp(post)"
          />
          <img
            class="post_button"
            src="../../assets/img/delete-svgrepo-com.svg"
            alt=""
            @click="removeClickPostHandler(post)"
          />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  display: flex;
  align-items: center;
  gap: 20px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.posts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  .post {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background-color: rgb(240, 240, 240);
    border-radius: 4px;
    border: 1px solid #3688ff;
    &:hover {
      background-color: rgb(114, 255, 213);
    }
    p {
      width: 100%;
      cursor: pointer;
      font-size: 16px;
    }
    .post_buttons {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 15px;

      .post_button {
        cursor: pointer;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>