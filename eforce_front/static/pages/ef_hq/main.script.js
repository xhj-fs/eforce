$(document).ready(function() {
  socket = new WebSocket("ws://" + window.location.host + "/efhq/");
  socket.onmessage = function(e) {

      var msg = push_django_msg_notification(JSON.parse(e.data));

      alert(msg);
      if(msg != ''){
        var notificationDesc = {notificationDesc: msg}
        $("#pushNotificationTemplate").tmpl(notificationDesc).prependTo("#efhq_notification_wrapper");
      }

  }

});

function push_django_msg_notification(data){

    var return_msg;
    switch(data.created_type) {
        case 'crisis':
            return_msg = create_crisis_alert_msg(data);
            break;
        case 'crisis_update':
            return_msg = create_crisis_update_msg(data);
            break;
        case 'combat_strategy':
            return_msg = create_combat_strategy_alert_msg(data);
            break;
    }

    return return_msg;

}

function create_crisis_alert_msg(data){
    var return_msg = "";
    return_msg += "Crisis Alert: " + data.title;
    return return_msg;
}

function create_crisis_update_msg(data){
    var return_msg = "";
    return_msg += "<b>" + data.for_crisis_title + "</b><br/>";
    return_msg += "EF Crisis Update: " + data.description + "<br/>";
    return_msg += "(<i>" + data.by_group + "</i>)";
    return return_msg;
}

function create_combat_strategy_alert_msg(data){
    var return_msg = "";
    return_msg += "<b>" + data.for_crisis_title + "</b><br/>";
    return_msg += "Combat Strategy Update: " + data.detail;
    return return_msg;
}
