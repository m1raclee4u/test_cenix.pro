<script>
export default {
  data() {
    return {
      newPost:{
        name: null
      }
    };
  },
  methods: {
    async newPostMethod(){
      await this.$store.dispatch('posts/addNewPost', this.newPost)
      this.$store.commit('posts/SET_VISIBLE_ADD_POP_UP')
    }
  },
  mounted() {
  },
  props: {
  },
};
</script>

<template>
  <div class="edit">
    <div
      @click='$store.commit("posts/SET_VISIBLE_ADD_POP_UP")'
      class="editBack"
    ></div>
    <div class="editPost">
      <h2>Добавить новый пост</h2>
      <div class="form">
        <label for="editName"> Новое имя поста: {{newPost.name}} </label>
        <input
          type="text"
          name="editName"
          id="editName"
          v-model="newPost.name"
        />
        <button @click="newPostMethod">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit {
  position: absolute;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  z-index: 5;
  .editBack {
    position: absolute;
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.418);
  }
}
.editPost {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 500px;
  height: 400px;
  padding: 20px 60px;
  background-color: #fff;
  border: 1px solid #3688ff;
  border-radius: 4px;
  font-size: 20px;
  top: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 20;
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input {
    // background-color: red;
  }
}
</style>