<template>
  <fm-screen :toolbarProps="toolbarProps">
    <div>
      <div>Counter : {{ $store.state.count }} !</div>
      <div>
        <button @click="increment">Add</button>
      </div>
      <br>
    </div>
    <span @click="$router.push({ name: 'log-in' })">Log in</span>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ex inventore mollitia odio perspiciatis!
      Alias architecto asperiores commodi eos, ex ipsa modi mollitia, non provident quasi ratione repellendus sapiente,
      sunt?
    </div>
    <div>Aspernatur beatae blanditiis culpa cupiditate deleniti dignissimos, dolorum eligendi eos eveniet fugit hic
      illum incidunt itaque laboriosam libero maiores nemo obcaecati, omnis quam, ratione repudiandae sed suscipit ut
      vitae voluptas?
    </div>
    <div>Aliquid aperiam cumque cupiditate eius eligendi error exercitationem facere fugiat, fugit ipsam labore magnam
      maxime modi mollitia optio, quisquam quo repellat repellendus sint ullam velit, veniam voluptatibus. Laboriosam,
      nulla, sed.
    </div>
    <div>Alias asperiores assumenda consequatur corporis delectus dicta dolorum eligendi illum iste laboriosam magnam
      nam nisi optio placeat, quasi quidem repellat, similique, sint tempore ullam veniam voluptate voluptatem? Facere
      nulla, quod...
    </div>
    <div>Excepturi fugiat laborum sit suscipit, velit voluptas. Ad alias animi dicta doloribus, enim error ex, fugit
      harum hic iusto necessitatibus quibusdam ratione recusandae repudiandae sequi soluta voluptatem? Aliquam, dicta,
      eos!
    </div>

    <template #tab>
      <fm-tab-bar>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../store/types";
    import {mapMutations} from 'vuex';

    import FmScreen from "../components/FmScreen";
    import FmTabBar from "../components/FmTabBar";

    export default {
        name: "ScDashboard",
        components: {FmTabBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Dashboard',
                    type: 'dash',
                    showBell: true,
                    showSettings: true,
                }
            }
        },
        mounted() {
            this.$store.dispatch(types.HYDRATE_APP);
        },
        methods: {
            ...mapMutations([
                'increment',
            ]),
        },
    };
</script>

<style scoped>
</style>
