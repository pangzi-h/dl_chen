<template>
    <div class="tool">
        <div class="tag">
            <slot name="tag"></slot>
        </div>
        <div class="title">
            <slot></slot>
        </div>
        <div class="time">{{ time }}</div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            timer: null,
            time : '',
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.time = this.moment().format('YYYY-MM-DD HH:mm:ss')
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
}
</script>

<style scoped lang="less">
.tool {
  width: 90%;
  margin-top: 38px;
  display: flex;

  .tag {
    width: 222px;
  }

  .title {
    flex: 1;
    font-size: 120%;
  }

  .time {
    color: #ffffff;
    width: 222px;
  }
}
</style>