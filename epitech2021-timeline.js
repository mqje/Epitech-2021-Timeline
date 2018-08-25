google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function start(day, month, year)
{
  return date(day, month, year);
}

function end(day, month, year)
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
  var now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var left = date(4, 9, 2018);
  var data = [
    [ '\0', 'Now', now, now, { type: 'now' } ],

    [ 'Roadblock - Innovation & Part-Time', 'You must acquire at least 15 credits with the units (5 units) listed partly below:', left, left, { type: 'separator' } ],

    [ 'Moonshot', 'First week project', start(4, 9, 2018), end(7, 9, 2018) ],
    [ 'Moonshot', '#LOCAL THEME', start(4, 9, 2018), end(5, 9, 2018) ],
    [ 'Moonshot', '#SANTE', start(5, 9, 2018), end(6, 9, 2018) ],
    [ 'Moonshot', '#ENERGIE', start(6, 9, 2018), end(7, 9, 2018) ],
    [ 'Moonshot', 'Second week project', start(10, 9, 2018), end(13, 9, 2018) ],
    [ 'Moonshot', '#TRANSPORTS', start(10, 9, 2018), end(11, 9, 2018) ],
    [ 'Moonshot', '#FINTECH', start(11, 9, 2018), end(12, 9, 2018) ],
    [ 'Moonshot', '#FOODTECH', start(12, 9, 2018), end(13, 9, 2018) ],
    [ 'Moonshot', 'Moonshot project', start(14, 9, 2018), end(19, 10, 2018) ],

    [ 'Canvas & Proto', 'EIP Bootstrap (BMC)', start(22, 10, 2018), end(2, 12, 2018) ],

    [ 'Accelerator', 'EIP Bootstrap (Forward)', start(3, 12, 2018), end(14, 12, 2018) ],

    [ 'EIP Validation', 'EIP - Choix du sujet', start(3, 9, 2018), end(29, 1, 2019) ],

    [ 'Part-Time Job', 'Part-time internship', start(17, 9, 2018), end(10, 3, 2019) ],

    [ 'Roadblock - Soft Skills', 'You must acquire at least 5 credits with the units (6 units) listed partly below:', left, left, { type: 'separator' } ],

    [ 'Écrits Professionnels', 'Avocat du diable', start(17, 9, 2018), end(7, 10, 2018) ],
    [ 'Écrits Professionnels', '3 emails', start(8, 10, 2018), end(28, 10, 2018) ],
    [ 'Écrits Professionnels', 'Mémo professionnel', start(29, 10, 2018), end(18, 11, 2018) ],
    [ 'Écrits Professionnels', 'Informer: Le magazine du geek', start(12, 11, 2018), end(13, 1, 2019) ],

    [ 'Roadblock - Technical Expertise', 'You must acquire at least 15 credits with the technical units (13 units) listed partly below:', left, left, { type: 'separator' } ],

    [ 'Mathematics', '301dannon', start(17, 9, 2018), end(30, 9, 2018) ],
    [ 'Mathematics', '302separation', start(1, 10, 2018), end(14, 10, 2018) ],
    [ 'Mathematics', '303make', start(15, 10, 2018), end(28, 10, 2018) ],
    [ 'Mathematics', '304pacman', start(29, 10, 2018), end(11, 11, 2018) ],
    [ 'Mathematics', '305construction', start(12, 11, 2018), end(25, 11, 2018) ],
    [ 'Mathematics', '306radiator', start(26, 11, 2018), end(23, 12, 2018) ],
    [ 'Mathematics', '307multigrains', start(24, 12, 2018), end(13, 1, 2019) ],
    [ 'Mathematics', '308reedpipes', start(14, 1, 2019), end(27, 1, 2019) ],
    [ 'Mathematics', '309pollution', start(28, 1, 2019), end(10, 2, 2019) ],

    [ 'Security - Cryptography', 'Call For Papers', start(3, 9, 2018), end(30, 9, 2018) ],
    [ 'Security - Cryptography', 'CAESAR', start(17, 9, 2018), end(30, 9, 2018) ],
    [ 'Security - Cryptography', 'BTTF - CAESAR', start(5, 11, 2018), end(11, 11, 2018) ],

    [ 'Advanced C++ (3 units)', 'Babel', start(17, 9, 2018), end(7, 10, 2018) ],
    [ 'Advanced C++ (3 units)', 'BTTF - Babel', start(5, 11, 2018), end(11, 11, 2018) ],
    [ 'Advanced C++ (3 units)', 'R-Type', start(5, 11, 2018), end(2, 12, 2018) ],
    [ 'Advanced C++ (3 units)', 'BTTF - R-Type', start(21, 1, 2019), end(27, 1, 2019) ],
    [ 'Advanced C++ (3 units)', 'Zia', start(14, 1, 2019), end(10, 3, 2019) ],

    [ 'Application Development (3 units)', 'Dashboard', start(1, 10, 2018), end(21, 10, 2018) ],
    [ 'Application Development (3 units)', 'BTTF - Dashboard', start(5, 11, 2018), end(11, 11, 2018) ],
    [ 'Application Development (3 units)', 'Epicture', start(29, 10, 2018), end(18, 11, 2018) ],
    [ 'Application Development (3 units)', 'BTTF - Epicture', start(21, 1, 2019), end(27, 1, 2019) ],
    [ 'Application Development (3 units)', 'AREA', start(14, 1, 2019), end(10, 3, 2019) ],

    [ 'Artificial Intelligence', 'Gomoku', start(8, 10, 2018), end(28, 10, 2018) ],
    [ 'Artificial Intelligence', 'BTTF - Gomoku', start(5, 11, 2018), end(11, 11, 2018) ],

    [ 'Advanced Functional Programming (3 units)', 'functional evalExpr', start(22, 10, 2018), end(4, 11, 2018) ],
    [ 'Advanced Functional Programming (3 units)', 'BTTF - functional evalExpr', start(5, 11, 2018), end(11, 11, 2018) ],
    [ 'Advanced Functional Programming (3 units)', 'dumbXML', start(19, 11, 2018), end(13, 1, 2019) ],
    [ 'Advanced Functional Programming (3 units)', 'BTTF - dumbXML', start(21, 1, 2019), end(27, 1, 2019) ],
    [ 'Advanced Functional Programming (3 units)', 'KOAK', start(14, 1, 2019), end(10, 3, 2019) ],
  ];

  var formatted = data.slice();
  for (var i = 0; i < formatted.length; i++) {
    if (formatted[i].length > 4)
      formatted[i] = formatted[i].slice(0, 4);
  }
  dataTable.addRows(formatted);


  chart.draw(dataTable, {
    timeline: {
      colorByRowLabel: true
    }
  });

  nowLine('timeline-container');
  $("#timeline-container rect[width=3]").hide();

  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
    var row = data[obj.row];

    if (row.length > 4) {
      if (row[4].type && (row[4].type == 'now' || row[4].type == 'separator')) {
        $('.google-visualization-tooltip').css('display', 'none');
      }
    }

    nowLine('timeline-container');
    $("#timeline-container rect[width=3]").hide();
  })

  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
    nowLine('timeline-container');
    $("#timeline-container rect[width=3]").hide();
  })

  google.visualization.events.addListener(chart, 'select', function(){
    var row = data[chart.getSelection()[0].row];

    if (row.length > 4) {
      if (row[4].url) {
        var win = window.open(row[4].url, '_blank');
        win.focus();
      }
    }
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
  $.getJSON("https://api.github.com/repos/demaisj/Epitech-2021-Timeline/commits", function(json){
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
  setTimeout(function(){
    $('body').addClass('ready');
  }, 500);
});
