const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootv5re9/",
            name: "springbootv5re9",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootv5re9/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "篮球论坛系统"
        } 
    }
}
export default base
