google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function sdate(day, month, year)
{
  return date(day, month, year);
}

function edate(day, month, year)
{
  var d = date(day, month, year);
  d.setDate(d.getDate() + 1);
  return d;
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
    [ 'B2 - Synthesis pool - CONFS', 'Intro to synthesis pool', sdate(12, 06, 2017), edate(12, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '01', sdate(12, 06, 2017), edate(12, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '02', sdate(13, 06, 2017), edate(13, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '03', sdate(14, 06, 2017), edate(14, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '04', sdate(15, 06, 2017), edate(15, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '05', sdate(16, 06, 2017), edate(16, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '06', sdate(17, 06, 2017), edate(17, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '07', sdate(19, 06, 2017), edate(19, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '08', sdate(20, 06, 2017), edate(20, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '09', sdate(21, 06, 2017), edate(21, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '10', sdate(22, 06, 2017), edate(22, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '11', sdate(23, 06, 2017), edate(23, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '12', sdate(24, 06, 2017), edate(24, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '13', sdate(26, 06, 2017), edate(26, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '14', sdate(27, 06, 2017), edate(27, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '15', sdate(28, 06, 2017), edate(28, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '16', sdate(29, 06, 2017), edate(29, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '17', sdate(30, 06, 2017), edate(30, 06, 2017)],
    [ 'B2 - Synthesis pool - DAYS', '18', sdate(01, 07, 2017), edate(01, 07, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'SBMLparser', sdate(12, 06, 2017), edate(14, 06, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'palindrome', sdate(15, 06, 2017), edate(17, 06, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'FASTAtools', sdate(19, 06, 2017), edate(20, 06, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'projTester', sdate(21, 06, 2017), edate(24, 06, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'automakefile', sdate(26, 06, 2017), edate(28, 06, 2017)],
    [ 'B2 - Synthesis pool - PROJECTS', 'calendar', sdate(29, 06, 2017), edate(01, 07, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'SBMLparser', sdate(14, 06, 2017), edate(14, 06, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'palindrome', sdate(17, 06, 2017), edate(17, 06, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'FASTAtools', sdate(20, 06, 2017), edate(20, 06, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'projTester', sdate(24, 06, 2017), edate(24, 06, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'automakefile', sdate(28, 06, 2017), edate(28, 06, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'calendar', sdate(01, 07, 2017), edate(01, 07, 2017)],
    [ 'B2 - Synthesis pool - CHECKPOINTS', 'individual assessment', sdate(02, 07, 2017), edate(04, 07, 2017)]
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
