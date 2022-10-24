const App = {
    data(){
        return{
            header: {
                title: '淺月物語',
                content: `<p>emm <a href="https://qian-yue.tk">nothing now</a> LOL<br />
                nothing <a href="https://qian-yue.tk">點這裡</a> www.</p>`
            },
            data: [
                {
                    name: '關於',
                    id: 'about',
                    img: 'images/pic01.jpg',
                    content: `
                    <p>懶得打字 <a href="#">nothing</a>.</p>
                    <p>懶懶懶懶懶</p>
                    `
                },
                {
                    name: '連線位置',
                    id: 'ip',
                    img: 'images/pic02.jpg',
                    content: `
                    <p>伺服器目前為測試階段,尚未開放.</p>
                    <p>開幕後很好玩w.</p>
                    `
                },
                {
                    name: '暫無',
                    id: 'none',
                    img: 'images/pic03.jpg',
                    content: `
                    <p>就說暫無了咩.....</p>
                    `
                }
            ],
            copyright: {
                f_text: '&copy; 淺月物語. 2022 — ALL RIGHTS RESERVED. 網站管理:',
                url_text: 'yyw#9261',
                url: 'https://www.youtube.com/channel/UCVssTv4Cyd_DdO-mFyKaDlg'

            }
        };
    },
    methods:{

    },
    created(){

    }
};
Vue.createApp(App).mount('#app');