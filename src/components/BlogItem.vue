<template>
  <div class="blog">
    <div class="row blog-row">
      <div class="blog-row-item flex xs12 sm6 md7 lg8">
        <ul>
          <!-- {{
            renderBlog
          }} -->
          <li v-for="blog in renderBlog" :key="blog.id">
            <router-link
              :to="{
                name: 'blog-detail-route',
                params: { id: blog.id },
              }"
            >
              <va-card class="blog-item">
                <div class="blog-img flex xs12 sm6 md6 lg6">
                  <va-image
                    :src="blog.jetpack_featured_media_url"
                    class="blog-img"
                  />
                </div>
                <div class="blog-desc flex xs12 sm6 md6 lg6">
                  <va-chip shadow class="blog-tag">{{ blog.type }}</va-chip>
                  <va-card-title class="blog-title">
                    <div>{{ blog.title.rendered }}</div>
                  </va-card-title>
                  <va-card-content>{{
                    blog.parsely.meta.headline
                  }}</va-card-content>
                  <va-chip color="warning" class="blog-author">{{
                    blog.parsely.meta.author[0].name
                  }}</va-chip>
                </div>
              </va-card>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="blog-row-item flex xs12 sm1 md1 lg1"></div>
      <div class="blog-row-item flex xs12 sm5 md4 lg3 blog-slider">
        <div class="blog-tags">
          <div class="blog-slider-title">TAGS</div>
          <div class="blog-slider-all" @click="handleFilter(0)">All</div>
          <div
            v-for="blog in allBlogs"
            :key="blog.id"
            class="blog-slider-item"
            @click="handleFilter(blog.author)"
          >
            <div class="blog-slider-name">
              {{ blog.parsely.meta.author[0].name }}
            </div>
            <va-chip class="blog-slider-tag">{{ blog.author }}</va-chip>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.countAuthorBlog === 0" class="flex lg12 blog-pagination">
      <va-pagination
        :visible-pages="7"
        v-model="value"
        :total="count"
        boundary-numbers
        :page-size="5"
      />
    </div>
    <div v-else class="flex lg12 blog-pagination">
      <va-pagination
        :visible-pages="7"
        v-model="value"
        :total="this.countAuthorBlog"
        boundary-numbers
        :page-size="5"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BlogItem",

  computed: {
    ...mapGetters(["blogs", "count", "allBlogs", "author"]),
    renderBlog: function () {
      if (this.filter.author) {
        return this.author.filter((item) => {
          // console.log(item, item.author == this.filter.author);
          return item.author == this.filter.author;
        });
      } else if (this.filter.author === 0) {
        return this.blogs;
      } else {
        return this.blogs;
      }
      // return this.blogs;
    },
  },
  data() {
    return {
      // obj: {
      //   page: 1,
      //   author: null,
      // },
      value: 1,
      allValue: 1,
      authorBlog: [],
      filter: {
        author: 0,
      },
      countAuthorBlog: 0,
    };
  },
  watch: {
    value() {
      // this.obj.page = this.value;
      this.getBlogs(this.value);
      console.log(this.value);
    },
  },
  created() {
    this.getBlogByAuthor(this.filter.author);
    console.log(this.count);
    // this.count = this.allBlogs.length;
    this.getBlogs(this.value);
  },
  methods: {
    ...mapActions(["getBlogs", "getCount", "getBlogByAuthor"]),
    // renderBlog() {
    //   this.authorBlog = this.blogs;
    //   // return this.authorBlog;
    // },
    // handleAll() {
    //   this.obj.author = undefined;
    //   this.getBlogs(this.obj);
    // },
    // handleFilterByAuthor(e) {
    //   this.obj.author = e.target.innerText;
    //   this.getBlogs(this.obj);
    // },
    handleFilter(id) {
      this.getBlogByAuthor(id);
      // console.log(id);
      // const authorName = document.getElementsByClassName("blog-slider-name");
      // // console.log(authorName);
      // const authorAll = document.getElementsByClassName("blog-slider-all");

      if (id === 0) {
        this.filter.author = id;
        this.countAuthorBlog = this.allBlogs.length;
        this.value = this.allValue;
        // console.log(this.countAuthorBlog);
        // authorAll[0].classList.add("active");
      } else {
        this.filter.author = id;
        this.countAuthorBlog = this.author.length;
        // for (let i = 0; i < authorName.length; i++) {
        //   // authorName[i].classList.add("active");
        // }
      }
    },
  },
};
</script>

<style scoped>
/* .active {
  color: #ff0000;
} */
.blog {
  padding: 100px 120px 50px;
}

.blog-item {
  margin-bottom: 20px;
  height: 20rem;
}
.blog-title div {
  font-size: 1.6rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.blog-title:hover {
  color: black;
}
.blog-desc {
  padding: 10px 0 10px 10px;
}
.blog-img {
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.blog-tag {
  margin: 6px 0 0 20px;
  text-transform: capitalize;
}
.blog-author {
  margin-left: 20px;
}
.blog-pagination {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.blog-slider {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 50rem;
  overflow-y: scroll;
}
.blog-slider::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.blog-slider-title {
  padding-bottom: 14px;
  border-bottom: 1px solid #ccc;
  color: #aaa;
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.blog-slider-all {
  margin-top: 10px;
  cursor: pointer;
}
.blog-slider-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  cursor: pointer;
}

.blog-slider-name {
  transition: all 0.1s ease-in-out;
}
.blog-slider-name:hover {
  font-weight: bold;
}
.blog-slider-tag {
  cursor: pointer;
}
.blog-slider-tag:hover {
  background-color: rgb(6, 41, 117) !important;
}

@media only screen and (max-width: 1024px) {
  .blog {
    padding: 90px 20px 30px;
  }
}
@media (min-width: 576px) and (max-width: 800px) {
  .blog-row {
    flex-direction: column !important;
  }
  .blog-row-item {
    width: 100% !important;
    max-width: 100% !important;
  }
}
@media only screen and (max-width: 600px) {
  .blog {
    padding: 100px 12px 20px;
  }
  .blog-row {
    flex-direction: column !important;
  }

  .blog-item {
    height: 40rem;
  }
}
</style>
