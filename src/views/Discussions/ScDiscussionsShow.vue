<template>
  <fm-screen :toolbar-props="toolbarProps" @back-clicked="handleBack">
    <div v-if="isLoading">
      <ic-loading>
      </ic-loading>
      Chargement...
    </div>
    <div v-if="hasMessages" class="fm-discussions__messages">
      <fm-message v-for="(message, index) in messages" :key="message.id" :message="message" :user-id="userId"
                  :prev-user-id="messages[index - 1] ? messages[index - 1].from.id : 0"
                  :next-user-id="messages[index + 1] ? messages[index + 1].from.id : 0">
      </fm-message>
    </div>

    <template #tab>
      <fm-bottom-bar>
        <input type="text">
        <button>&gt;</button>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcLoading from "../../components/icons/IcLoading";
    import * as types from "../../store/types";
    import FmMessage from "../../components/FmMessage";

    export default {
        name: "ScDiscussionsShow",
        components: {FmMessage, IcLoading, FmBottomBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Discussion',
                    type: 'discussion',
                    showBack: true,
                    showAvatar: false,
                    showSearch: true,
                    showMore: true,
                    container: null,
                },
                isLoading: true,
                loadingLimit: 15,
            }
        },
        computed: {
            discussion() {
                return this.$store.getters[types.GET_DISCUSSION](this.$route.params.id);
            },
            hasMessages() {
                return this.discussion && this.discussion.messages && !!this.discussion.messages.length;
            },
            messages() {
                return [...this.discussion.messages].reverse();
            },
            userId() {
                return this.$store.getters[types.GET_USER].id;
            },
        },
        mounted() {
            this.container = window.document.querySelector(".fm-screen__content");
            this.$store.dispatch(types.FETCH_MESSAGES, {
                id: this.$route.params.id, offset: 0, limit: this.loadingLimit
            })
                .then(() => {
                    this.$nextTick(() => {
                        this.isLoading = false;
                        this.scrollToEnd();
                        this.container.onscroll = () => {
                            this.lazyload()
                        }
                    });
                });
        },
        updated() {
            this.toolbarProps.title = this.discussion.label || this.discussion.participants.map((user) => {
                return user.name;
            }).join(', ');
        },
        methods: {
            scrollToEnd() {
                this.container.scrollTop = this.container.scrollHeight;
            },
            scrollToTop() {
                this.container.scrollTop = 0;
            },
            lazyload() {
                if (this.container.scrollTop <= 0 && !this.isLoading) {
                    this.isLoading = true;
                    this.$store.dispatch(types.FETCH_MESSAGES, {
                        id: this.$route.params.id,
                        offset: this.discussion.messages.length,
                        limit: this.loadingLimit
                    })
                        .then(() => {
                            this.isLoading = false;
                            this.scrollToEnd();
                            this.$nextTick(() => {
                                this.container.scrollTop = 1;
                            })
                        });
                }
            },
            handleBack() {
                this.$store.commit(types.OPEN_SIDE_MENU);
            },
        },
    }
</script>

<style lang="scss" scoped>
  .fm-discussions__messages {
    display: flex;
    flex-direction: column;
  }
</style>
