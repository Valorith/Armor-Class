<template>
  <div class="entireCard" @click="classSelected">
    <card
      class="card-stats text-white bg-dark"
      :show-footer-line="false"
      :hover="true"
    >
      <b-row>
        <b-col>
          <slot>
            <h2 class="card-title mb-0 text-white" v-if="title">
              {{ title }}
            </h2>
          </slot>
          <h1 class="font-weight-bold align-middle text-white profileCount">
            {{ profileCount }}
          </h1>
        </b-col>

        <b-col cols="auto" v-if="classImage" @click="classSelected">
          <img
            :src="require(`@/assets/classIcons/${classImage}`)"
            height="128"
          />
        </b-col>
      </b-row>
      <p class="mt-3 mb-0 text-sm">
        <slot name="footer"> </slot>
      </p>
    </card>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "stats-card",
  data() {
    return {
      profileCount: 0,
    };
  },
  components: {
    Card,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    classImage: String,
    title: String,
  },
  methods: {
    classSelected() {
      alert(`${this.title} selected!`);
    },
  },
};
</script>
<style>
.profileCount {
  font-size: 400%;
}
.entireCard {
  color: black;
}
</style>
