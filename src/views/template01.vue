<template>
    <div class="page-wrap">
        <!-- 个人基本信息 -->
        <div class="section-wrap bg-1">
            <div class="section-main row">
                <div class="base-info">
                    <div class="base-info-header">
                        <div class="user-name">{{ userInfo.nickname }}</div>
                        <div class="user-job">求职意向：{{ userInfo.jobs }}</div>
                    </div>
                    <div class="base-info-content">
                        <div class="info-item">年龄：{{ calcAge(userInfo.birthday) }}</div>
                        <div class="info-item">工作经验：{{ userInfo.workages }}年</div>
                        <div class="info-item">学历：{{ userInfo.education }}</div>
                        <div class="info-item">专业：{{ userInfo.professional }}</div>
                        <div class="info-item">联系电话：{{ userInfo.phone }}</div>
                        <div class="info-item">邮箱：{{ userInfo.email }}</div>
                    </div>
                </div>
                <div class="avatar">
                    <img src="../../public/img/user.png" alt="头像" />
                </div>
            </div>
        </div>

        <!-- 个人优势 -->
        <div class="section-wrap">
            <div class="section-main">
                <div class="section-title">个人优势</div>
                <div class="section-main-container">
                    <ol class="ol-list">
                        <li v-for="(intro, idx) in userInfo.intro.content" :key="idx">
                            {{ intro }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- 工作经历 -->
        <div class="section-wrap">
            <div class="section-main">
                <div class="section-title">工作经历</div>
                <div class="section-main-container">
                    <div class="experience-wrap" v-for="item in userInfo.experience" :key="item.title">
                        <div class="experience-header">
                            <div class="tag-1">{{ item.title }}</div>
                            <div class="tag-2">{{ item.intro }}</div>
                            <div class="tag-3">{{ item.time }}</div>
                        </div>
                        <div class="line-text">{{ item.description }}</div>
                        <div class="experience-content" v-for="tip in item.tips" :key="tip.title">
                            <div class="title">{{ tip.title }}</div>
                            <ol class="ol-list">
                                <li v-for="list in tip.content" :key="list">{{ list }}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 项目经历 -->
        <div class="section-wrap">
            <div class="section-main">
                <div class="section-title">项目经历</div>
                <div class="section-main-container">
                    <div class="experience-wrap" v-for="item in userInfo.project" :key="item.title">
                        <div class="experience-header">
                            <div class="tag-1">{{ item.title }}</div>
                            <div class="tag-2">{{ item.intro }}</div>
                            <div class="tag-3 f-bold">{{ item.time }}</div>
                        </div>
                        <div class="line-text">{{ item.description }}</div>
                        <div class="line-text" v-for="tip in item.tips" :key="tip.title">
                            <span class="f-bold">{{ tip.title }}</span>
                            <span v-for="list in tip.content" :key="list">{{ list }}</span>
                        </div>
                        <div class="experience-content" v-for="mdl in item.productmodule" :key="mdl.title">
                            <div class="title">{{ mdl.title }}</div>
                            <ol class="ol-list">
                                <li v-for="(list, idx) in mdl.content" :key="idx">
                                    <div class="line-text">
                                        {{ list.tit }}
                                    </div>

                                    <div class="line-text" v-for="(tip, idxx) in list.body" :key="idxx">
                                        {{ tip }}
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div class="line-text">
                            <span class="f-bold">{{ item.results.title }}：</span>
                            {{ item.results.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'template01',

        components: {},

        props: {},

        data() {
            return {
                userInfo: {
                    exp: [],
                    qq: {},
                    intro: {
                        content: [],
                        technology: {
                            title: '',
                            content: []
                        }
                    },
                    experience: [
                        {
                            tips: {
                                title: '',
                                content: []
                            },
                            technology: []
                        }
                    ],
                    skill: [],
                    project: [
                        {
                            results: {
                                title: '',
                                content: ''
                            },
                            tips: {
                                title: '',
                                content: []
                            },
                            productmodule: {
                                title: '',
                                content: []
                            },
                            technology: []
                        }
                    ],
                    usually: []
                }
            }
        },

        computed: {
            calcAge() {
                return function (birthday) {
                    if (!birthday) {
                        return 0
                    }
                    let birthdayDate = new Date(birthday)
                    let todyDate = new Date()
                    let nowMonth = todyDate.getMonth()
                    let birMonth = birthdayDate.getMonth()
                    if (nowMonth < birMonth) {
                        return todyDate.getYear() - birthdayDate.getYear() - 1
                    } else {
                        return todyDate.getYear() - birthdayDate.getYear()
                    }
                }
            }
        },

        watch: {},

        created() {
            var self = this
            this.$http.get('jianli_data_20240314.json').then(res => {
                self.userInfo = res.data
                this.$parent.loading = true
            })
        },

        mounted() {},

        methods: {
            calcDate(birthday) {
                let birthdayDate = new Date(birthday)
                let todyDate = new Date()
                let nowMonth = todyDate.getMonth()
                let birMonth = birthdayDate.getMonth()
                console.log(nowMonth)
                console.log(birMonth)
                return todyDate.getYear() - birthdayDate.getYear()
            }
        }
    }
</script>

<style lang="scss" scoped>
    $bg: #2a5298;

    .bg-1 {
        background: $bg;
    }
    .f-bold {
        font-weight: bold;
    }
    .line-text {
        color: rgba($color: #000000, $alpha: 0.75);
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }

    .ol-list {
        padding-left: 28px;
        margin: 0;
        color: rgba($color: #000000, $alpha: 0.75);
        li {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 8px;
        }
    }
    .page-wrap {
        width: 100%;
        .section-wrap {
            .row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
            }
        }

        .section-main {
            width: 1200px;
            padding: 24px 42px 16px 42px;
            margin: 0 auto;
            .section-title {
                font-size: 22px;
                line-height: 32px;
                font-weight: 600;
                color: rgba($color: #000000, $alpha: 0.75);
                position: relative;
                margin-bottom: 16px;
                padding: 2px 0 2px 12px;
                background-color: rgba($color: $bg, $alpha: 0.05);
                &::before {
                    content: '';
                    width: 4px;
                    height: 20px;
                    background-color: $bg;
                    position: absolute;
                    top: 8px;
                    left: 0;
                }
            }
        }

        .base-info {
            flex: auto;
            color: #ffffff;
            .base-info-header {
                display: flex;
                align-items: flex-end;
                margin-bottom: 32px;
                .user-name {
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 40px;
                    margin-right: 24px;
                }
                .user-job {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 32px;
                }
            }
            .base-info-content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                row-gap: 24px;
                font-size: 18px;
                line-height: 24px;
                font-weight: 500;
            }
        }
        .avatar {
            flex: 0 0 300px;
            img {
                width: 200px;
                height: auto;
                margin: 0 auto;
                display: block;
            }
        }

        .experience-wrap {
            margin-bottom: 24px;
            .experience-header {
                display: flex;
                color: rgba($color: #000000, $alpha: 0.75);
                margin-bottom: 12px;
                padding-bottom: 4px;
                border-bottom: 1px solid #d8d8d8;
                .tag-1 {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 24px;
                    margin-right: 60px;
                }
                .tag-2 {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 24px;
                }
                .tag-3 {
                    font-size: 16px;
                    line-height: 24px;
                    margin-right: 24px;
                    flex: 1;
                    text-align: right;
                }
            }

            .experience-content {
                .title {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    color: rgba($color: #000000, $alpha: 0.75);
                    margin-bottom: 8px;
                }
            }
        }
    }

    @media print {
        .page-wrap {
            -webkit-print-color-adjust: exact;
        }
    }
</style>
