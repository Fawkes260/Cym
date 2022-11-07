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

function Key() {
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

$(function () {
    decision_boxs()
    Key()
})