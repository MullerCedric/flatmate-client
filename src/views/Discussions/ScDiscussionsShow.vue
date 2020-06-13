<template>
  <fm-screen :toolbar-props="toolbarProps" @back-clicked="handleBack">
    <div v-if="isLoading">
      <ic-loading>
      </ic-loading>
      Chargement...
    </div>
    <div v-if="hasMessages" class="fm-discussions__messages">
      <fm-message v-for="(message, index) in messages" :key="message.id" :message="message" :user-id="userId"
                  @select-message="toggleSelection" :showing-info-for-message="showingInfoForMessage"
                  :nb-participants="nbParticipants"
                  :prev-user-id="messages[index - 1] ? messages[index - 1].from_id : 0"
                  :next-user-id="messages[index + 1] ? messages[index + 1].from_id : 0">
      </fm-message>
    </div>

    <template #tab>
      <fm-bottom-bar>
        <input type="text" placeholder="Écrivez un message" class="fm-discussions__input"
               v-model="message" :disabled="isSending" required>
        <div class="fm-discussions__send" @click="sendMessage">
          <component :is="isSending ? 'ic-loading' : 'ic-paper-plane'">
          </component>
        </div>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import Echo from 'laravel-echo';
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcLoading from "../../components/icons/IcLoading";
    import FmMessage from "../../components/FmMessage";
    import IcPaperPlane from "../../components/icons/IcPaperPlane";

    export default {
        name: "ScDiscussionsShow",
        components: {IcPaperPlane, FmMessage, IcLoading, FmBottomBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Discussion',
                    showBack: true,
                    showSearch: true,
                    showMore: true,
                    container: null,
                },
                loadingLimit: 15,
                isLoading: false,
                isSending: false,
                message: '',
                showingInfoForMessage: 0,
                hadMessages: false,
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
            nbParticipants() {
                if (!this.discussion) return 1;
                return this.discussion.participants ? this.discussion.participants.length : 1;
            },
        },
        mounted() {
            this.container = window.document.querySelector(".fm-screen__content");
            this.hadMessages = this.hasMessages;

            if (this.hadMessages) {
                this.scrollToEnd();
            }
            this.lazyload();

            this.container.onscroll = () => {
                this.lazyload()
            };

            const EchoVue = new Echo({
                broadcaster: 'pusher',
                key: '1364c0804863ac3396da',
                cluster: 'eu',
                encrypted: true,
                authEndpoint: process.env.VUE_APP_BROADCAST_BASE + '?api_token=' + this.$store.getters[types.GET_USER].api_token,
            });
            EchoVue
                .join('chatroom')
                .here(users => {
                    window.console.log(users.length + ' online users');
                })
                .joining(user => {
                    window.console.log(user.name + ' is now online');
                })
                .leaving(user => {
                    window.console.log(user.name + ' is now offline');
                })
                .listen('.message.created', e => {
                    if (e.message.discussion_id === parseInt(this.$route.params.id, 10)
                        && e.message.from_id !== this.userId) {
                        this.$store.commit(types.SET_NEW_MESSAGE, e.message);
                        this.$nextTick(() => {
                            this.scrollToEnd();
                        })
                    }
                });
        },
        updated() {
            if (this.discussion) {
                this.toolbarProps.title = this.discussion.label ?
                    this.discussion.label : this.discussion.participants.map((user) => {
                        return user.name;
                    }).join(', ');
            }
        },
        methods: {
            scrollToEnd() {
                this.container.scrollTop = this.container.scrollHeight;
            },
            scrollToTop() {
                this.container.scrollTop = 0;
            },
            lazyload() {
                if ((!this.hadMessages || this.container.scrollTop <= 0) && !this.isLoading) {
                    this.isLoading = true;
                    const previousHeight = this.container.scrollHeight;
                    this.$store.dispatch(types.FETCH_MESSAGES, {
                        id: this.$route.params.id,
                        offset: this.hadMessages ? this.discussion.messages.length : 0,
                        limit: this.loadingLimit
                    })
                        .then(() => {
                            this.container.scrollTop = 1;
                            this.isLoading = false;
                            if (this.hadMessages) {
                                this.container.scrollTop = 1;
                                this.$nextTick(() => {
                                    this.hadMessages = this.hasMessages;
                                    const newHeight = this.container.scrollHeight,
                                        scrollTo = newHeight - previousHeight;
                                    this.container.scrollTop = scrollTo >= 1 ? scrollTo : 1;
                                });
                            } else {
                                this.scrollToEnd();
                                this.hadMessages = this.hasMessages;
                            }
                        });
                }
            },
            handleBack() {
                this.$store.commit(types.OPEN_SIDE_MENU);
            },
            sendMessage() {
                if (!this.message.trim()) return;

                this.isSending = true;
                this.$store.dispatch(types.SAVE_MESSAGE, {message: this.message, discussionId: this.discussion.id})
                    .then(() => {
                        this.message = '';
                        this.isSending = false;
                        this.scrollToEnd();
                    });
            },
            toggleSelection(id) {
                this.showingInfoForMessage = this.showingInfoForMessage === id ? 0 : id;
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  ::placeholder {
    color: $black;
    opacity: .5;
  }

  .fm-discussions {
    &__messages {
      display: flex;
      flex-direction: column;
      margin-bottom: -1rem;
    }

    &__input {
      flex: 1;
      border: none;
      box-shadow: none;
      background-color: $lighterGrey;
      border-radius: .625rem;
      padding: .5rem;
      font-weight: $medium;
      margin: .5rem .25rem;
      align-self: center;

      &:disabled {
        background-color: $lightGrey;
      }
    }

    &__send {
      flex-shrink: 0;
      padding: .5rem;
      align-self: center;
    }
  }
</style>
