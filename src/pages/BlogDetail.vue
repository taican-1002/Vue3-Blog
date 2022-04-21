<template>
  <div v-if="blogDetail" class="blog-detail">
    <h1 class="blog-detail-title">{{ blogDetail[0].title.rendered }}</h1>
    <div class="row blog-detail-sub">
      <div class="blog-detail-info">
        <div class="blog-detail-name">
          {{ blogDetail[0].parsely.meta.author[0].name }}
        </div>
        <p>/</p>
        <div class="blog-detail-date">
          {{
            new Intl.DateTimeFormat("vi-VN").format(
              new Date(blogDetail[0].date)
            )
          }}
        </div>
      </div>
      <va-chip class="blog-detail-type">{{ blogDetail[0].type }}</va-chip>
    </div>
    <div class="blog-detail-content">
      <img
        :src="blogDetail[0].jetpack_featured_media_url"
        alt=""
        class="blog-detail-img"
      />
      <div class="blog-detail-desc">
        {{
          blogDetail[0].excerpt.rendered.slice(
            3,
            blogDetail[0].excerpt.rendered.slice.length - 17
          )
        }}
        +
        {{
          blogDetail[0].excerpt.rendered.slice(
            3,
            blogDetail[0].excerpt.rendered.slice.length - 17
          )
        }}.
      </div>
    </div>
    <br />
    <div class="blog-detail-desc">
      {{
        blogDetail[0].excerpt.rendered.slice(
          3,
          blogDetail[0].excerpt.rendered.slice.length - 17
        )
      }}
      +
      {{
        blogDetail[0].excerpt.rendered.slice(
          3,
          blogDetail[0].excerpt.rendered.slice.length - 17
        )
      }}.
    </div>
    <br />
    <div class="blog-detail-content">
      <img
        :src="blogDetail[0].jetpack_featured_media_url"
        alt=""
        class="blog-detail-img"
      />
      <div class="blog-detail-desc">
        {{
          blogDetail[0].excerpt.rendered.slice(
            3,
            blogDetail[0].excerpt.rendered.slice.length - 17
          )
        }}
        +
        {{
          blogDetail[0].excerpt.rendered.slice(
            3,
            blogDetail[0].excerpt.rendered.slice.length - 17
          )
        }}.
      </div>
    </div>

    <div class="subscribe row">
      <h1 class="flex md3 lg3">Sign up for Newsletters</h1>
      <div class="flex md9 lg9 subscribe-checkbox">
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="Daily"
            value="Daily"
            v-model="checkedNames"
          />
          <label for="Daily">Daily</label>
        </div>
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="Week in Review"
            value="Week in Review"
            v-model="checkedNames"
          />
          <label for="Week in Review">Week in Review</label>
        </div>
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="Startups Weekly"
            value="Startups Weekly"
            v-model="checkedNames"
          />
          <label for="Startups Weekly">Startups Weekly</label>
        </div>
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="Event Updates"
            value="Event Updates"
            v-model="checkedNames"
          />
          <label for="Event Updates">Event Updates</label>
        </div>
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="Advertising Updates"
            value="Advertising Updates"
            v-model="checkedNames"
          />
          <label for="Advertising Updates">Advertising Updates</label>
        </div>
        <div class="subscribe-item">
          <input
            type="checkbox"
            id="TechCrunch+ Announcements"
            value="TechCrunch+ Announcements"
            v-model="checkedNames"
          />
          <label for="TechCrunch+ Announcements"
            >TechCrunch+ Announcements</label
          >
        </div>
      </div>
      <br />
      <!-- <span>Checked names: {{ checkedNames }}</span> -->
      <form class="submit" @submit="handleSubmit">
        <h3 class="flex xs12 sm12 md2 lg2">See all newsletters</h3>
        <div class="flex xs12 sm12 md1 lg1"></div>
        <div class="flex xs12 sm12 md9 lg9 submit-input">
          <input type="email" placeholder="Email *" class="submit-email" />
          <input type="submit" value="Submit" class="submit-btn" />
        </div>
      </form>
    </div>

    <div class="blog-detail-tags">
      <h1>Tags</h1>
      <div class="blog-detail-tag">
        <va-chip
          color="danger"
          v-for="(tag, index) in blogDetail[0].parsely.meta.keywords"
          :key="index"
        >
          {{ tag }}
        </va-chip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BlogDetail",
  computed: mapGetters(["blogDetail"]),
  data() {
    return {
      checkedNames: [],
    };
  },
  created() {
    this.getDetailBlog(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getDetailBlog"]),
    handleSubmit(e) {
      e.preventDefault();
      alert("submit done");
    },
  },
};
</script>

<style scoped>
.blog-detail {
  padding: 100px 200px 40px;
}
.blog-detail-title {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 3rem;
  margin-bottom: 20px;
}
.blog-detail-sub {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2rem;
}
.blog-detail-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.blog-detail-name {
  font-size: 1.2rem;
  font-weight: bold;
}
.blog-detail-date {
  color: #777;
  font-size: 0.8rem;
}
.blog-detail-info p {
  margin: 0 10px;
  color: #777;
  font-size: 0.8rem;
}
.blog-detail-type {
  text-transform: capitalize;
}
.blog-detail-img {
  max-width: 100%;
  border-radius: 5px;
  height: auto;
  display: flex;
  margin: 0 auto 40px;
}
.blog-detail-desc {
  overflow-wrap: break-word;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4rem;
}
.blog-detail-tags h1 {
  margin: 20px 0;
}
.blog-detail-tag {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(20px, auto);
  cursor: pointer;
}

.subscribe {
  margin: 40px 0;
  padding: 40px 0;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}
.subscribe h1 {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.subscribe-checkbox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(10px, auto);
}
.subscribe-item {
  display: flex;
  align-items: center;
}
.subscribe-item input {
  margin-right: 6px;
  display: inline-block;
  background: transparent;
  border: 1px solid #000;
  width: 1.3em;
  height: 1.3em;
}
.subscribe-item label {
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  margin-top: auto;
  margin-bottom: auto;
}

.submit {
  display: flex;
  align-items: center;
  margin: 30px 0 0;
  width: 100%;
}
.submit h3 {
  color: #777;
}
.submit-input {
  width: 100%;
  display: flex;
}
.submit-email {
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #f1f1f1;
  color: #777;
  font-size: 1rem;
  width: 80%;
}
.submit-btn {
  margin-left: 20px;
  height: 50px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background: #ddd;
  color: #000;
  font-weight: bold;
  width: 20%;
  cursor: pointer;
}
@media only screen and (max-width: 1024px) {
  .blog-detail {
    padding: 100px 50px 40px;
  }
}
@media (min-width: 576px) and (max-width: 800px) {
  .subscribe h1 {
    margin-bottom: 14px;
    text-align: center;
    width: 100%;
  }
  .submit {
    flex-direction: column;
  }
  .submit h3 {
    margin-bottom: 14px;
  }
}
@media only screen and (max-width: 600px) {
  .blog-detail {
    padding: 100px 14px 40px;
  }
  .blog-detail-title {
    word-break: break-all;
  }
  .blog-detail-tag {
    grid-template-columns: repeat(2, 1fr);
  }
  .subscribe-checkbox {
    grid-template-columns: repeat(2, 1fr);
  }
  .subscribe h1 {
    margin-bottom: 14px;
  }
  .subscribe-item input {
    width: unset;
  }
  .submit {
    flex-direction: column;
  }
  .submit h3 {
    margin-bottom: 14px;
  }
  .submit-email {
    width: 50%;
  }
  .submit-btn {
    width: 50%;
  }
}
</style>
