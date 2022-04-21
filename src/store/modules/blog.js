import axios from "axios";

const blogModule = {
  state: {
    blog: [],
  },
  getters: {
    blogs: (state) => state.blogs,
    allBlogs: (state) => state.allBlogs,
    count: (state) => state.count,
    blogDetail: (state) => state.blogDetail,
    author: (state) => state.author,
  },
  actions: {
    async getBlogs({ commit }, page) {
      try {
        const res = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"
        );
        // if (filter.author) {
        //   commit(
        //     "GET_BLOG_BY_AUTHOR",
        //     res.data.filter((item) => {
        //       return item.author == filter.author
        //         ? item.author == filter.author
        //         : item.parsely.meta.author[0].name == filter.author;
        //     })
        //   );
        //   commit(
        //     "SET_COUNT",
        //     res.data.filter((item) => {
        //       return item.author == filter.author
        //         ? item.author == filter.author
        //         : item.parsely.meta.author[0].name == filter.author;
        //     }).length
        //   );
        // } else {
        commit("SET_COUNT", res.data.length);
        commit("SET_ALLBLOGS", res.data);
        commit("SET_BLOGS", res.data.splice(page - 1, 5));
        // }
      } catch (error) {
        console.log(error);
      }
    },

    async getDetailBlog({ commit }, blogId) {
      try {
        const res = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"
        );
        commit(
          "GET_DETAILBLOG",
          res.data.filter((item) => {
            return item.id == blogId;
          })
        );
      } catch (error) {
        console.log(error);
      }
    },

    async getBlogByAuthor({ commit }, author) {
      try {
        const res = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"
        );
        commit(
          "GET_BLOG_BY_AUTHOR",
          res.data.filter((item) => {
            return item.author == author;
          })
          // .splice(page - 1, 5)
        );
        commit(
          "SET_COUNT",
          res.data.filter((item) => {
            return item.author == author;
          }).length
        );
      } catch (error) {
        console.log(error);
      }
    },

    // async getTenBlogs({ commit }) {
    //   try {
    //     const res = await axios.get(
    //       "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed"
    //     );
    //     commit("GET_BLOGS", res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
      window.scrollTo(0, 0);
    },
    SET_COUNT(state, count) {
      state.count = count;
    },
    SET_ALLBLOGS(state, allBlogs) {
      state.allBlogs = allBlogs;
    },

    GET_DETAILBLOG(state, blogDetail) {
      state.blogDetail = blogDetail;
    },
    GET_BLOG_BY_AUTHOR(state, author) {
      state.author = author;
    },
  },
};

export default blogModule;
