import BackTop from '@/components/content/backTop/BackTop'


export const backTopMixin = {
    components: {
        BackTop,
    },
    // data() {
    //     return {
    //         isShowBackTop: false,
    //     }
    // },
    // methods: {
    //     backClick() {
    //         this.$refs.scroll.scrollTo(0, 0)
    //     },
    //     ilstenShowBackTop(position) {
    //         this.isShowBackTop = -position.y > 1000;
    //     }
    // }
}