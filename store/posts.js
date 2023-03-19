const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    isVisibleEditPopUp: false,
    isVisibleAddPopUp: false,
    posts: [],    
  })
  
  export const mutations = {
    SET_VISIBLE_EDIT_POP_UP (state){
      state.isVisibleEditPopUp = !state.isVisibleEditPopUp
    },
    SET_VISIBLE_ADD_POP_UP (state){
      state.isVisibleAddPopUp = !state.isVisibleAddPopUp
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },  
    ADD_NEW_POST(state, post) {
      post.id = '63f89048' + Date.now() 
      state.posts.unshift(post)
    },
    REMOVE_POST(state, post) {
      let arr = state.posts
      arr = arr.splice(arr.indexOf(arr.find((p) => { if (p.id === post.id) { return true } })), 1)  
    },
    UPDATE_POST(state, post) {
      let index = state.posts.findIndex(p => p.id === post.id)
      state.posts[index] = post
    }
  }  
  
  export const actions = {
  
    async fetchPosts({ commit }) {
      let posts = [];
      await this.$axios
        .get('/test.json')
        .then(response => posts = response.data.posts);
      commit("SET_POSTS", posts);
    },
    async changePost({ commit }, data) {
      await sleep(300)
      await commit('UPDATE_POST', data)
    },
    async removePost({ commit }, data) {
      await sleep(300)
      await commit('REMOVE_POST', data)
    },
    async addNewPost({ commit }, data) {
      await sleep(300)
      await commit('ADD_NEW_POST', data)
    },
  }
  
  export const getters = {
    getPosts: s => s.posts,
  };