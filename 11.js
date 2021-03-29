
//使用Promise
function getUserId(url) {
    return new Promise(function (resolve) {
        //异步请求
        http.get(url, function (id) {
            resolve(id)
        })
    })
}
getUserId('some_url').then(function (id) {
    //do something
    return getNameById(id);
}).then(function (name) {
    //do something
    return getCourseByName(name);
}).then(function (course) {
    //do something
    return getCourseDetailByCourse(course);
}).then(function (courseDetail) {
    //do something
})
async function getData(){
    const userId = await getUserId();
    const name = await getNameById(userId);
    const course = await getCourseByName(name);
    const courseDetail = await getCourseDetailByCourse(course)
}
