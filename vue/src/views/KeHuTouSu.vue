<template>
    <L>
        <template #header>客户投诉</template>
        <template #default>
            <div class="w">
                <div class="content">
                    <div>
                        <label>
                            <input type="file" @change="chooseImage" style="display: none">
                            <img alt="无效的图片" :src="image" class="avatar">
                        </label>
                    </div>
                </div>
            </div>
        </template>
    </L>
</template>
<script>
export default {
    data: function () {
        return {
            key  : 'avatar',
            image: '',
        }
    },
    mounted() {
        this.updateImage()
    },
    methods: {
        updateImage() {
            this.image = localStorage.getItem(this.key)
        },
        chooseImage(event) {
            const file = event.target.files[0]
            new Promise(function (resolve) {
                const fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = function () {
                    resolve(fileReader)
                }
            }).then(fileReader => {
                localStorage.setItem(this.key, fileReader.result)
                this.updateImage()
            }).catch(() => {
            })
        },
    },
}
</script>

<style scoped>
.w {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>