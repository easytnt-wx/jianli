<template>
    <div class="page-container">
        <div class="header-wrap">
            <div class="info-wrap">
                <div class="title">
                    王祥
                    <small>求职意向：高级前端开发工程师</small>
                </div>
                <div class="info-list">
                    <div class="list-item">年龄:29</div>
                    <div class="list-item">工作年限：7年</div>
                    <div class="list-item">手机号：17352555603</div>
                    <div class="list-item">专业：计算机网络技术</div>
                    <div class="list-item">学历：本科</div>
                    <div class="list-item">邮箱：wangxiang8192@163.com</div>
                </div>
            </div>
            <div class="avatar-wrap"></div>
        </div>

        <div class="setion-wrap">
            <div class="setion-title">个人优势</div>
            <div class="setion-content"></div>
        </div>

        <div>
            <div class="setion-title">工作经历</div>
            <div class="setion-content">
                <div class="list-wrap">
                    <div class="list-item">1.</div>
                    <div class="list-item">2.</div>
                    <div class="list-item">3.</div>
                    <div class="list-item">4.</div>
                    <div class="list-item">5.</div>
                </div>
            </div>
        </div>

        <div>
            <div class="setion-title">项目经历</div>
            <div class="setion-content"></div>
        </div>

        <div>
            <div class="setion-title">教育经历</div>
            <div class="setion-content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'template01',

        components: {},

        props: {},

        data() {
            return {}
        },

        computed: {},

        watch: {},

        created() {
            this.$parent.loading = true
        },

        mounted() {},

        methods: {}
    }
</script>

<style lang="scss" scoped></style>
