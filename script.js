/*
 * Cym 邱璇洛 2022
 * vioercer@outlook.com
*/

// 前端部分
function decision_boxs() {
    //复制五个边框
    var decision_boxs = ' '
    var m_w = 35;
    for (i = 0; i < 5; i++) {
        decision_boxs += "<div class='decision-box' style='margin-left: " + m_w + "px;'></div>"
        m_w = m_w + 180;
    }
    $("#decision-boxs").append(decision_boxs)

    //四个动画显示位置
    var decision_box_mv = ' '
    var mv_w = 40;
    var mv_id = 1;
    for (i = 0; i < 4; i++) {
        decision_box_mv += "<div id='decision-mv-box-" + mv_id + "' class='decision-mv-boxs' style='margin-left: " + mv_w + "px;'></div>"
        mv_w = mv_w + 180
        mv_id = mv_id + 1
    }
    $("#decision-mv-boxs").append(decision_box_mv)
}

function decision_am_kd(id) {
    am_id = "#decision-mv-box-" + id
    $(am_id).addClass("decision-mv-am")
}

function decision_am_ku(id) {
    am_id = "#decision-mv-box-" + id
    $(am_id).removeClass("decision-mv-am")
}


// 后端部分

// 谱面数据
var timeStamps = new Array()
var notePosition = new Array()
// 谱长
var SongTime
// 获取谱长
function getST() {
    var audio = document.getElementById("player");
    if(audio.readyState > 0) {
        var minutes = parseInt(audio.duration / 60, 10)
        var seconds = parseInt(audio.duration % 60)
        SongTime = minutes*60+seconds
        $("#st").html("谱长："+minutes+"m:"+seconds+"s//s:"+SongTime)
    }
}

// 获取谱面数据
function LoadChart() {
    $.getJSON("/data/chart.json", "", function (data) {
        //each循环 使用$.each方法遍历返回的数据date
        $.each(data, function (i, item) {
            timeStamps.push(item.time)
            notePosition.push(item.x)
        })
        // console.log(timeStamps)
        // console.log(notePosition)
    });
}

// 控制音乐播放
function musicPlayer(ish) {
    var player = $("#player")[0]; /*jquery对象转换成js对象*/
    if (ish == 0) {
        player.pause();//暂停
        console.log("暂停")
    } else {
        player.play(); //播放
        console.log("播放")
    }
}

// 计时器
var myTime = 0

// 加载数据
function LoadGame() {
    
}

function StartGame() {
    getST()
    musicPlayer(0)
    $("#tip").html("加载游戏资源中")
    LoadGame()
    musicPlayer(0)
}


function webKey() {
    //按键反应
    $(document).keydown(function (event) {
        //console.log(event.keyCode + "[Down]")
        switch (event.keyCode) {
            case 83:
                //S
                decision_am_kd(1)
                break
            case 68:
                //D
                decision_am_kd(2)
                break
            case 74:
                //J
                decision_am_kd(3)
                break
            case 75:
                decision_am_kd(4)
                break
            default:
                break
        }
    });
    $(document).keyup(function (event) {
        //console.log(event.keyCode + "[Up]")
        switch (event.keyCode) {
            case 83:
                //S
                decision_am_ku(1)
                break
            case 68:
                //D
                decision_am_ku(2)
                break
            case 74:
                //J
                decision_am_ku(3)
                break
            case 75:
                decision_am_ku(4)
                break
            default:
                break
        }
    });
}


// main
$(function () {
    //加载后端
    StartGame()
    //加载前端
    decision_boxs()
    //键盘监听
    webKey()
})