<template>
    <div class="main-container" v-show="$parent.loading" style="display: none">
        <section class="section section-header">
            <div class="section-bg section-header-bg"></div>
            <div class="section-bg section-content-bg"></div>
            <div class="container">
                <header class="header">
                    <div class="header-box">
                        <div class="avatar wow inShow no-print">
                            <img src="../../public/img/user.png" alt="logo" class="img-responsive" />
                        </div>
                        <h1 class="name text-center wow inShow no-print">{{ userInfo.nickname }}</h1>
                        <p class="text-center name">{{ userInfo.jobs }}</p>
                        <p class="text-center">工作状态 : {{ userInfo.WorkState }}</p>
                        <h1 class="name text-center hide show-print-block">{{ userInfo.name }}</h1>
                    </div>
                </header>
                <div class="section-content">
                    <div class="content-box">
                        <div class="name-slogan">
                            <h2 class="wow inShow no-print" data-wow-delay="0.1s">
                                <span class="text-light">{{ userInfo.lastName }}</span>
                                &nbsp;{{ userInfo.firstName }}
                            </h2>
                            <div class="description wow inShow" data-wow-delay="0.15s">{{ userInfo.slogan }}</div>
                        </div>
                        <div class="contact-info">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" data-wow-delay="0.45s">
                                        <P>
                                            年龄 :
                                            <span>{{ calcAge(userInfo.birthday) }}</span>
                                        </P>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <a class="item wow inShow" data-wow-delay="0.55s" :href="userInfo.website" target="_blank">
                                        <P>
                                            工作经验 :
                                            <span>{{ userInfo.workages }}年</span>
                                        </P>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" data-wow-delay="0.3s">
                                        <P>
                                            专业 :
                                            <span>{{ userInfo.professional }}</span>
                                        </P>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" data-wow-delay="0.5s" :href="'mailto:' + userInfo.email">
                                        <P>
                                            学历 :
                                            <span>{{ userInfo.education }}</span>
                                        </P>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" data-wow-delay="0.6s">
                                        <p>
                                            联系电话 :
                                            <span>{{ userInfo.phone }}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" data-wow-delay="0.65s">
                                        <p>
                                            QQ :
                                            <span>{{ userInfo.qq.number }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <div class="item wow inShow" data-wow-delay="0.65s">
                                        <p>
                                            个人邮箱 :
                                            <span>wangxiang8192@163.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <a class="item wow inShow" data-wow-delay="0.7s" :href="userInfo.website" target="_blank">
                                        <p>
                                            个人网站 :
                                            <span>{{ userInfo.website }}</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <a class="item wow inShow" data-wow-delay="0.75s" :href="userInfo.github" target="_blank">
                                        <p>
                                            Github :
                                            <span>{{ userInfo.github }}</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">个人简介</h2>
                        <div class="description">简单介绍本人的基本情况</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="intro">
                        <p v-for="(intro, idx) in userInfo.intro.content" :key="idx" v-html="intro"></p>
                    </div>
                    <!-- <div class="technology">
                        <p>{{ userInfo.intro.technology.title }}</p>
                        <p class="mg5">
                            <span class="tit" v-for="item in userInfo.intro.technology.content" :key="item">{{ item }}</span>
                        </p>
                    </div> -->
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">项目经验</h2>
                        <div class="description">简述做过的一些项目</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="experience">
                        <div class="item" v-for="item in userInfo.project" :key="item.title">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="time">{{ item.time }}</div>
                                    <div class="title">{{ item.title }}</div>
                                    <div class="description">{{ item.intro }}</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="content mg-bottom-12">{{ item.description }}</div>
                                    <div class="tips mg-bottom-8">
                                        <b>{{ item.results.title }}</b>
                                        <div class="content">{{ item.results.content }}</div>
                                    </div>
                                    <div class="tips mg-bottom-8" v-for="tip in item.tips" :key="tip.title">
                                        <b>{{ tip.title }}</b>
                                        <ul>
                                            <li v-for="list in tip.content" :key="list">{{ list }}</li>
                                        </ul>
                                    </div>

                                    <div class="tips mg-bottom-8" v-for="mdl in item.productmodule" :key="mdl.title">
                                        <b>{{ mdl.title }}</b>
                                        <ul>
                                            <li v-for="list in mdl.content" :key="list">{{ list }}</li>
                                        </ul>
                                    </div>

                                    <!-- <div class="technology" v-for="tech in item.technology" :key="tech.title">
                                        <b>{{ tech.title }}</b>
                                        <ul class="inline">
                                            <li v-for="(techItem, techItemIndex) in tech.content" :key="techItemIndex">{{ techItem }}</li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">工作经历</h2>
                        <div class="description">从业经历介绍</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="experience">
                        <div class="item" v-for="item in userInfo.experience" :key="item.title">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="time">{{ item.time }}</div>
                                    <div class="title">{{ item.title }}</div>
                                    <div class="description">{{ item.intro }}</div>
                                </div>
                                <div class="col-md-7">
                                    <div class="content mg-bottom-12">{{ item.description }}</div>
                                    <div class="tips" v-for="tip in item.tips" :key="tip.title">
                                        <b>{{ tip.title }}</b>
                                        <ul>
                                            <li v-for="list in tip.content" :key="list">{{ list }}</li>
                                        </ul>
                                    </div>
                                    <div class="technology" v-for="tech in item.technology" :key="tech.title">
                                        <b>{{ tech.title }}</b>
                                        <ul class="inline">
                                            <li v-for="techItem in tech.content" :key="techItem">{{ techItem }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">
                            技能&nbsp;/&nbsp;
                            <small>Skills</small>
                        </h2>
                        <div class="description">掌握的技术栈和开发工具</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="row skill">
                        <div class="col-md-6" v-for="skill in userInfo.skill" :key="skill.name">
                            <div class="item">
                                <div class="text-info">
                                    <span class="num text-light">{{ skill.percent }}</span>
                                    {{ skill.name }}
                                </div>
                                <div class="progress">
                                    <div class="progress-bar wow progressShow" :style="'width:' + skill.percent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">常逛网站论坛</h2>
                        <div class="description">经常逛的技术相关网站</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="row usually">
                        <div class="col-lg-4 col-md-6" v-for="(usually, usuallyIndex) in userInfo.usually" :key="usuallyIndex">
                            <a v-if="usually.link" :href="usually.link" target="_blank" class="item" :title="usually.link">
                                <i class="fa fa-github"></i>
                                <h3 class="text-light">{{ usually.name }}</h3>
                                <p>{{ usually.description }}</p>
                            </a>
                            <div v-if="!usually.link" class="item" :title="usually.link">
                                <i class="fa fa-github"></i>
                                <h3 class="text-light">{{ usually.name }}</h3>
                                <p>{{ usually.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <section class="section no-print">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">联系方式</h2>
                        <div class="description">通过这些信息可以联系到我</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="contact">
                        <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>Phone</h4>
                                    <div class="info">{{ userInfo.phone }}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>QQ</h4>
                                    <div class="info">{{ userInfo.qq.number }}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>Location</h4>
                                    <div class="info">{{ userInfo.location }}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <a class="item" :href="'mailto:' + userInfo.email">
                                    <h4>Email</h4>
                                    <div class="info">{{ userInfo.email }}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="name-slogan">
                        <h2 class="wow inShow">
                            <span class="text-light">{{ userInfo.lastName }}</span>
                            &nbsp;{{ userInfo.firstName }}
                        </h2>
                        <div class="description wow inShow" data-wow-delay="0.05s">{{ userInfo.slogan }}（{{ userInfo.tips }}）</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section no-print">
            <div class="beian">
                备案号：
                <a href="http://beian.miit.gov.cn/" target="_blank">湘ICP备2022003904号-1</a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'front',
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
        created() {
            var self = this
            this.$http.get('jianli_data_202403.json').then(res => {
                self.userInfo = res.data
                this.$parent.loading = true
            })
        },
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
