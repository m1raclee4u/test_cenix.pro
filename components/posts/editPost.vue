<script>
export default {
  data() {
    return {
      edited: {
      },
      isPopEditVisible: false
    };
  },
  mounted() {
    let copiedPost =  JSON.parse(JSON.stringify(this.checkedPost))
    this.edited = copiedPost
    this.$emit('highlightThisPost', this.edited.id)
  },
  methods: {
    async newTextMethod() {
      await this.$store.dispatch("posts/changePost", this.edited);
      await this.$store.commit("posts/SET_VISIBLE_EDIT_POP_UP");
    },
  },
  props: {
    isVisible: Boolean,
    checkedPost: Object,
  },
};
</script>

<template>
  <div class="edit">
    <div
      @click='$store.commit("posts/SET_VISIBLE_EDIT_POP_UP")'
      class="editBack"
    ></div>
    <div class="editPost">
      <h2>Редактирование</h2>
      <p>id поста: {{ checkedPost.id }}</p>
      <p>Текущее имя поста: {{ checkedPost.name }}</p>
      <div class="form">
        <label for="editName"> Новое имя поста: {{ edited.name }} </label>
        <input
          type="text"
          name="editName"
          id="editName"
          v-model="edited.name"
        />
        <button @click="newTextMethod">Сохранить</button>
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
  overflow-y: scroll;
  gap: 20px;
  width: 500px;
  height: 500px;
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