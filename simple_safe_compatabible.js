document.getElementById("auth_button").addEventListener("click", function() {
    var app_name = document.getElementById("app_name").value;
    var app_version = document.getElementById("app_version").value;
    var app_vendor = document.getElementById("app_vendor").value;
    var app_id = document.getElementById("app_id").value;

    authorize(app_name, app_id, app_version, app_vendor);
});

function authorize(app_name, app_id, app_version, app_vendor) {
    log("Authorizing...");
    set_busy(true);
    auth(POST, app_name, app_id, app_version, app_vendor).then(function(success_text) {
        set_busy(false);
        current_directory_path = "";
        current_file_path = "&nbsp;";
        codeMirrorEditor.setValue("");
        get_directory("");
        log(current_file_path);
    }).catch(function(error_text) {
        log("Authorization error:" + error_text);
        set_busy(false);
    });
}
