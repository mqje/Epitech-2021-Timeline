google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function drawChart() {
  var container = document.getElementById('timeline-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' })
  dataTable.addColumn({ type: 'string', id: 'Project' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '\0', 'Now', new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate()) ],
    [ 'B2 - Unix System programming', 'Navy', date(30, 01, 2017), date(19, 02, 2017)],
    [ 'B2 - Unix System programming', 'Tetris', date(20, 02, 2017), date(19, 03, 2017)],
    [ 'B2 - French writing skills', '"Le mode d\'emploi : prendre le lecteur par la main"', date(30, 01, 2017), date(19, 02, 2017)],
    [ 'B2 - French writing skills', '"Faire préciser"', date(27, 02, 2017), date(12, 03, 2017)],
    [ 'B2 - French writing skills', '"La lettre de vente : informer, argumenter, valoriser"', date(20, 03, 2017), date(16, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Corewar Championship', date(06, 02, 2017), date(26, 02, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Matchstick', date(13, 02, 2017), date(26, 02, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Corewar', date(27, 02, 2017), date(02, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Rush', date(04, 03, 2017), date(05, 03, 2017)],
    [ 'B2 - Mathematics', '106bombyx', date(06, 02, 2017), date(19, 02, 2017)],
    [ 'B2 - Mathematics', '107transfer', date(20, 02, 2017), date(05, 03, 2017)],
    [ 'B2 - Mathematics', '108trigo', date(06, 03, 2017), date(19, 03, 2017)],
    [ 'B2 - Mathematics', '109titration', date(20, 03, 2017), date(02, 04, 2017)],
    [ 'B2 - Mathematics', '110borwein', date(03, 04, 2017), date(16, 04, 2017)],
    [ 'B2 - C Graphical Programming', 'Raytracer 1', date(06, 02, 2017), date(19, 03, 2017)],
    [ 'B2 - C Graphical Programming', 'Raytracer', date(20, 03, 2017), date(28, 05, 2017)],
    [ 'B2 - C Graphical Programming', 'TekAdventure', date(20, 03, 2017), date(28, 05, 2017)],
    [ 'B2 - C Graphical Programming', 'Rush - Scroller', date(30, 03, 2017), date(02, 04, 2017)],
    [ 'B2 - Introduction to System Administration', '"My Web" project', date(27, 02, 2017), date(26, 03, 2017)],
    [ 'B2 - Introduction to Networks', 'Rush #1', date(27, 02, 2017), date(12, 03, 2017)],
    [ 'B2 - Shell programming', 'MiniShell 2', date(13, 03, 2017), date(11, 04, 2017)],
    [ 'B2 - Shell programming', '42sh', date(10, 04, 2017), date(21, 05, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Lem-in', date(03, 04, 2017), date(30, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Need4Stek', date(01, 05, 2017), date(04, 06, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Rush', date(02, 06, 2017), date(04, 06, 2017)],
    [ 'B2 - Introduction to AI', 'Dante\'s star', date(10, 04, 2017), date(14, 05, 2017)],
  ]);


  chart.draw(dataTable, {
    timeline: {
      colorByRowLabel: true
    }
  });

  nowLine('timeline-container');

  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
    if(obj.row == 0){
      $('.google-visualization-tooltip').css('display', 'none');
    }
    nowLine('timeline-container');
  })

  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
    nowLine('timeline-container');
  })
}

function nowLine(div) {

    //get the height of the timeline div
    var height;
    $('#' + div + ' rect').each(function(index) {
        var x = parseFloat($(this).attr('x'));
        var y = parseFloat($(this).attr('y'));

        if (x == 0 && y == 0) {
            height = parseFloat($(this).attr('height'))
        }
    })

    var nowWord = $('#' + div + ' text:contains("Now")');

    nowWord.prev().first().attr('height', height + 'px').attr('width', '1px').attr('y', '0');
    // add this line to remove the display:none style on the vertical line
    $('#' + div + '  text:contains("Now")').each(function(idx, value) {
        if (idx == 0) {
            $(value).parent().find("rect").first().removeAttr("style");
        } else if (idx == 1) {
            $(value).parent().find("rect").first().attr("style", "display:none;");
        }

    });
}

$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/DeathMiner/Epitech-2021-Timeline/commits", function(json){
    var msg, el, date;

    $("#changelog-container").empty();

    for (var i = 0; i < json.length; i++) {
      msg = json[i].commit.message.split("\n");
      date = moment(json[i].commit.committer.date);
      el = $(`<p class="commit">
<a href="${json[i].html_url}" target="_blank" class="commit-msg">${msg[0]}</a>
<span title="${date.format("dddd, MMMM Do YYYY, h:mm:ss a")}" class="commit-date">${date.fromNow()}</span>
</p>`);
      if (msg.length > 1){
        for (var j = msg.length - 1; j >= 1; j--) {
          if (msg[j].length > 0){
            el.addClass("expanded");
            el.find("a").after(`<span class="commit-desc">${msg[j]}</span>`);
          }
        }
      }
      el.appendTo($("#changelog-container"));
    }

    if (json.length <= 0){
      $("#changelog-container").text("No commits !? xO");
    }
  })
  .fail(function(){
    $("#changelog-container").text("Error while loading changelog :'(");
  });

  function set_theme(dark){
    var dark = dark || false;

    window.localStorage.setItem("dark", dark);

    if (dark){
      $("body").addClass("dark");
      $("#switch").text("Switch to light");
    }
    else{
      $("body").removeClass("dark");
      $("#switch").text("Switch to dark");
    }
  }

  $("#switch").on("click", function(){
    set_theme(!$("body").hasClass("dark"));
    return false;
  })

  set_theme(window.localStorage.getItem("dark") == "true" ? true : false);
});
