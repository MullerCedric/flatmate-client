<template>
  <fm-screen :toolbarProps="toolbarProps">
    <h2>Mentions légales</h2>
    <div>
      <p>
        Prochainement...
      </p>
    </div>
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
  </fm-screen>
</template>

<script>
    //import * as types from "../store/types";

    import FmScreen from "../components/FmScreen";

    export default {
        name: "ScLegalNotice",
        components: {FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Mentions légales',
                    type: 'settings',
                    showBack: true,
                }
            }
        },
        methods: {},
    };
</script>

<style scoped>
</style>
